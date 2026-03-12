// This example grants temporary MongoDB employee access to a cluster for troubleshooting using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnMongoDbEmployeeAccessGrant } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly projectId: string;
  readonly clusterName: string;
  readonly grantType: string;
  readonly expirationTime: Date;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    new CfnMongoDbEmployeeAccessGrant(this, 'MongoDbEmployeeAccessGrant', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      clusterName: atlasProps.clusterName,
      grantType: atlasProps.grantType,
      expirationTime: atlasProps.expirationTime,
    });
  }

  getContextProps(): AtlasStackProps {
    const projectId = this.node.tryGetContext('projectId');
    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context.";
    }

    const clusterName = this.node.tryGetContext('clusterName');
    if (!clusterName) {
      throw "No context value specified for clusterName. Please specify via the cdk context.";
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const grantType = this.node.tryGetContext('grantType') ?? 'CLUSTER_DATABASE_LOGS';

    const expirationTimeRaw = this.node.tryGetContext('expirationTime');
    const expirationTime = expirationTimeRaw
      ? new Date(expirationTimeRaw)
      : new Date(Date.now() + 24 * 60 * 60 * 1000);

    return {
      profile,
      projectId,
      clusterName,
      grantType,
      expirationTime,
    };
  }
}
