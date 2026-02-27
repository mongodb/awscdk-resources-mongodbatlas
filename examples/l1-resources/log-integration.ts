// This example creates an S3 log integration for MongoDB Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnLogIntegration } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly bucketName: string;
  readonly iamRoleId: string;
  readonly prefixPath: string;
  readonly kmsKey?: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    new CfnLogIntegration(this, 'LogIntegration', {
      profile: atlasProps.profile,
      projectId: atlasProps.projId,
      type: 'S3',
      bucketName: atlasProps.bucketName,
      iamRoleId: atlasProps.iamRoleId,
      prefixPath: atlasProps.prefixPath,
      logTypes: ['MONGOD', 'MONGOS', 'MONGOD_AUDIT', 'MONGOS_AUDIT'],
      kmsKey: atlasProps.kmsKey,
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId) {
      throw "No context value specified for projId. Please specify via the cdk context.";
    }
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const bucketName = this.node.tryGetContext('bucketName');
    if (!bucketName) {
      throw "No context value specified for bucketName. Please specify via the cdk context.";
    }
    const iamRoleId = this.node.tryGetContext('iamRoleId');
    if (!iamRoleId) {
      throw "No context value specified for iamRoleId. Please specify via the cdk context.";
    }
    const prefixPath = this.node.tryGetContext('prefixPath') ?? 'mongodb-logs/';
    const kmsKey = this.node.tryGetContext('kmsKey');

    return {
      projId,
      profile,
      bucketName,
      iamRoleId,
      prefixPath,
      kmsKey,
    };
  }
}
