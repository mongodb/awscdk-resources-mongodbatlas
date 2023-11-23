import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnSearchIndex } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly clusterName: string;
  readonly collectionName: string;
  readonly dbName: string;
  readonly indexNameSearch: string;
  readonly indexNameVector: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const atlasProps = this.getContextProps();

    const mySearchIndex = new CfnSearchIndex(this, 'MySearchIndex', {
      profile: atlasProps.profile,
      projectId: atlasProps.projId,
      clusterName: atlasProps.clusterName,
      name: atlasProps.indexNameSearch,
      collectionName: atlasProps.collectionName,
      database: atlasProps.dbName,
      searchAnalyzer: 'lucene.standard',
      analyzer: 'lucene.standard',
      mappings: {
        fields: JSON.stringify({
          employees: {
            type: "string",
            analyzer: "lucene.whitespace",
          }
        }),
        dynamic: false,
      },
    });

    const myVectorSearchIndex = new CfnSearchIndex(this, 'MyVectorSearchIndex', {
      profile: atlasProps.profile,
      projectId: atlasProps.projId,
      clusterName: atlasProps.clusterName,
      name: atlasProps.indexNameVector,
      collectionName: atlasProps.collectionName,
      database: atlasProps.dbName,
      type: 'vectorSearch',
      fields: JSON.stringify([
        {
          type: "vector",
          path: "plot_embedding",
          numDimensions: 1536,
          similarity: "euclidean"
        }
      ]),
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId) {
      throw "No context value specified for orgId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const clusterName = this.node.tryGetContext('clusterName') ?? 'Cluster0';
    const collectionName = this.node.tryGetContext('collectionName') ?? 'listingsAndReviews';
    const dbName = this.node.tryGetContext('dbName') ?? 'sample_airbnb';
    const indexNameSearch = this.node.tryGetContext('indexName') ?? 'searchIndex';
    const indexNameVector = this.node.tryGetContext('indexNameVector') ?? 'searchIndexVector';

    return {
      projId,
      profile,
      clusterName,
      collectionName,
      dbName,
      indexNameSearch,
      indexNameVector,
    }
  }
}
