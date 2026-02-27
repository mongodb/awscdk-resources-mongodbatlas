// This example creates a secret for a MongoDB Atlas Project Service Account using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnProjectServiceAccount, CfnProjectServiceAccountSecret } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly projectId: string;
  readonly secretExpiresAfterHours: number;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    // Create a Project Service Account first
    const projectServiceAccount = new CfnProjectServiceAccount(this, 'ProjectServiceAccount', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      name: 'my-project-service-account',
      description: 'Service account for project automation',
      roles: ['GROUP_READ_ONLY'],
      secretExpiresAfterHours: atlasProps.secretExpiresAfterHours,
    });

    // Create a new secret for the Project Service Account using its ClientId output
    new CfnProjectServiceAccountSecret(this, 'ProjectServiceAccountSecret', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      clientId: projectServiceAccount.attrClientId,
      secretExpiresAfterHours: atlasProps.secretExpiresAfterHours,
    });
  }

  getContextProps(): AtlasStackProps {
    const projectId = this.node.tryGetContext('projectId');
    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context.";
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const secretExpiresAfterHours = parseInt(
      this.node.tryGetContext('secretExpiresAfterHours') ?? '8760',
      10
    );

    return {
      profile,
      projectId,
      secretExpiresAfterHours,
    };
  }
}
