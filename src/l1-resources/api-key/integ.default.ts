import * as cdk from "aws-cdk-lib";
import {
  CfnApiKey,
  CfnApiKeyProps,
  ProjectAssignment,
  ListOptions,
} from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "api-key", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const orgId = "63350255419cf25e3d511c95";
const proAssignments: ProjectAssignment[] = [
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

const Roles = ["ORG_MEMBER", "ORG_GROUP_CREATOR"];
const apikeyProps: CfnApiKeyProps = {
  orgId: orgId,
  description: "for cfn test api-key resource testing.",
  profile: "default",
  roles: Roles,
  awsSecretName: "mongodb/atlas/apikey/cfn-bot-apikey-test",
  projectAssignments: proAssignments,
  listOptions: listOptions,
};

new CfnApiKey(stack, "api-key", apikeyProps);
