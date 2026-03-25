import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnStreamWorkspace, StreamWorkspaceDataProcessRegionCloudProvider } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly workspaceName: string;
  readonly region: string;
  readonly tier: string;
}

export class CdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    new CfnStreamWorkspace(this, "stream-workspace-testing-stack", {
      profile: atlasProps.profile,
      workspaceName: atlasProps.workspaceName,
      projectId: atlasProps.projectId,
      dataProcessRegion: {
        cloudProvider: StreamWorkspaceDataProcessRegionCloudProvider.AWS,
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
    const workspaceName = this.node.tryGetContext('workspaceName');
    const region = this.node.tryGetContext('region');
    const tier = this.node.tryGetContext('tier');

    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context."
    }
    if (!workspaceName) {
      throw "No context value specified for workspaceName. Please specify via the cdk context."
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
      workspaceName,
      region,
      tier,
    }
  }
}
