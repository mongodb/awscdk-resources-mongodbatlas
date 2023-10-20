import * as cdk from "aws-cdk-lib";
import { aws_lambda } from "aws-cdk-lib";
import * as ecr from "aws-cdk-lib/aws-ecr";
import * as eventbus from "aws-cdk-lib/aws-events";
import * as event_targets from "aws-cdk-lib/aws-events-targets";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as sagemaker from "aws-cdk-lib/aws-sagemaker";
import { Construct } from "constructs";
import * as atlas from "../../index";

/**
 * @description
 * @export
 * @interface SageMakerIntegrationProps
 */
export interface SageMakerIntegrationProps {
  readonly appId: string;
  readonly collectionName: string;
  readonly databaseName: string;
  readonly mongoDBEndpoint: string;
  readonly profile: string;
  readonly projectID: string;
  readonly pullLambdaImageURI: string;
  readonly pushLambdaImageURI: string;
  readonly sagemakerInstanceType: string;
  readonly sagemakerModelS3URI: string;
  readonly sagemakerModelImageURL: string;
  readonly serviceId: string;
}

/**
 * @description
 * @export
 * @class SageMakerIntegration
 * @extends {Construct}
 */

export class SageMakerIntegration extends Construct {
  /**
   * @description
   * @type {sagemaker.CfnModel}
   * @memberof SageMakerIntegration
   */
  readonly eventTrigger: atlas.CfnTrigger;

  /**
   * @description
   * @type {sagemaker.CfnModel}
   * @memberof SageMakerIntegration
   */
  readonly sagemakerModel: sagemaker.CfnModel;

  /**
   * @description
   * @type {sagemaker.CfnEndpointConfig}
   * @memberof SageMakerIntegration
   */
  readonly sagemakerEndpointConfig: sagemaker.CfnEndpointConfig;

  /**
   * @description
   * @type {sagemaker.CfnEndpoint}
   * @memberof SageMakerIntegration
   */
  readonly sagemakerEndpoint: sagemaker.CfnEndpoint;

  /**
   * @description
   * @type {iam.Role}
   * @memberof SageMakerIntegration
   */
  readonly sagemakerExecutionRole: iam.Role;

  /**
   * @description
   * @type {eventbus.EventBus}
   * @memberof SageMakerIntegration
   */
  readonly eventBusForCapturingMDBEvents: eventbus.EventBus;

  /**
   * @description
   * @type {eventbus.EventBus}
   * @memberof SageMakerIntegration
   */
  readonly eventbusForSagemakerResults: eventbus.EventBus;

  /**
   * @description
   * @type {eventbus.Rule}
   * @memberof SageMakerIntegration
   */
  readonly mongodbEventRule: eventbus.Rule;

  /**
   * @description
   * @type {eventbus.Rule}
   * @memberof SageMakerIntegration
   */
  readonly sagemakerEventRule: eventbus.Rule;

  /**
   * @description
   * @type {lambda.Function}
   * @memberof SageMakerIntegration
   */
  readonly lambdaFunctionToReadMDBEvents: lambda.Function;

  /**
   * @description
   * @type {iam.Role}
   * @memberof SageMakerIntegration
   */
  readonly pushLambdaFunctionRole: iam.Role;

  /**
   * @description
   * @type {lambda.Function}
   * @memberof SageMakerIntegration
   */
  readonly lambdaFunctionToWriteToMDB: lambda.Function;

  /**
   * @description
   * @type {iam.Role}
   * @memberof SageMakerIntegration
   */
  readonly pullLambdaFunctionRole: iam.Role;

  /** @type {*} */
  mdbDefaults = {
    profile: "default",
    clusterType: "REPLICASET",
  };

