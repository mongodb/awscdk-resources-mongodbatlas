// This example creates a database user in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnDatabaseUser } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly roleName: string;
  readonly dbName: string;
  readonly username: string;
  readonly password: string;
  readonly description: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const customDatabaseUser = new CfnDatabaseUser(this, 'CustomDatabaseUser', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      username: atlasProps.username,
      password: atlasProps.password,
      databaseName: atlasProps.dbName,
      description: atlasProps.description,
      roles: [ 
        {
          roleName: atlasProps.roleName,
          databaseName: atlasProps.dbName
        }
      ]
    });

  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const roleName = this.node.tryGetContext('roleName');
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const dbName = this.node.tryGetContext('dbName');
    const username = this.node.tryGetContext('username');
    const password = this.node.tryGetContext('password');
    const description = this.node.tryGetContext('userDescription');


    return {
      projId,
      profile,
      roleName,
      dbName,
      username,
      password,
      description
    }
  }
}
