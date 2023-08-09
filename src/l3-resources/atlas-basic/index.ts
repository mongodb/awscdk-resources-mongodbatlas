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

import { CfnOutput, Aws } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as atlas from "../../index";
import { PrivateEndpoint } from "../../l2-resources/private-endpoint";
import { AtlasBasicProps } from "../common/props";

/**
 * L3 construct to create a dedicated cluster.
 */
export class AtlasBasic extends Construct {
  readonly project: atlas.IProject;
  readonly projectIpAccessList: atlas.IProjectIpAccessList;
  readonly databaseUser: atlas.IDatabaseUser;
  readonly cluster: atlas.Cluster;
  private readonly props: AtlasBasicProps;
  private readonly id: string;
  private vpcPeering: boolean = false;
  private privateEndpoint: boolean = false;

  constructor(scope: Construct, id: string, props: AtlasBasicProps) {
    super(scope, id);

    this.props = props;
    this.id = id;
    this.project = props.project ?? this.addProject();
    this.projectIpAccessList = this.addIpAccessList();
    this.databaseUser = this.addDatabaseUser(props.databaseUserOptions);

    this.cluster = new atlas.Cluster(this, `cluster${this.id}`, {
      ...props.clusterOptions,
      profile: this.props.profile,
      project: this.project,
    });
  }
  private addProject(): atlas.IProject {
    return new atlas.Project(this, `project${this.id}`, {
      orgId: this.props.orgId,
      profile: this.props.profile,
    });
  }
  private addIpAccessList(): atlas.ProjectIpAccessList {
    return new atlas.ProjectIpAccessList(this, `accessList${this.id}`, {
      profile: this.props.profile,
      project: this.project,
      accessList: this.props.accessList,
    });
  }
  private addDatabaseUser(
    options?: atlas.DatabaseUserCommonOptions
  ): atlas.DatabaseUser {
    return new atlas.DatabaseUser(this, `user${this.id}`, {
      profile: this.props.profile,
      project: this.project,
      databaseName: options?.databaseName,
      username: options?.username,
      password: options?.password,
      roles: options?.roles,
    });
  }
  /**
   * Add a VPC peering for this cluster.
   */
  public addVpcPeering(options: atlas.VpcPeeringOptions) {
    if (this.privateEndpoint) {
      throw new Error("Cannot create both VPC peering and private endpoint");
    }
    this.vpcPeering = true;
    // create network container
    const container = new atlas.CfnNetworkContainer(
      this,
      `networkcontainer${this.id}`,
      {
        projectId: this.project.projectId,
        regionName: options.acceptRegionName ?? atlas.AtlasRegion.US_EAST_1,
        profile: this.props.profile,
        vpcId: options.vpc.vpcId,
        atlasCidrBlock: options.cidr,
        provisioned: true,
      }
    );
    // create the peering
    const peering = new atlas.CfnNetworkPeering(this, `peering${this.id}`, {
      containerId: container.attrId,
      projectId: this.project.projectId,
      vpcId: options.vpc.vpcId,
      profile: this.props.profile,
      routeTableCidrBlock: options.vpc.vpcCidrBlock,
      accepterRegionName: options.acceptRegionName ?? Aws.REGION,
      awsAccountId: options.accountId ?? Aws.ACCOUNT_ID,
    });
    new CfnOutput(this, "VpcPeeringConnectionId", {
      value: peering.attrConnectionId,
    });
    this.cluster.node.addDependency(container);
    peering.addDependency(container);
  }
  /**
   * Add a private endpoint for this cluster.
   */
  public addPrivateEndpoint(options: atlas.PrivateEndpointVpcOptions) {
    if (this.vpcPeering) {
      throw new Error("Cannot create both VPC peering and private endpoint");
    }
    this.privateEndpoint = true;
    return new PrivateEndpoint(this, `private-endpoint-${this.id}`, {
      profile: this.props.profile,
      project: this.project,
      region: this.props.region ?? atlas.AtlasRegion.US_EAST_1,
      vpc: options.vpc,
      vpcSubnets: options.vpcSubnets,
    });
  }
}
