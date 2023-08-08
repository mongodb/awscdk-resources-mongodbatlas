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

import * as path from "path";
import {
  Stack,
  CfnOutput,
  CustomResource,
  Aws,
  aws_iam as iam,
  aws_ec2 as ec2,
  aws_lambda as lambda,
  custom_resources as cr,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import * as atlas from "../../index";
import { AtlasBasicProps } from "../common/props";

/**
 * L3 construct to created a dedicated cluster.
 */
export class AtlasBasic extends Construct {
  readonly project: atlas.IProject;
  readonly projectIpAccessList: atlas.IProjectIpAccessList;
  readonly databaseUser: atlas.IDatabaseUser;
  readonly cluster: atlas.Cluster;
  private readonly props: AtlasBasicProps;
  private readonly id: string;
  private readonly vpc?: ec2.IVpc;

  constructor(scope: Construct, id: string, props: AtlasBasicProps) {
    super(scope, id);

    this.props = props;
    this.id = id;
    this.project = props.project ?? this.createProject();
    this.projectIpAccessList = this.createIpAccessList();
    this.databaseUser = this.createDatabaseUser();
    this.vpc = props.peering?.vpc;

    this.cluster = new atlas.Cluster(this, `cluster${this.id}`, {
      profile: this.props.profile,
      project: this.project,
    });

    if (props.peering) {
      this.createVpcPeering();
    }
  }
  private createProject(): atlas.IProject {
    return new atlas.Project(this, `project${this.id}`, {
      orgId: this.props.orgId,
      profile: this.props.profile,
    });
  }
  private createIpAccessList(): atlas.ProjectIpAccessList {
    return new atlas.ProjectIpAccessList(this, `accessList${this.id}`, {
      profile: this.props.profile,
      project: this.project,
      accessList: this.props.accessList,
    });
  }
  private createDatabaseUser(): atlas.DatabaseUser {
    return new atlas.DatabaseUser(this, `user${this.id}`, {
      profile: this.props.profile,
      project: this.project,
    });
  }
  /**
   * Create a VPC peering for this cluster.
   */
  public createVpcPeering() {
    // create network container
    const container = new atlas.CfnNetworkContainer(
      this,
      `networkcontainer${this.id}`,
      {
        projectId: this.project.projectId,
        regionName: this.props.peering!.acceptRegionName ?? "US_EAST_1",
        profile: this.props.profile,
        vpcId: this.vpc?.vpcId,
        atlasCidrBlock: this.props.peering!.cidr,
        provisioned: true,
      }
    );
    // create the peering
    const peering = new atlas.CfnNetworkPeering(this, `peering${this.id}`, {
      containerId: container.attrId,
      projectId: this.project.projectId,
      vpcId: this.props.peering!.vpc.vpcId,
      profile: this.props.profile,
      routeTableCidrBlock: this.vpc?.vpcCidrBlock,
      accepterRegionName: this.props.peering!.acceptRegionName ?? Aws.REGION,
      awsAccountId: this.props.peering!.accountId ?? Aws.ACCOUNT_ID,
    });
    new CfnOutput(this, "VpcPeeringConnectionId", {
      value: peering.attrConnectionId,
    });
    this.cluster.node.addDependency(container);

    // create the custom resource to accept the peering request
    const provider = new cr.Provider(this, "VpcPeeringProvider", {
      onEventHandler: new lambda.Function(this, "VpcPeeringHandler", {
        runtime: lambda.Runtime.PYTHON_3_9,
        code: lambda.Code.fromAsset(path.join(__dirname, "../lambda")),
        handler: "vpc-peering-handler.on_event",
      }),
    });
    provider.onEventHandler.addToRolePolicy(
      new iam.PolicyStatement({
        actions: [
          "ec2:AcceptVpcPeeringConnection",
          "ec2:DescribeVpcPeeringConnections",
          "ec2:DeleteVpcPeeringConnection",
        ],
        resources: [
          Stack.of(this).formatArn({
            service: "ec2",
            resource: "vpc-peering-connection",
            account: this.props.peering!.accountId ?? Aws.ACCOUNT_ID,
            resourceName: peering.attrConnectionId,
          }),
          Stack.of(this).formatArn({
            service: "ec2",
            resource: "vpc",
            account: this.props.peering!.accountId ?? Aws.ACCOUNT_ID,
            resourceName: this.vpc?.vpcId,
          }),
        ],
      })
    );
    provider.onEventHandler.addToRolePolicy(
      new iam.PolicyStatement({
        actions: [
          "ec2:AcceptVpcPeeringConnection",
          "ec2:DescribeVpcPeeringConnections",
          "ec2:DeleteVpcPeeringConnection",
        ],
        resources: [
          Stack.of(this).formatArn({
            service: "ec2",
            resource: "vpc-peering-connection",
            account: this.props.peering!.accountId ?? Aws.ACCOUNT_ID,
            resourceName: peering.attrConnectionId,
          }),
          Stack.of(this).formatArn({
            service: "ec2",
            resource: "vpc",
            account: this.props.peering!.accountId ?? Aws.ACCOUNT_ID,
            resourceName: this.vpc?.vpcId,
          }),
        ],
      })
    );
    const peeringHandlerResource = new CustomResource(
      this,
      "CustomResourceVpcPeeringHandler",
      {
        serviceToken: provider.serviceToken,
        resourceType: "Custom::VpcPeeringHandler",
        properties: {
          ConnectionId: peering.attrConnectionId,
        },
      }
    );
    peeringHandlerResource.node.addDependency(peering);
  }
}
