import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnGlobalClusterConfig } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly clusterName: string;
  readonly dbName: string;
  readonly collection: string;
  readonly isCustomShardKeyHashed: string;
  readonly isShardKeyUnique: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const globalClusterConfig = new CfnGlobalClusterConfig(this, 'GlobalClusterConfig', {
      profile:  atlasProps.profile,
      projectId: atlasProps.projId,
      clusterName: atlasProps.clusterName,
      managedNamespaces: [
        {
            collection: atlasProps.collection,
            db: atlasProps.dbName,
            isCustomShardKeyHashed: atlasProps.isCustomShardKeyHashed,
            isShardKeyUnique: atlasProps.isShardKeyUnique,
        }
      ],
      customZoneMappings: [
        {
          location: 'US',
          zone: 'Zone 1'
        }
      ],
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const collection = this.node.tryGetContext('collection');
    const clusterName = this.node.tryGetContext('clusterName');
    const dbName = this.node.tryGetContext('dbName');
    const isCustomShardKeyHashed = this.node.tryGetContext('isCustomShardKeyHashed');
    const isShardKeyUnique = this.node.tryGetContext('isShardKeyUnique');
    return {
      projId,
      profile,
      clusterName,
      dbName,
      collection,
      isCustomShardKeyHashed,
      isShardKeyUnique
    }
  }
}
