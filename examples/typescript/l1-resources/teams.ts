// This example creates a database user in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnTeams,  CfnTeamsPropsRoleNames} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly name: string;
  readonly username: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const meTeam = new CfnTeams(this, 'MyTeam', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      name: atlasProps.name,
      roleNames: [CfnTeamsPropsRoleNames.GROUP_CLUSTER_MANAGER],
      usernames: [atlasProps.username]
    })
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const name = this.node.tryGetContext('name');
    const username = this.node.tryGetContext('username');


    return {
      projId,
      profile,
      name,
      username
    }
  }
}
