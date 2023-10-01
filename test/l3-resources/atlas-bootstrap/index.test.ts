// Copyright 2023 MongoDB Inc
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { App, Stack, CfnParameter } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as l3 from "../../../src";

const mongoDBProfile = "development";
const roleName = "MongoDB-Atlas-CDK-Excecution";
const RESOURCE_NAME_ROLE = "AWS::IAM::Role";
const RESOURCE_NAME_POLICY = "AWS::IAM::Policy";
const RESOURCE_NAME_TYPE_ACT = "AWS::CloudFormation::TypeActivation";
const RESOURCE_NAME_SECRET = "AWS::SecretsManager::Secret";

test("AtlasBasis construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  const publicKey = new CfnParameter(stack, "atlasPublicKey", {
    noEcho: true,
    type: "String",
  });
  const privateKey = new CfnParameter(stack, "atlasPrivateKey", {
    noEcho: true,
    type: "String",
  });

  new l3.MongoAtlasBootstrap(stack, "testing-stack", {
    roleName: roleName,
    secretProfile: mongoDBProfile,
    typesToActivate: ["Project"],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME_ROLE, {
    RoleName: roleName,
  });

  template.hasResourceProperties(RESOURCE_NAME_POLICY, {
    PolicyDocument: {
      Statement: [
        {
          Action: [
            "secretsmanager:CreateSecret",
            "secretsmanager:CreateSecretInput",
            "secretsmanager:DescribeSecret",
            "secretsmanager:GetSecretValue",
            "secretsmanager:PutSecretValue",
            "secretsmanager:UpdateSecretVersionStage",
            "ec2:CreateVpcEndpoint",
            "ec2:DeleteVpcEndpoints",
            "cloudformation:CreateResource",
            "cloudformation:DeleteResource",
            "cloudformation:GetResource",
            "cloudformation:GetResourceRequestStatus",
            "cloudformation:ListResources",
            "cloudformation:UpdateResource",
            "iam:AttachRolePolicy",
            "iam:CreateRole",
            "iam:DeleteRole",
            "iam:GetRole",
            "iam:GetRolePolicy",
            "iam:ListAttachedRolePolicies",
            "iam:ListRolePolicies",
            "iam:PutRolePolicy",
          ],
          Effect: "Allow",
          Resource: "*",
        },
      ],
      Version: "2012-10-17",
    },
  });

  template.hasResourceProperties(RESOURCE_NAME_TYPE_ACT, {
    TypeName: "MongoDB::Atlas::Project",
  });

  template.hasResourceProperties(RESOURCE_NAME_SECRET, {
    Name: `cfn/atlas/profile/${mongoDBProfile}`,
  });
});
