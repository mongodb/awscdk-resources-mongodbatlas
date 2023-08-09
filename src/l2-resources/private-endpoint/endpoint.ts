import { Resource, aws_ec2 as ec2 } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as atlas from "../../index";

/**
 * Options to create a private endpoint.
 */
export interface PrivateEndpointVpcOptions {
  readonly vpc: ec2.IVpc;
  readonly vpcSubnets: ec2.SubnetSelection[];
}

export interface IPrivateEndpoint {
  readonly privateEndpointId: string;
  readonly privateEndpointName: string;
}

export interface PrivateEndpointAttributes {
  readonly privateEndpointId: string;
  readonly privateEndpointName: string;
}

export interface PrivateEndpointProps extends PrivateEndpointVpcOptions {
  readonly profile: string;
  readonly project: atlas.IProject;
  /**
   * The Atlas region for AWS.
   * @default AtlasRegion.US_EAST_1
   */
  readonly region?: atlas.AtlasRegion;
  readonly serviceName?: string;
}

export class PrivateEndpoint extends Resource implements IPrivateEndpoint {
  public static fromPrivateEndpointAttributes(
    scope: Construct,
    id: string,
    attrs: PrivateEndpointAttributes
  ): IPrivateEndpoint {
    class Import extends Resource {
      public privateEndpointId = attrs.privateEndpointId;
      public privateEndpointName = attrs.privateEndpointName;
    }
    return new Import(scope, id);
  }
  readonly privateEndpointId: string;
  readonly privateEndpointName: string;

  constructor(scope: Construct, id: string, props: PrivateEndpointProps) {
    super(scope, id);

    this.privateEndpointName = props.serviceName ?? `endpoint${id}`;
    const region = props.region ?? atlas.AtlasRegion.US_EAST_1;
    const resource = new atlas.CfnPrivateEndpoint(this, "Resource", {
      groupId: props.project.projectId,
      // only aws region is accepted here.
      region: this.atlasRegion2Aws(region),
      profile: props.profile,
      privateEndpoints: [
        {
          vpcId: props.vpc.vpcId,
          subnetIds: this.flattenSubnetIds(props.vpc, props.vpcSubnets),
        },
      ],
    });
    this.privateEndpointId = resource.attrId;
  }
  /**
   * Convert Atlas region code to AWS region code.
   * For example, US_EAST_1 will be converted to us-east-1.
   */
  private atlasRegion2Aws(region: atlas.AtlasRegion): string {
    const parts = region.valueOf().split("_");
    if (parts.length !== 3) {
      throw new Error("Invalid input format");
    }
    const [geo, subregion, number] = parts;
    return `${geo.toLowerCase()}-${subregion.toLowerCase()}-${number}`;
  }
  private flattenSubnetIds(
    vpc: ec2.IVpc,
    vpcSubnets: ec2.SubnetSelection[]
  ): string[] {
    let subnetIds: string[] = [];
    vpcSubnets.forEach((x) => {
      subnetIds = [...subnetIds, ...vpc.selectSubnets(x).subnetIds];
    });
    return subnetIds;
  }
}
