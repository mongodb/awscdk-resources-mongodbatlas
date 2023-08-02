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
import { MongoAtlasBootstrap, MongoAtlasBootstrapProps } from "./index";

const app = new cdk.App();

const stack = new cdk.Stack(app, "atlas-cdk-bootstrap", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const mongoDBProfile = "development";
const roleName = "MongoDB-Atlas-CDK-Excecution";
const typesToActivate = ["Project"];

const bootstrapProperties: MongoAtlasBootstrapProps = {
  roleName: roleName,
  secretProfile: mongoDBProfile,
  typesToActivate: typesToActivate,
  mongoDBAtlasPublicKey: "THISISAPUBLICKEY",
  mongoDBAtlasPrivateKey: "THISISAPRIVATEKEY",
};

new MongoAtlasBootstrap(stack, "cdk-bootstrap", bootstrapProperties);