  /**
   * Creates an instance of AtlasBasic.
   * @param {Construct} scope
   * @param {string} id
   * @param {SageMakerIntegrationProps} props
   * @memberof SageMakerIntegration
   */
  constructor(scope: Construct, id: string, props: SageMakerIntegrationProps) {
    super(scope, id);

    // Create mongodb event trigger
    this.eventTrigger = new atlas.CfnTrigger(this, "ThirdPartyIntegration", {
      projectId: props.projectID,
      profile: props.profile,
      name: "sagemaker-trigger",
      type: "DATABASE",
      appId: props.appId,
      databaseTrigger: {
        operationTypes: [atlas.DatabaseConfigOperationTypes.INSERT],
        database: props.databaseName,
        collection: props.collectionName,
        serviceId: props.serviceId,
      },
      eventProcessors: {
        awseventbridge: {
          awsConfig: {
            region: cdk.Aws.REGION,
            accountId: cdk.Aws.ACCOUNT_ID,
          },
        },
      },
    });

    // Create a SageMaker Execution Role
    this.sagemakerExecutionRole = new iam.Role(this, "SageMakerExecutionRole", {
      assumedBy: new iam.ServicePrincipal("sagemaker.amazonaws.com"),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonSageMakerFullAccess"),
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          "AmazonSageMakerCanvasFullAccess"
        ),
      ],
    });

    // Create a SageMaker construct
    this.sagemakerModel = new sagemaker.CfnModel(this, "SageMakerModel", {
      executionRoleArn: this.sagemakerExecutionRole.roleArn,
      primaryContainer: {
        image: props.sagemakerModelImageURL,
        modelDataUrl: props.sagemakerModelS3URI,
        environment: {
          SAGEMAKER_PROGRAM: "inference.py",
          SAGEMAKER_SUBMIT_DIRECTORY: props.sagemakerModelS3URI,
        },
      },
    });

    // Create a SageMaker Endpoint Config construct
    this.sagemakerEndpointConfig = new sagemaker.CfnEndpointConfig(
      this,
      "SageMakerEndpointConfig",
      {
        productionVariants: [
          {
            initialInstanceCount: 1,
            initialVariantWeight: 1.0,
            instanceType: props.sagemakerInstanceType,
            modelName: this.sagemakerModel.attrModelName, // Change this as per the model workload.
            variantName: this.sagemakerModel.attrModelName,
          },
        ],
      }
    );

    // Create a SageMaker Endpoint construct
    this.sagemakerEndpoint = new sagemaker.CfnEndpoint(
      this,
      "SageMakerEndpoint",
      {
        endpointConfigName: this.sagemakerEndpointConfig.attrEndpointConfigName,
        endpointName: "sagemaker-endpoint",
      }
    );
    // Create MDB Event Bus
    this.eventBusForCapturingMDBEvents = new eventbus.EventBus(
      this,
      "MDBEventBus",
      {
        eventSourceName: `aws.partner/mongodb.com/stitch.trigger/${this.eventTrigger.attrId}`,
      }
    );
    this.eventBusForCapturingMDBEvents.applyRemovalPolicy(
      cdk.RemovalPolicy.DESTROY
    );

    // Create a SageMaker Event Bus
    this.eventbusForSagemakerResults = new eventbus.EventBus(
      this,
      "SageMakerEventBus",
      {
        eventBusName: "qs-mongodb-sagemaker-results",
      }
    );
    this.eventbusForSagemakerResults.applyRemovalPolicy(
      cdk.RemovalPolicy.DESTROY
    );
    // Create a Role for Lambda to push results to MongoDB
    this.pushLambdaFunctionRole = new iam.Role(
      this,
      "RoleForLambdaToPushResultsToMDB",
      {
        assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            "service-role/AWSLambdaBasicExecutionRole"
          ),
        ],
      }
    );
    const pushRepo = ecr.Repository.fromRepositoryName(
      this,
      "PushRepository",
      props.pushLambdaImageURI
    );

    // Create a Lambda function to push results to MongoDB
    this.lambdaFunctionToWriteToMDB = new lambda.Function(
      this,
      "PushToMDBLambdaFunction",
      {
        handler: aws_lambda.Handler.FROM_IMAGE,
        runtime: aws_lambda.Runtime.FROM_IMAGE, // Replace with your preferred runtime
        role: this.pushLambdaFunctionRole, // Use a role defined elsewhere
        code: lambda.Code.fromEcrImage(pushRepo), // Replace with your ECR image URI
        environment: {
          mongo_endpoint: props.mongoDBEndpoint, // Replace with your MongoDB endpoint
          dbname: props.databaseName, // Replace with your database name
        },
        architecture: lambda.Architecture.X86_64,
        memorySize: 1024,
        timeout: cdk.Duration.seconds(300),
      }
    );
    const sagemakerEPName = this.sagemakerEndpoint.endpointName ?? "";

    console.log("sagemakerEPName: ", sagemakerEPName);
    // Create a Role for Event Bridge to invoke Lambda to read MongoDB events
    this.pullLambdaFunctionRole = new iam.Role(this, "PullLambdaFunctionRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
      roleName: "PullLambdaFunctionRole", // Set your desired role name
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          "service-role/AWSLambdaBasicExecutionRole"
        ),
      ],
      inlinePolicies: {
        SageMakerEndpointInvocationPolicy: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              effect: iam.Effect.ALLOW,
              actions: ["sagemaker:InvokeEndpoint"],
              resources: ["*"], // Replace with your SageMaker endpoint ARN
            }),
            new iam.PolicyStatement({
              effect: iam.Effect.ALLOW,
              actions: ["events:PutEvents"],
              resources: [this.eventbusForSagemakerResults.eventBusArn], // Replace with your event bus ARN
            }),
          ],
        }),
      },
    });

    const pullRepo = ecr.Repository.fromRepositoryName(
      this,
      "PullRepository",
      props.pullLambdaImageURI
    );
    // const pullRepo = new ecr.Repository(this, "PullRepository", {
    //   repositoryName: props.pullLambdaImageURI,
    // });
    // Create a Lambda function to pull results from SageMaker
    this.lambdaFunctionToReadMDBEvents = new lambda.Function(
      this,
      "PullFromSageMakerLambdaFunction",
      {
        runtime: aws_lambda.Runtime.FROM_IMAGE,
        code: lambda.Code.fromEcrImage(pullRepo),
        handler: aws_lambda.Handler.FROM_IMAGE,
        role: this.pullLambdaFunctionRole,
        environment: {
          model_endpoint: sagemakerEPName, // Use an existing resource or replace with your model endpoint
          region_name: cdk.Aws.REGION,
          eventbus_name: this.eventbusForSagemakerResults.eventBusName, // Use an existing resource or replace with your event bus
        },
        architecture: lambda.Architecture.X86_64,
        memorySize: 1024,
        timeout: cdk.Duration.seconds(300),
      }
    );
    this.lambdaFunctionToReadMDBEvents.node.addDependency(
      this.eventBusForCapturingMDBEvents
    );
    // Create a SageMaker Event Rule
    this.sagemakerEventRule = new eventbus.Rule(this, "SageMakerEventRule", {
      description: "Event Rule to match result events returned by pull Lambda.",
      eventBus: this.eventbusForSagemakerResults,
      eventPattern: {
        source: ["user-event"],
        detailType: ["user-preferences"],
      },
      enabled: true,
      targets: [
        new event_targets.LambdaFunction(this.lambdaFunctionToWriteToMDB),
      ],
      ruleName: "push-to-mongodb",
    });

    // Create mdb event rule
    this.mongodbEventRule = new eventbus.Rule(
      this,
      "EventRuleToMatchMDBEvents",
      {
        description: "Event Rule to match MongoDB change events.",
        eventBus: this.eventBusForCapturingMDBEvents,
        eventPattern: {
          account: [cdk.Aws.ACCOUNT_ID],
        },
        enabled: true,
        targets: [
          new event_targets.LambdaFunction(this.lambdaFunctionToReadMDBEvents),
        ],
        ruleName: "pull-mdb-events",
      }
    );

    // Create a permission for Event Bridge to invoke Lambda to read MongoDB events
    this.lambdaFunctionToReadMDBEvents.addPermission(
      "LambdaToReadMDBEventsPermission",
      {
        principal: new iam.ServicePrincipal("events.amazonaws.com"),
        sourceArn: this.mongodbEventRule.ruleArn,
      }
    );

    // Create a permission for Event Bridge to invoke Lambda to read MongoDB events
    this.lambdaFunctionToWriteToMDB.addPermission(
      "LambdaToWriteMDBEventsPermission",
      {
        principal: new iam.ServicePrincipal("events.amazonaws.com"),
        sourceArn: this.sagemakerEventRule.ruleArn,
      }
    );
  }
}
