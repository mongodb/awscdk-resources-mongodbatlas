
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnOrgInvitation, CfnOrgInvitationPropsRoles } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly orgId: string;
  readonly profile: string;
  readonly username: string;
  readonly teamId: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const myOrgInvitation = new CfnOrgInvitation(this, 'MyOrgInvitation', {
      orgId: atlasProps.orgId,
      profile: atlasProps.profile,
      username: atlasProps.username,
      teamIds: [atlasProps.teamId],
      roles: [CfnOrgInvitationPropsRoles.GROUP_CLUSTER_MANAGER]
    });
  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    const username = this.node.tryGetContext('projName') ?? 'test-proj';
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const teamId = this.node.tryGetContext('profile') ?? 'default';

    return {
      orgId,
      profile,
      username,
      teamId
    }
  }
}
