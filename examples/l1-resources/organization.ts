
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnOrganization } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly orgOwnerId: string;
  readonly profile: string;
  readonly name: string;
  readonly awsSecretName: string;
}

interface apiKey {
  readonly roles: string[];
  readonly description: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const myOrg = new CfnOrganization(this, 'MyOrganization', {
      orgOwnerId: atlasProps.orgOwnerId,
      profile: atlasProps.profile,
      name: atlasProps.name,
      awsSecretName: atlasProps.awsSecretName,
      apiKey: {
        roles: ["ORG_OWNER"],
        description: "test-cdk"
      },
      skipDefaultAlertsSettings: true,
      genAiFeaturesEnabled: true
    });
  }

  getContextProps(): AtlasStackProps {
    const orgOwnerId = this.node.tryGetContext('orgOwnerId');
    if (!orgOwnerId) {
      throw "No context value specified for orgOwnerId. Please specify via the cdk context."
    }
    const name = this.node.tryGetContext('name') ?? 'test-org-cdk';
    const awsSecretName = this.node.tryGetContext('awsSecretName') ?? 'cfn/atlas/profile/org-retest';
    const profile = this.node.tryGetContext('profile') ?? 'default';

    return {
      orgOwnerId,
      profile,
      name,
      awsSecretName,
    }
  }
}
