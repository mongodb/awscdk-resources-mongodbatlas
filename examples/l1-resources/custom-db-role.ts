// This example creates a project and a cluster in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnCustomDbRole } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly roleName: string;
  readonly dbName: string;
  readonly collectionName: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const customDbRole = new CfnCustomDbRole(this, 'CustomDbRole', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      actions:[
        {
          action: "FIND",
          resources: [
            {
              collection: atlasProps.collectionName,
              db: atlasProps.dbName,
            },
          ]
        }
      ],
      roleName: atlasProps.roleName,
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
    const collectionName = this.node.tryGetContext('collectionName');


    return {
      projId,
      profile,
      roleName,
      dbName,
      collectionName
    }
  }
}
