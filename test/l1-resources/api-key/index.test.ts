import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";

import {
  CfnApiKey,
  CfnApiKeyProps,
  ProjectAssignment,
  ListOptions,
} from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::APIKey";
const ORG_ID = "63350255419cf25e3d511c95";
const PROFILE = "default";
const Roles = ["ORG_MEMBER", "ORG_GROUP_CREATOR"];
const projectAssignments: ProjectAssignment[] = [
  {
    projectId: "64ee3fcfaa95ad6b7e358d56",
    roles: ["GROUP_READ_ONLY"],
  },
  {
    projectId: "64ee3fd58bb58153335e8469",
    roles: ["GROUP_SEARCH_INDEX_EDITOR", "GROUP_OWNER", "GROUP_READ_ONLY"],
  },
];

const listOptions: ListOptions = {
  pageNum: 1,
  itemsPerPage: 300,
};

const propsQueryLimitProps: CfnApiKeyProps = {
  orgId: ORG_ID,
  description: "for cfn test api-key resource testing.",
  profile: PROFILE,
  roles: Roles,
  awsSecretName: "mongodb/atlas/apikey/cfn-bot-apikey-test",
  projectAssignments: projectAssignments,
  listOptions: listOptions,
};

test("CfnApiKey construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnApiKey(stack, "testing-stack", propsQueryLimitProps);

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    OrgId: ORG_ID,
    Description: "for cfn test api-key resource testing.",
    Profile: PROFILE,
    Roles: Roles,
    AwsSecretName: "mongodb/atlas/apikey/cfn-bot-apikey-test",
    ProjectAssignments: [
      {
        ProjectId: "64ee3fcfaa95ad6b7e358d56",
        Roles: ["GROUP_READ_ONLY"],
      },
      {
        ProjectId: "64ee3fd58bb58153335e8469",
        Roles: ["GROUP_SEARCH_INDEX_EDITOR", "GROUP_OWNER", "GROUP_READ_ONLY"],
      },
    ],
    ListOptions: {
      ItemsPerPage: 300,
      PageNum: 1,
    },
  });
});
