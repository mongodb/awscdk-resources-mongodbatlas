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
import { Construct } from 'constructs';
import {
  MongoAtlasBootstrap,
  MongoAtlasBootstrapProps,
  AtlasBasicResources,
} from "awscdk-resources-mongodbatlas";

export class AtlasBoostrapExample extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
    const mongoDBProfile = "development";
    const roleName = "MongoDB-Atlas-CDK-Excecution";

    const publicKey = new cdk.CfnParameter(this, "atlasPublicKey", {
    noEcho: true,
    type: "String",
    });
    const privateKey = new cdk.CfnParameter(this, "atlasPrivateKey", {
    noEcho: true,
    type: "String",
    });

    const bootstrapProperties: MongoAtlasBootstrapProps = {
        roleName: roleName,
        secretProfile: mongoDBProfile,
        typesToActivate: AtlasBasicResources
    };

    new MongoAtlasBootstrap(this, "cdk-bootstrap", bootstrapProperties);
    }
  }