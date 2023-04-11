// This example creates a project in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnSearchIndex } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly clusterName: string;
  readonly collectionName: string;
  readonly dbName: string;
  readonly indexName: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const mySearchIndex = new CfnSearchIndex(this, 'MySearchIndex', {
        analyzer: 'lucene.standard',
        clusterName: atlasProps.clusterName,
        collectionName: atlasProps.collectionName,
        database: atlasProps.dbName,
        mappings: {
          fields: [
            "summary:string", 
            "description:string",
            "minimum_nights:number"],
          dynamic: false,
        },
        name: atlasProps.indexName,
        profile: atlasProps.profile,
        projectId: atlasProps.projId,
        searchAnalyzer: 'lucene.standard'
      });

  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const clusterName = this.node.tryGetContext('clusterName') ?? 'Cluster0';
    const collectionName = this.node.tryGetContext('collectionName') ?? 'listingsAndReviews';
    const dbName = this.node.tryGetContext('dbName') ?? 'sample_airbnb';
    const indexName = this.node.tryGetContext('indexName') ?? 'searchIndex';

    return {
      projId,
      profile,
      clusterName,
      collectionName,
      dbName,
      indexName
    }
  }
}
