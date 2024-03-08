import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnStreamInstance, StreamsDataProcessRegionCloudProvider } from 'awscdk-resources-mongodbatlas'
import { env } from 'node:process';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly instanceName: string;
  readonly region: string;
  readonly tier: string;
}

const app = new cdk.App();


export class CdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const streamInstance = new CfnStreamInstance(this, "stream-instance-testing-stack", {
      profile: atlasProps.profile,
      instanceName: atlasProps.instanceName,
      projectId: atlasProps.projectId,
      dataProcessRegion: {
        cloudProvider: StreamsDataProcessRegionCloudProvider.AWS,
        region: atlasProps.region,
      },
      streamConfig: {
        tier: atlasProps.tier,
      },
    });
  }

  getContextProps(): AtlasStackProps {
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const projectId = this.node.tryGetContext('projectId');
    const instanceName = this.node.tryGetContext('instanceName');
    const region = this.node.tryGetContext('region');
    const tier = this.node.tryGetContext('tier');
    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context."
    }
    if (!instanceName) {
      throw "No context value specified for instanceName. Please specify via the cdk context."
    }
    if (!region) {
      throw "No context value specified for region. Please specify via the cdk context."
    }
    if (!tier) {
      throw "No context value specified for tier. Please specify via the cdk context."
    }

    return {
      projectId,
      profile,
      instanceName,
      region,
      tier
    }
  }

}
