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
import { CfnAccessListApiKey} from 'awscdk-resources-mongodbatlas';



const app = new cdk.App();

interface AtlasStackProps {
  readonly orgId: string;
  readonly profile: string;
  readonly apiUserId: string;
  readonly ipAddress: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const accessLstApiKey = new CfnAccessListApiKey(this, 'accesslistApiKey', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      apiUserId: atlasProps.apiUserId,
      ipAddress : atlasProps.ipAddress
    });
  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const apiUserId = this.node.tryGetContext('apiUserId');
    const ipAddress = this.node.tryGetContext('ipAddress');
    return {
      orgId,
      profile,
      apiUserId,
      ipAddress
    }
  }
}