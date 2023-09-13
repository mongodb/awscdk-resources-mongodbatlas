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

import { Construct } from "constructs";
import {
  CfnServerlessPrivateEndpoint,
  ServerlessPrivateEndpoint,
} from "../../index";
import { AwsPrivateEndpointConfig } from "../../l1-resources/serverless-private-endpoint";
import { AtlasServerlessBasic } from "../atlas-serverless-basic";
import { AtlasServerlessBasicProps } from "../common/props";

/** @type {*} */
const serverlessPrivateEndpointDefaults = {
  region: "us-east-1",
};

/**
 * @description
 * @export
 * @class AtlasBasicPrivateEndpoint
 * @extends {Construct}
 */
export class AtlasBasicServerlessPrivateEndpoint extends Construct {
  readonly atlasServerlessBasic: AtlasServerlessBasic;
  readonly serverlessPrivateEndpoint: CfnServerlessPrivateEndpoint;

  /**
   * Creates an instance of AtlasBasicServerlessPrivateEndpoint.
   * @param {Construct} scope
   * @param {string} id
   * @param {AtlasServerlessBasicPrivateEndpointProps} props
   * @memberof AtlasBasicServerlessPrivateEndpoint
   */
  constructor(
    scope: Construct,
    id: string,
    props: AtlasServerlessBasicPrivateEndpointProps
  ) {
    super(scope, id);
    validate(props);
    // Validation for atlas basic would be delegated to the library
    this.atlasServerlessBasic = new AtlasServerlessBasic(
      this,
      "atlas-basic-serverless-".concat(id),
      {
        profile: props.profile,
        ...props.atlasServerlessBasicProps,
      }
    );
    this.serverlessPrivateEndpoint = new CfnServerlessPrivateEndpoint(
      this,
      "serverless-private-endpoint-".concat(id),
      {
        profile: props.profile,
        instanceName: props.instanceName,
        projectId: this.atlasServerlessBasic.mProject.attrId,
        ...props.serverlessPrivateEndpointProps,
      }
    );
    this.serverlessPrivateEndpoint.addDependency(
      this.atlasServerlessBasic.mserverless
    );
  }
}

const validate = (props: AtlasServerlessBasicPrivateEndpointProps) => {
  if (!props.atlasServerlessBasicProps.projectProps.orgId) {
    throw Error("Validation error: orgId is not defined");
  }
};

/**
 * @description
 * @export
 * @interface AtlasServerlessBasicPrivateEndpointProps
 */
export interface AtlasServerlessBasicPrivateEndpointProps {
  readonly profile?: string;
  readonly instanceName: string;
  /**
   * @description AWS Region
   * @type {string}
   * @default us-east-1
   * @memberof AtlasServerlessPrivateEndpointProps
   */
  readonly region?: string;
  /**
   * @description
   * @type {AtlasBasicProps}
   * @memberof AtlasServerlessPrivateEndpointProps
   */
  readonly atlasServerlessBasicProps: AtlasServerlessBasicProps;
  /**
   * @description
   * @type {CfnServerlessPrivateEndpointProps}
   * @memberof AtlasServerlessPrivateEndpointProps
   */
  readonly serverlessPrivateEndpointProps: ServerlessPrivateEndpointProps;
}

/**
 * @schema PrivateEndpoint
 */
export interface ServerlessPrivateEndpointProps {
  /**
   * string to represent the comment
   * @schema PrivateEndpoint#comment
   */
  readonly comment?: string;

  /**
   * If true the resource will create the aws private endpoint and assign the Endpoint ID
   *
   * @schema CfnServerlessPrivateEndpointProps#CreateAndAssignAWSPrivateEndpoint
   */
  readonly createAndAssignAwsPrivateEndpoint?: boolean;

  /**
   * Properties used to configure Aws private endpoint
   *
   * @schema CfnServerlessPrivateEndpointProps#AwsPrivateEndpointConfigurationProperties
   */
  readonly awsPrivateEndpointConfigurationProperties?: AwsPrivateEndpointConfig;
}
