// This example creates a project in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnProject } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly orgId: string;
  readonly profile: string;
  readonly projName: string;
  readonly regionUsageRestrictions: string;
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
            key: "64f75b66e205b21647ae1e58",
            roleNames: ["GROUP_CLUSTER_MANAGER"]
        }
    ],
    projectTeams: [
        {
            teamId: "647a04045878135ce0e8bfff",
            roleNames: ["GROUP_OWNER"]
        }
    ]
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
    return {
      projName,
      orgId,
      profile,
      regionUsageRestrictions
    }
  }
}
