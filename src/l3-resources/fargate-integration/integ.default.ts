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

import * as cdk from "aws-cdk-lib";
import { FargateIntegration } from "./index";
const app = new cdk.App();
const stack = new cdk.Stack(app, "atlas-basic-default", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

// NOTE: once this is deployed, you can verify the client app using load balancer DNS name as below
// loadbalancer-DNS-Name:8080
// eg: http://ecs-me-farga-u1rjkkhffmnh-b33e2de1a3ae6a57.elb.us-east-1.amazonaws.com:8080/employees
new FargateIntegration(stack, "fargate-integration-test", {
  Subnet1CIDR: "11.0.128.0/20",
  Subnet2CIDR: "11.0.144.0/20",
  ClientContainerImageURI: "<ecr_image_for_clientApp>",
  ServerContainerImageURI: "<ecr_image_for_serverApp>",
  WebAccessCIDR: "11.0.0.0/16",
  VpcCidr: "11.0.0.0/16",
  MongoDBEndpoint: "mongodb+srv://<username>:<password>@<clusteraddress>",
});
