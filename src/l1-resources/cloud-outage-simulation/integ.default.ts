import * as cdk from "aws-cdk-lib";
import {
  CfnCloudOutageSimulation,
  CfnCloudOutageSimulationProps,
  FilterCloudProvider,
} from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "cloud-outstage-simulation", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const cloudOutstageProps: CfnCloudOutageSimulationProps = {
  profile: "default",
  outageFilters: [
    {
      cloudProvider: FilterCloudProvider.AWS,
      region: "US_WEST_1",
      type: "REGION",
    },
  ],
  projectId: "",
  clusterName: "testcloudoutstagesimulation",
};

new CfnCloudOutageSimulation(
  stack,
  "cloud-outstage-simulation",
  cloudOutstageProps
);
