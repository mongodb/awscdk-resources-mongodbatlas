// This example creates a database user in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnX509AuthenticationDatabaseUser } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly username: string;
  readonly cas: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const myCfnX509AuthenticationDatabaseUser = new CfnX509AuthenticationDatabaseUser(this, 'MyCfnX509AuthenticationDatabaseUser', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      userName: atlasProps.username,
      customerX509: {
        cas: atlasProps.cas,
      }
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId) {
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const cas = this.node.tryGetContext('cas');
    const username = this.node.tryGetContext('username');



    return {
      projId,
      profile,
      username,
      cas
    }
  }
}
