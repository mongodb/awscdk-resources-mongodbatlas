// This example creates a project in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnCloudBackUpRestoreJobs, CfnCloudBackUpRestoreJobsPropsDeliveryType } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly snapshotId: string;
  readonly clusterName: string;
  readonly targetClusterName: string;
  readonly targerProjId: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const cloudBackupRestoreJobs = new CfnCloudBackUpRestoreJobs(this, 'CloudBackupRestoreJobs', {    
      clusterName: atlasProps.clusterName,
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      snapshotId: atlasProps.snapshotId,
      deliveryType: CfnCloudBackUpRestoreJobsPropsDeliveryType.DOWNLOAD,
      targetClusterName: atlasProps.targetClusterName,
      targetProjectId: atlasProps.targerProjId,
  
    });

  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const snapshotId = this.node.tryGetContext('snapshotId');
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const clusterName = this.node.tryGetContext('clusterName');
    const targetClusterName = this.node.tryGetContext('targetClusterName');
    const targerProjId = this.node.tryGetContext('targerProjId');

    return {
      projId,
      profile,
      snapshotId,
      clusterName,
      targetClusterName,
      targerProjId
    }
  }
}
