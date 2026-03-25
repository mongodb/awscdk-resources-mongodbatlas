// This example creates a secret for an existing MongoDB Atlas Service Account using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnServiceAccount, CfnServiceAccountSecret } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly orgId: string;
  readonly secretExpiresAfterHours: number;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    // Create a Service Account first
    const serviceAccount = new CfnServiceAccount(this, 'ServiceAccount', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      name: 'my-service-account',
      description: 'Service account for automated access',
      roles: ['ORG_MEMBER'],
      secretExpiresAfterHours: atlasProps.secretExpiresAfterHours,
    });

    // Create a secret for the Service Account using its ClientId output
    new CfnServiceAccountSecret(this, 'ServiceAccountSecret', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      clientId: serviceAccount.attrClientId,
      secretExpiresAfterHours: atlasProps.secretExpiresAfterHours,
    });
  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId) {
      throw "No context value specified for orgId. Please specify via the cdk context.";
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const secretExpiresAfterHours = parseInt(
      this.node.tryGetContext('secretExpiresAfterHours') ?? '8760',
      10
    );

    return {
      profile,
      orgId,
      secretExpiresAfterHours,
    };
  }
}
