import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnEncryptionAtRest } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly region: string;
  readonly customerMasterKeyId: string;
  readonly roleId: string;
  readonly requirePrivateNetworking: boolean;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    new CfnEncryptionAtRest(this, 'EncryptionAtRest', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      enabledForSearchNodes: true,
      awsKmsConfig: {
        enabled: true,
        region: atlasProps.region,
        customerMasterKeyId: atlasProps.customerMasterKeyId,
        roleId: atlasProps.roleId,
        requirePrivateNetworking: atlasProps.requirePrivateNetworking,
      },
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId) {
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const customerMasterKeyId = this.node.tryGetContext('customerMasterKeyId');
    const region = this.node.tryGetContext('region');
    const roleId = this.node.tryGetContext('roleId');
    const requirePrivateNetworking = this.node.tryGetContext('requirePrivateNetworking') === 'true';

    return {
      projId,
      profile,
      region,
      customerMasterKeyId,
      roleId,
      requirePrivateNetworking,
    }
  }
}
