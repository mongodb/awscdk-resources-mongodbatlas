import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import {
  CfnCloudOutageSimulation,
  FilterCloudProvider,
} from "../../../src/l1-resources/cloud-outage-simulation";

const RESOURCE_NAME = "MongoDB::Atlas::CloudOutageSimulation";
const CLUSTER_NAME = "testcloudoutstagesimulation";
const PROJECT_ID = "64f0bd2b25d67547f35ab3c7";
const PROFILE = "default";

test("CfnCloudOutageSimulation construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnCloudOutageSimulation(stack, "testing-cloud-outage-simulation-stack", {
    projectId: CLUSTER_NAME,
    clusterName: PROJECT_ID,
    profile: PROFILE,
    outageFilters: [
      {
        cloudProvider: FilterCloudProvider.AWS,
        region: "US_WEST_1",
        type: "REGION",
      },
    ],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: CLUSTER_NAME,
    ClusterName: PROJECT_ID,
    Profile: PROFILE,
    OutageFilters: [
      {
        CloudProvider: FilterCloudProvider.AWS,
        Region: "US_WEST_1",
        Type: "REGION",
      },
    ],
  });
});
