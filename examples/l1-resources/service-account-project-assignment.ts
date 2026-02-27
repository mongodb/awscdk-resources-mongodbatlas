// This example assigns a MongoDB Atlas Service Account to a project with specified roles using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnServiceAccount, CfnServiceAccountProjectAssignment } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly orgId: string;
  readonly projectId: string;
  readonly roles: string[];
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    // Create the Service Account at org level
    const serviceAccount = new CfnServiceAccount(this, 'ServiceAccount', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      name: 'my-service-account',
      description: 'Service account for automated access',
      roles: ['ORG_MEMBER'],
      secretExpiresAfterHours: 8760,
    });

    // Assign the Service Account to a project with project-level roles
    new CfnServiceAccountProjectAssignment(this, 'ServiceAccountProjectAssignment', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      clientId: serviceAccount.attrClientId,
      projectId: atlasProps.projectId,
      roles: atlasProps.roles,
    });
  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId) {
      throw "No context value specified for orgId. Please specify via the cdk context.";
    }

    const projectId = this.node.tryGetContext('projectId');
    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context.";
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const rolesRaw = this.node.tryGetContext('roles') ?? 'GROUP_READ_ONLY';
    const roles: string[] = rolesRaw.split(',');

    return {
      profile,
      orgId,
      projectId,
      roles,
    };
  }
}
