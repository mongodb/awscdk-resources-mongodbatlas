import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import { Construct } from 'constructs';
import {
  CfnCloudProviderAccessAuthorization,
  CfnCloudProviderAccessSetup,
  CfnEncryptionAtRest,
} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly region: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    // Register the Atlas side of the trust handshake. The role id, the Atlas
    // principal ARN and the external ID exist only after this resource.
    const cloudProviderAccessSetup = new CfnCloudProviderAccessSetup(this, 'CloudProviderAccessSetup', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
    });

    // The customer owns the IAM role, and its trust policy consumes the values
    // the registration returned.
    const atlasRole = new iam.Role(this, 'AtlasCloudProviderAccessRole', {
      assumedBy: new iam.ArnPrincipal(cloudProviderAccessSetup.attrAtlasAWSAccountArn),
      externalIds: [cloudProviderAccessSetup.attrAtlasAssumedRoleExternalId],
    });

    const encryptionKey = new kms.Key(this, 'AtlasEncryptionKey', {
      enableKeyRotation: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });
    encryptionKey.grantEncryptDecrypt(atlasRole);

    // Authorize the IAM role ARN against the registration.
    const cloudProviderAccessAuthorization = new CfnCloudProviderAccessAuthorization(this, 'CloudProviderAccessAuthorization', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      roleId: cloudProviderAccessSetup.attrRoleId,
      iamAssumedRoleArn: atlasRole.roleArn,
    });

    // Referencing the role id alone does not wait for the authorization, so the
    // encryption configuration depends on it explicitly.
    const encryptionAtRest = new CfnEncryptionAtRest(this, 'EncryptionAtRest', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      awsKmsConfig: {
        enabled: true,
        region: atlasProps.region,
        roleId: cloudProviderAccessSetup.attrRoleId,
        customerMasterKeyId: encryptionKey.keyId,
      },
    });
    encryptionAtRest.node.addDependency(cloudProviderAccessAuthorization);
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId) {
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const region = this.node.tryGetContext('region');

    return {
      projId,
      profile,
      region,
    }
  }
}
