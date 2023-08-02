import {
  CfnOutput,
  SecretValue,
  aws_iam as iam,
  aws_secretsmanager as secretsmanager,
  aws_cloudformation as cloudformation,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export class MongoAtlasBootstrapProps {
  /**
   * The IAM role name for CloudFormation Extension Execution.
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html
   *
   * @default auto generat the name.
   */
  readonly roleName?: string;
  /**
   * The secret profile name for MongoDB Atlas.
   * @default generate a dummy secret.
   * @see https://github.com/mongodb/mongodbatlas-cloudformation-resources/tree/master#2-configure-your-profile
   */
  readonly secretProfile!: string;
  /**
   * MongoDB Atlas Public Key: the public key acts as the username when making API requests.
   * @see https://www.mongodb.com/docs/atlas/configure-api-access/#:~:text=API%20keys%20have%20two%20parts,Atlas%20through%20the%20user%20interface.
   */
  readonly mongoDBAtlasPublicKey!: string;
  /**
   * MongoDB Atlas Private Key: The private key acts as the password when making API requests.
   * @see https://www.mongodb.com/docs/atlas/configure-api-access/#:~:text=API%20keys%20have%20two%20parts,Atlas%20through%20the%20user%20interface.
   */
  readonly mongoDBAtlasPrivateKey!: string;
  /**
   * List of strings representing mongoDB atlas types to activate.
   * @default ["Cluster","Project","DatabaseUser","ProjectIpAccessList"]
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
      assumedBy: new iam.ServicePrincipal(
        "resources.cloudformation.amazonaws.com"
      ),
      roleName: props?.roleName,
    });

    const atlasCdkPolicy = new iam.Policy(this, "AtlasCDKExecutionPolicy", {
      policyName: "AtlasCDKExecution", // Custom Policy Name
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: [
            "secretsmanager:CreateSecret",
            "secretsmanager:CreateSecretInput",
            "secretsmanager:DescribeSecret",
            "secretsmanager:GetSecretValue",
            "secretsmanager:PutSecretValue",
            "secretsmanager:UpdateSecretVersionStage",
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
        }),
      ],
    });

    this.role.attachInlinePolicy(atlasCdkPolicy);

    if (props?.secretProfile) {
      new MongoSecretProfile(
        this,
        "MongoSecretProfile",
        props?.secretProfile,
        props?.mongoDBAtlasPrivateKey,
        props?.mongoDBAtlasPublicKey
      );
    }

    if (props?.typesToActivate) {
      for (let type of props?.typesToActivate) {
        new cloudformation.CfnTypeActivation(
          this,
          `${type}TypeActivation`,
          /* all optional props */ {
            executionRoleArn: this.role.roleArn,
            type: `RESOURCE`,
            typeName: `MongoDB::Atlas::${type}`,
            publisherId: "bb989456c78c398a858fef18f2ca1bfc1fbba082",
          }
        );
      }
    }
  }
}

export class MongoSecretProfile extends Construct {
  constructor(
    scope: Construct,
    id: string,
    profileName: string,
    publicKey: string,
    privateKey: string
  ) {
    super(scope, id);

    const secretValue = {
      PublicKey: publicKey,
      PrivateKey: privateKey,
    };

    // create a secret
    const secret = new secretsmanager.Secret(this, profileName, {
      secretName: `cfn/atlas/profile/${profileName}`,
      description: "Secret used for MongoDB Atlas Cloud Formation api keys",
      secretStringValue: SecretValue.unsafePlainText(
        JSON.stringify(secretValue)
      ),
    });
    new CfnOutput(this, "SecretName", { value: secret.secretName });
  }
}
