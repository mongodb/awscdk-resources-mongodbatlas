import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnCloudBackupSchedule } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly retentionValue: string;
  readonly clusterName: string;
  readonly retentionUnit: string;
  readonly frequencyInterval: string;
  readonly frequencyType: string;
  readonly policyId: string;
  readonly replicationSpecId: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const cloudBackupSchedule = new CfnCloudBackupSchedule(this, 'CloudBackupSchedule', {
      profile: atlasProps.profile,
      clusterName: atlasProps.clusterName,
      projectId: atlasProps.projId,
      autoExportEnabled: false,
      copySettings: [
        {
          cloudProvider: 'AWS',
          regionName: 'US_EAST_1',
          shouldCopyOplogs: true,
          frequencies: ["HOURLY"],
          replicationSpecId: atlasProps.replicationSpecId,
        }
      ],
      policies: [
        {
          id: atlasProps.policyId,
          policyItems: [
            {
              frequencyInterval: atlasProps.frequencyInterval,
              retentionUnit: atlasProps.retentionUnit,
              retentionValue: atlasProps.retentionValue,
              frequencyType: atlasProps.frequencyType,
            }
          ]
        }
      ]
    });

  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const retentionValue = this.node.tryGetContext('retentionValue');
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const clusterName = this.node.tryGetContext('clusterName');
    const retentionUnit = this.node.tryGetContext('retentionUnit');
    const frequencyInterval = this.node.tryGetContext('frequencyInterval');
    const frequencyType = this.node.tryGetContext('frequencyType');
    const policyId = this.node.tryGetContext('policyId');
    const replicationSpecId = this.node.tryGetContext('replicationSpecId');


    return {
      projId,
      profile,
      retentionValue,
      clusterName,
      retentionUnit,
      frequencyInterval,
      frequencyType,
      policyId,
      replicationSpecId
    }
  }
}
