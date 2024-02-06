import {
  CfnOutput,
  aws_iam as iam,
  aws_secretsmanager as secretsmanager,
  aws_cloudformation as cloudformation,
  SecretValue,
  Duration,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export const AtlasBasicResources: string[] = [
  "Cluster",
  "Project",
  "DatabaseUser",
  "ProjectIpAccessList",
];

export class MongoAtlasBootstrapProps {
  /**
   * The IAM role name for CloudFormation Extension Execution.
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html
   * @default auto generat the name.
   */
  readonly roleName!: string;
  /**
   * The secret profile name for MongoDB Atlas.
   * @default generate a dummy secret.
   * @see https://github.com/mongodb/mongodbatlas-cloudformation-resources/tree/master#2-configure-your-profile
   */
  readonly secretProfile!: string;
  /**
   * List of strings representing mongoDB atlas types to activate.
   * the exported AtlasBasicResources can be used for AtlasBasic resources
   * if not provided non resources will be activated
   * @example typesToActivate=["Cluster","Project"] this will actiate MongoDB::Atlas::Project && MongoDB::Atlas::Cluster
   */
  readonly typesToActivate?: string[];
}

/**
 * Generate the CFN extension execution role.
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html
 */
export class MongoAtlasBootstrap extends Construct {
  readonly role: iam.IRole;
  constructor(scope: Construct, id: string, props?: MongoAtlasBootstrapProps) {
    super(scope, id);

    this.role = new iam.Role(this, "mongoDBAtlasCFNExecutionRole", {
      maxSessionDuration: Duration.seconds(8400),
      assumedBy: new iam.CompositePrincipal(
        new iam.ServicePrincipal("cloudformation.amazonaws.com"),
        new iam.ServicePrincipal("resources.cloudformation.amazonaws.com"),
        new iam.ServicePrincipal("lambda.amazonaws.com")
      ),
      path: "/",
      roleName: props?.roleName,
    });

    const policyStatement = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        "secretsmanager:DescribeSecret",
        "secretsmanager:GetSecretValue",
        "ec2:CreateVpcEndpoint",
        "ec2:DeleteVpcEndpoints",
        "cloudformation:CreateResource",
        "cloudformation:DeleteResource",
        "cloudformation:GetResource",
        "cloudformation:GetResourceRequestStatus",
        "cloudformation:ListResources",
        "cloudformation:UpdateResource",
        "iam:AttachRolePolicy",
        "iam:CreateRole",
        "iam:DeleteRole",
        "iam:GetRole",
        "iam:GetRolePolicy",
        "iam:ListAttachedRolePolicies",
        "iam:ListRolePolicies",
        "iam:PutRolePolicy",
      ],
      resources: ["*"],
    });

    const atlasCdkPolicy = new iam.Policy(this, "AtlasCDKExecutionPolicy", {
      policyName: "AtlasCDKExecution", // Custom Policy Name
      statements: [policyStatement],
    });

    this.role.attachInlinePolicy(atlasCdkPolicy);

    if (props?.secretProfile) {
      new MongoSecretProfile(this, "MongoSecretProfile", props?.secretProfile);
    }

    if (props?.typesToActivate) {
      for (let type of props?.typesToActivate) {
        new cloudformation.CfnTypeActivation(this, `${type}TypeActivation`, {
          executionRoleArn: this.role.roleArn,
          type: `RESOURCE`,
          typeName: `MongoDB::Atlas::${type}`,
          publisherId: "bb989456c78c398a858fef18f2ca1bfc1fbba082",
        });
      }
    }
  }
}

export class MongoSecretProfile extends Construct {
  constructor(scope: Construct, id: string, profileName: string) {
    super(scope, id);

    // create a secret
    const secret = new secretsmanager.Secret(this, profileName, {
      secretName: `cfn/atlas/profile/${profileName}`,
      description: "Secret used for MongoDB Atlas Cloud Formation api keys",
      secretStringValue: SecretValue.unsafePlainText(
        '{"PublicKey":"yourAtlasPublicKey", "PrivateKey": "yourAtlasPrivateKey"}'
      ),
    });

    new CfnOutput(this, "SecretName", { value: secret.secretName });
    new CfnOutput(this, "UpdateSecretCommand", {
      value:
        `aws secretsmanager update-secret --secret-id ${secret.secretName}` +
        ' --secret-string "{\\"PublicKey\\":\\"${MONGO_ATLAS_PUBLIC_KEY}\\",\\"PrivateKey\\":\\"${MONGO_ATLAS_PRIVATE_KEY}\\"}"',
    });
  }
}
