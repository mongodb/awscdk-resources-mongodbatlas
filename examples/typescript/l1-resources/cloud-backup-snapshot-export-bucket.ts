import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnCloudBackupSnapshotExportBucket } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly bucketName: string;
  readonly iamRoleId: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const cloudBackupSnapshotExportBucket = new CfnCloudBackupSnapshotExportBucket(this, 'CloudBackupSnapshotExportBucket', {
      profile: atlasProps.profile,
      projectId: atlasProps.projId,
      bucketName: atlasProps.bucketName,
      iamRoleId: atlasProps.iamRoleId,
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const bucketName = this.node.tryGetContext('bucketName');
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const iamRoleId = this.node.tryGetContext('iamRoleId');
    const retentionInDays = this.node.tryGetContext('retentionInDays');


    return {
      projId,
      profile,
      bucketName,
      iamRoleId,
    }
  }
}
