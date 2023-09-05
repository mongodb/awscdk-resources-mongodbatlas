// This example creates a project and a cluster in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnDataLakePipeline} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly name: string;
  readonly clusterName: string;
  readonly collectionName: string;
  readonly dbName: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const sink = {"partitionFields" :[{
        "fieldName": "testpartition2",
        "order": 0
      }]};

    const source = {
        "clusterName": atlasProps.clusterName,
        "collectionName": atlasProps.collectionName,
        "databaseName": atlasProps.dbName
      };
    const transform  = [
        {
          "field" :"testtransformFeild",
          "type": "EXCLUDE"
        }
      ];

    const datalakePipeline = new CfnDataLakePipeline(this, 'datalakePipeline', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      name: atlasProps.name,
      sink:sink,
      source: source,
      transformations: transform
    });

  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const name = this.node.tryGetContext('name');
    const clusterName = this.node.tryGetContext('clusterName');
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const dbName = this.node.tryGetContext('dbName');
    const collectionName = this.node.tryGetContext('collectionName');


    return {
      projId,
      profile,
      name,
      dbName,
      collectionName,
      clusterName
    }
  }
}
