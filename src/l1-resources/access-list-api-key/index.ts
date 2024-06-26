// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Creates the access list entries for the specified organization API key.
 *
 * @schema CfnAccessListApiKeyProps
 */
export interface CfnAccessListApiKeyProps {
  /**
   * Unique 24-hexadecimal digit string that identifies the organization that contains your projects
   *
   * @schema CfnAccessListApiKeyProps#OrgId
   */
  readonly orgId: string;

  /**
   * Unique 24-hexadecimal digit string that identifies this organization API key for which you want to return access list entries.
   *
   * @schema CfnAccessListApiKeyProps#APIUserId
   */
  readonly apiUserId: string;

  /**
   * Network address that issued the most recent request to the API.
   *
   * @schema CfnAccessListApiKeyProps#Profile
   */
  readonly profile?: string;

  /**
   * Range of network addresses that you want to add to the access list for the API key.
   *
   * @schema CfnAccessListApiKeyProps#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * Network address that you want to add to the access list for the API key.
   *
   * @schema CfnAccessListApiKeyProps#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * Number of documents returned in this response.
   *
   * @schema CfnAccessListApiKeyProps#TotalCount
   */
  readonly totalCount?: number;
}

/**
 * Converts an object of type 'CfnAccessListApiKeyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnAccessListApiKeyProps(
  obj: CfnAccessListApiKeyProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    OrgId: obj.orgId,
    APIUserId: obj.apiUserId,
    Profile: obj.profile,
    CidrBlock: obj.cidrBlock,
    IpAddress: obj.ipAddress,
    TotalCount: obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::AccessListAPIKey`
 *
 * @cloudformationResource MongoDB::Atlas::AccessListAPIKey
 * @stability external
 */
export class CfnAccessListApiKey extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::AccessListAPIKey";

  /**
   * Resource props.
   */
  public readonly props: CfnAccessListApiKeyProps;

  /**
   * Attribute `MongoDB::Atlas::AccessListAPIKey.Entry`
   */
  public readonly attrEntry: string;

  /**
   * Create a new `MongoDB::Atlas::AccessListAPIKey`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnAccessListApiKeyProps
  ) {
    super(scope, id, {
      type: CfnAccessListApiKey.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnAccessListApiKeyProps(props)!,
    });

    this.props = props;

    this.attrEntry = cdk.Token.asString(this.getAtt("Entry"));
  }
}
