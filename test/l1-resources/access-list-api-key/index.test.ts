import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import {
  CfnAccessListApiKey,
  CfnAccessListApiKeyProps,
} from "../../../src/l1-resources/access-list-api-key";

const RESOURCE_NAME = "MongoDB::Atlas::AccessListAPIKey";
const ORG_ID = "63350255419cf25e3d511c95";
const PROFILE = "default";

const propsQueryLimitProps: CfnAccessListApiKeyProps = {
  profile: PROFILE,
  orgId: ORG_ID,
  apiUserId: "64ef512fab473831c9e73b58",
  ipAddress: "203.0.113.11",
};

test("CfnAccessListApiKey construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnAccessListApiKey(stack, "testing-stack", propsQueryLimitProps);

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    OrgId: ORG_ID,
    APIUserId: "64ee342d64e8fb3e38181aab",
    IpAddress: "192.168.1.27",
  });
});
