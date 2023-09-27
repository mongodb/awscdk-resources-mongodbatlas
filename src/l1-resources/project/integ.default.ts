import * as cdk from "aws-cdk-lib";
import { CfnProject, CfnProjectProps } from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "CDK-Project-region-usage-restriction", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const projectProps: CfnProjectProps = {
  name: "ATLAS_ORG_ID",
  orgId: "63350255419cf25e3d511c95",
  profile: "default",
  regionUsageRestrictions: "NONE",
  projectSettings: {
    isCollectDatabaseSpecificsStatisticsEnabled: false,
    isDataExplorerEnabled: false,
    isPerformanceAdvisorEnabled: false,
    isRealtimePerformancePanelEnabled: false,
    isSchemaAdvisorEnabled: true,
    isExtendedStorageSizesEnabled: true,
  },
  projectApiKeys: [
    {
      key: "64f75b66e205b21647ae1e58",
      roleNames: ["GROUP_CLUSTER_MANAGER"],
    },
  ],
  projectTeams: [
    {
      teamId: "647a04045878135ce0e8bfff",
      roleNames: ["GROUP_OWNER"],
    },
  ],
};

new CfnProject(stack, "project-region-usage-restriction", projectProps);
