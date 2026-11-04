import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnCloudProviderAccessAuthorization } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly roleId: string;
  readonly iamAssumedRoleArn: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    new CfnCloudProviderAccessAuthorization(this, 'CloudProviderAccessAuthorization', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      roleId: atlasProps.roleId,
      iamAssumedRoleArn: atlasProps.iamAssumedRoleArn,
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId) {
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const roleId = this.node.tryGetContext('roleId');
    if (!roleId) {
      throw "No context value specified for roleId. Please specify via the cdk context."
    }

    const iamAssumedRoleArn = this.node.tryGetContext('iamAssumedRoleArn');
    if (!iamAssumedRoleArn) {
      throw "No context value specified for iamAssumedRoleArn. Please specify via the cdk context."
    }

    return {
      projId,
      profile,
      roleId,
      iamAssumedRoleArn,
    }
  }
}
