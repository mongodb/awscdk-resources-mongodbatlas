// This example creates a database user in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnOnlineArchive, CriteriaViewType } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly collName: string;
  readonly dbName: string;
  readonly clusterName: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const myOnlineArchive = new CfnOnlineArchive(this, 'MyOnlineArchive', {
      profile: atlasProps.profile,
      projectId: atlasProps.projId,
      collName: atlasProps.collName,
      dbName: atlasProps.dbName,
      clusterName: atlasProps.clusterName,
      criteria: {
        type: CriteriaViewType.DATE,
        dateFormat: 'ISODATE',
        dateField: "created",
        expireAfterDays: 30
      }
    });


  }



  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId) {
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const collName = this.node.tryGetContext('collName');
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const dbName = this.node.tryGetContext('dbName');
    const clusterName = this.node.tryGetContext('clusterName');


    return {
      projId,
      profile,
      collName,
      dbName,
      clusterName
    }
  }
}
