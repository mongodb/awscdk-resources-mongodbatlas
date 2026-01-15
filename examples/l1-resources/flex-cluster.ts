// This example creates a project and a flex cluster in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnProject, CfnFlexCluster } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly orgId: string;
  readonly profile: string;
  readonly projName: string;
  readonly clusterName: string;
  readonly region: string;
  readonly backingProvider: string;
}

export class CdkFlexClusterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const projectRes = new CfnProject(this, 'ProjectResource', {
      name: atlasProps.projName,
      orgId: atlasProps.orgId,
      profile: atlasProps.profile
    });

    const flexClusterRes = new CfnFlexCluster(this, 'FlexClusterResource', {
      name: atlasProps.clusterName,
      projectId: projectRes.attrId,
      profile: atlasProps.profile,
      providerSettings: {
        backingProviderName: atlasProps.backingProvider,
        regionName: atlasProps.region,
      },
      tags: [
        {
          key: "env",
          value: "development",
        },
      ],
    });
  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId) {
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    const projName = this.node.tryGetContext('projName') ?? 'test-flex-proj';
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const clusterName = this.node.tryGetContext('clusterName') ?? 'test-flex-cluster';
    const region = this.node.tryGetContext('region') ?? "US_EAST_1";
    const backingProvider = this.node.tryGetContext('backingProvider') ?? "AWS";

    return {
      projName,
      orgId,
      profile,
      clusterName,
      region,
      backingProvider,
    }
  }
}
