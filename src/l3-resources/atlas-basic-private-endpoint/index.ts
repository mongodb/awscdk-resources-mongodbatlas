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

import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import {
  CfnPrivateEndpointAws,
  CfnPrivateEndpointService,
  CfnPrivateEndpointServicePropsCloudProvider,
} from "../../index";
import { AtlasBasic } from "../atlas-basic";
import { AtlasBasicProps } from "../common/props";

/** @type {*} */
const privateEndpointDefaults = {
  region: "us-east-1",
  vpcEndpointType: "Interface",
  cloudProvider: "AWS",
};

/**
 * @description
 * @export
 * @class AtlasBasicPrivateEndpoint
 * @extends {Construct}
 */
export class AtlasBasicPrivateEndpoint extends Construct {
  readonly atlasBasic: AtlasBasic;
  readonly privateEndpointService: CfnPrivateEndpointService;
  readonly awsPrivateEndpoint: ec2.CfnVPCEndpoint;
  readonly privateEndpointAws: CfnPrivateEndpointAws;

  /**
   * Creates an instance of AtlasBasicPrivateEndpoint.
   * @param {Construct} scope
   * @param {string} id
   * @param {AtlasBasicPrivateEndpointProps} props
   * @memberof AtlasBasicPrivateEndpoint
   */
  constructor(
    scope: Construct,
    id: string,
    props: AtlasBasicPrivateEndpointProps
  ) {
    super(scope, id);
    validate(props);
    // Validation for atlas basic would be delegated to the library
    this.atlasBasic = new AtlasBasic(this, "atlas-basic-".concat(id), {
      profile: props.profile,
      ...props.atlasBasicProps,
    });

    const region = props.region || privateEndpointDefaults.region;

    this.privateEndpointService = new CfnPrivateEndpointService(
      this,
      "atlas-private-endpoint-service-".concat(id),
      {
        profile: props.profile,
        projectId: this.atlasBasic.mProject.attrId,
        region: region.toUpperCase().replace(/-/g, "_"),
        cloudProvider: CfnPrivateEndpointServicePropsCloudProvider.AWS,
      }
    );

    this.awsPrivateEndpoint = new ec2.CfnVPCEndpoint(
      this,
      "aws-private-endpoint-service-".concat(id),
      {
        serviceName: this.privateEndpointService.attrEndpointServiceName,
        subnetIds: [props.privateEndpointProps.awsSubnetId],
        vpcEndpointType: privateEndpointDefaults.vpcEndpointType,
        vpcId: props.privateEndpointProps.awsVpcId,
      }
    );

    this.awsPrivateEndpoint.addDependency(this.privateEndpointService);

    this.privateEndpointAws = new CfnPrivateEndpointAws(
      this,
      "atlas-private-endpoint-".concat(id),
      {
        profile: props.profile,
        projectId: this.atlasBasic.mProject.attrId,
        endpointServiceId: this.privateEndpointService.attrId,
        id: this.awsPrivateEndpoint.ref,
      }
    );

    this.privateEndpointAws.addDependency(this.awsPrivateEndpoint);
  }
}

const validate = (props: AtlasBasicPrivateEndpointProps) => {
  if (!props.atlasBasicProps.projectProps.orgId) {
    throw Error("Validation error: orgId is not defined");
  }
};

/**
 * @description
 * @export
 * @interface AtlasBasicPrivateEndpointProps
 */
export interface AtlasBasicPrivateEndpointProps {
  readonly profile?: string;

  /**
   * @description AWS Region
   * @type {string}
   * @default us-east-1
   * @memberof AtlasPrivateEndpointProps
   */
  readonly region?: string;
  /**
   * @description
   * @type {AtlasBasicProps}
   * @memberof AtlasPrivateEndpointProps
   */
  readonly atlasBasicProps: AtlasBasicProps;
  /**
   * @description
   * @type {CfnPrivateEndpointProps}
   * @memberof AtlasPrivateEndpointProps
   */
  readonly privateEndpointProps: PrivateEndpointProps;
}

/**
 * @description
 * @export
 * @interface PrivateEndpointProps
 */
export interface PrivateEndpointProps {
  /**
   * @description AWS VPC ID (like: vpc-xxxxxxxxxxxxxxxx) (Used For Creating the AWS VPC Endpoint)
   * @type {string}
   * @memberof PrivateEndpointProps
   */
  readonly awsVpcId: string;
  /**
   * @description AWS VPC Subnet ID (like: subnet-xxxxxxxxxxxxxxxxx) (Used For Creating the AWS VPC Endpoint)
   * @type {string}
   * @memberof PrivateEndpointProps
   */
  readonly awsSubnetId: string;
}
