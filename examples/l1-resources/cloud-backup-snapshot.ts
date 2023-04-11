import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnCloudBackupSnapshot } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly retentionInDays: string;
  readonly clusterName: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const cloudBackupSnapshot = new CfnCloudBackupSnapshot(this, 'CloudBackupSnapshot', {
        clusterName: atlasProps.clusterName,
        profile: atlasProps.profile,
        projectId: atlasProps.projId,
        description: 'Snapshot created with CDK',
        retentionInDays: atlasProps.retentionInDays,
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
    const retentionInDays = this.node.tryGetContext('retentionInDays');


    return {
      projId,
      profile,
      retentionInDays,
      clusterName,
    }
  }
}
