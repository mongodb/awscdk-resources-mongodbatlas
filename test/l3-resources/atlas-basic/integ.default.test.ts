import { App, Stack, aws_ec2 as ec2 } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as atlas from "../../../src";

const app = new App();

const stack = new Stack(app, "atlas-basic-default", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

test("should match snapshots", () => {
  const cluster = new atlas.AtlasBasic(stack, "atlas-basic-cluster", {
    orgId: "mock",
    accessList: [{ ipAddress: "0.0.0.0/0", comment: "public to all" }],
    profile: "my-mongo-profile",
  });

  const vpc = new ec2.Vpc(stack, "Vpc", { natGateways: 1 });

  cluster.addPrivateEndpoint({
    vpc,
    vpcSubnets: [
      { subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS, onePerAz: true },
    ],
  });

  const t = Template.fromStack(stack);
  expect(t).toMatchSnapshot();
});
