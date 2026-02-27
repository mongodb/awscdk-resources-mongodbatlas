// This example creates a Service Account for a MongoDB Atlas organization using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnServiceAccount } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly orgId: string;
  readonly name: string;
  readonly description: string;
  readonly roles: string[];
  readonly secretExpiresAfterHours: number;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    new CfnServiceAccount(this, 'ServiceAccount', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      name: atlasProps.name,
      description: atlasProps.description,
      roles: atlasProps.roles,
      secretExpiresAfterHours: atlasProps.secretExpiresAfterHours,
    });
  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId) {
      throw "No context value specified for orgId. Please specify via the cdk context.";
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const name = this.node.tryGetContext('name') ?? 'my-service-account';
    const description = this.node.tryGetContext('description') ?? 'Service account for automated access';
    const rolesRaw = this.node.tryGetContext('roles') ?? 'ORG_MEMBER';
    const roles: string[] = rolesRaw.split(',');
    const secretExpiresAfterHours = parseInt(
      this.node.tryGetContext('secretExpiresAfterHours') ?? '8760',
      10
    );

    return {
      profile,
      orgId,
      name,
      description,
      roles,
      secretExpiresAfterHours,
    };
  }
}
