// This example creates a Service Account scoped directly to a MongoDB Atlas project using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnProjectServiceAccount } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly projectId: string;
  readonly name: string;
  readonly description: string;
  readonly roles: string[];
  readonly secretExpiresAfterHours: number;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    new CfnProjectServiceAccount(this, 'ProjectServiceAccount', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      name: atlasProps.name,
      description: atlasProps.description,
      roles: atlasProps.roles,
      secretExpiresAfterHours: atlasProps.secretExpiresAfterHours,
    });
  }

  getContextProps(): AtlasStackProps {
    const projectId = this.node.tryGetContext('projectId');
    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context.";
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const name = this.node.tryGetContext('name') ?? 'my-project-service-account';
    const description = this.node.tryGetContext('description') ?? 'Service account for project automation';
    const rolesRaw = this.node.tryGetContext('roles') ?? 'GROUP_READ_ONLY';
    const roles: string[] = rolesRaw.split(',');
    const secretExpiresAfterHours = parseInt(
      this.node.tryGetContext('secretExpiresAfterHours') ?? '8760',
      10
    );

    return {
      profile,
      projectId,
      name,
      description,
      roles,
      secretExpiresAfterHours,
    };
  }
}
