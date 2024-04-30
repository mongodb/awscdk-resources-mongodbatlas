// This example creates a project in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnProject } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly orgId: string;
  readonly profile: string;
  readonly projName: string;
  readonly regionUsageRestrictions: string;
  readonly tags: Map<string, string>;
  readonly apiKey: string
  readonly teamId: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const projectRes = new CfnProject(this, 'ProjectResource', {
      name: atlasProps.projName,
      orgId: atlasProps.orgId,
      profile: atlasProps.profile,
      regionUsageRestrictions: atlasProps.regionUsageRestrictions,
      projectSettings: {
        isCollectDatabaseSpecificsStatisticsEnabled: false,
        isDataExplorerEnabled: false,
        isPerformanceAdvisorEnabled: false,
        isRealtimePerformancePanelEnabled: false,
        isSchemaAdvisorEnabled: true,
        isExtendedStorageSizesEnabled: true
    },
    projectApiKeys: [
        {
            key: atlasProps.apiKey,
            roleNames: ["GROUP_CLUSTER_MANAGER"]
        }
    ],
    projectTeams: [
        {
            teamId: atlasProps.teamId,
            roleNames: ["GROUP_OWNER"]
        }
    ],
    tags: atlasProps.tags,
  });

  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    const projName = this.node.tryGetContext('projName') ?? 'test-proj';
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const regionUsageRestrictions= this.node.tryGetContext('regionUsageRestrictions') ?? "NONE";
    const tags = this.node.tryGetContext('tags') ?? {Owner: 'AWS-CDK-EXAMPLE'};
    const apiKey = this.node.tryGetContext('apiKey');
    if (!apiKey){
      throw "No context value specified for apiKey. Please specify via the cdk context."
    }
    const teamId = this.node.tryGetContext('teamId');
    if (!teamId){
      throw "No context value specified for teamId. Please specify via the cdk context."
    }
    return {
      projName,
      orgId,
      profile,
      regionUsageRestrictions,
      tags,
      apiKey,
      teamId,
    }
  }
}
