import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnFederatedSettingsOrgRoleMapping } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly orgId: string;
  readonly projId: string;
  readonly profile: string;
  readonly groupName: string;
  readonly role: string;
  readonly federationSettingsId: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const federationSettings = new CfnFederatedSettingsOrgRoleMapping(this, 'FederationSettings', {
      profile:  atlasProps.profile,
      orgId: atlasProps.projId,
      externalGroupName: atlasProps.groupName,
      roleAssignments: [
        {
          role: atlasProps.role,
          projectId: atlasProps.projId
        }
      ],
      federationSettingsId: atlasProps.federationSettingsId
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const groupName = this.node.tryGetContext('groupName');
    const orgId = this.node.tryGetContext('orgId');
    const role = this.node.tryGetContext('role');
    const federationSettingsId = this.node.tryGetContext('federationSettingsId');
    return {
      orgId,
      projId,
      profile,
      groupName,
      role,
      federationSettingsId
    }
  }
}
