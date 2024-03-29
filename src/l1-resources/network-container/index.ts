// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Returns, adds, edits, and removes network peering containers.
 *
 * @schema CfnNetworkContainerProps
 */
export interface CfnNetworkContainerProps {
  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnNetworkContainerProps#ProjectId
   */
  readonly projectId: string;

  /**
   * Geographic area that Amazon Web Services (AWS) defines to which MongoDB Cloud deployed this network peering container.
   *
   * @schema CfnNetworkContainerProps#RegionName
   */
  readonly regionName: string;

  /**
   * Boolean flag that indicates whether MongoDB Cloud clusters exist in the specified network peering container.
   *
   * @schema CfnNetworkContainerProps#Provisioned
   */
  readonly provisioned?: boolean;

  /**
   * Unique string that identifies the MongoDB Cloud VPC on AWS.
   *
   * @schema CfnNetworkContainerProps#VpcId
   */
  readonly vpcId?: string;

  /**
   * IP addresses expressed in Classless Inter-Domain Routing (CIDR) notation that MongoDB Cloud uses for the network peering containers in your project. MongoDB Cloud assigns all of the project's clusters deployed to this cloud provider an IP address from this range. MongoDB Cloud locks this value if an M10 or greater cluster or a network peering connection exists in this project.
   * These CIDR blocks must fall within the ranges reserved per RFC 1918. AWS further limits the block to between the /24 and /21 ranges.
   * To modify the CIDR block, the target project cannot have:
   * - Any M10 or greater clusters
   * - Any other VPC peering connections
   * You can also create a new project and create a network peering connection to set the desired MongoDB Cloud network peering container CIDR block for that project. MongoDB Cloud limits the number of MongoDB nodes per network peering connection based on the CIDR block and the region selected for the project.
   * Example: A project in an Amazon Web Services (AWS) region supporting three availability zones and an MongoDB CIDR network peering container block of limit of /24 equals 27 three-node replica sets.
   *
   * @schema CfnNetworkContainerProps#AtlasCidrBlock
   */
  readonly atlasCidrBlock: string;

  /**
   * The profile is defined in AWS Secret manager. See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).
   *
   * @schema CfnNetworkContainerProps#Profile
   */
  readonly profile?: string;
}

/**
 * Converts an object of type 'CfnNetworkContainerProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnNetworkContainerProps(
  obj: CfnNetworkContainerProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    ProjectId: obj.projectId,
    RegionName: obj.regionName,
    Provisioned: obj.provisioned,
    VpcId: obj.vpcId,
    AtlasCidrBlock: obj.atlasCidrBlock,
    Profile: obj.profile,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::NetworkContainer`
 *
 * @cloudformationResource MongoDB::Atlas::NetworkContainer
 * @stability external
 */
export class CfnNetworkContainer extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::NetworkContainer";

  /**
   * Resource props.
   */
  public readonly props: CfnNetworkContainerProps;

  /**
   * Attribute `MongoDB::Atlas::NetworkContainer.Id`
   */
  public readonly attrId: string;

  /**
   * Create a new `MongoDB::Atlas::NetworkContainer`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnNetworkContainerProps
  ) {
    super(scope, id, {
      type: CfnNetworkContainer.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnNetworkContainerProps(props)!,
    });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt("Id"));
  }
}
