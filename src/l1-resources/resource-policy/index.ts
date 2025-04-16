// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Atlas Resource Policies
 *
 * @schema CfnResourcePolicyProps
 */
export interface CfnResourcePolicyProps {
  /**
   * The user that last updated the atlas resource policy.
   *
   * @schema CfnResourcePolicyProps#CreatedByUser
   */
  readonly createdByUser?: ApiAtlasUserMetadata;

  /**
   * The user that last updated the atlas resource policy.
   *
   * @schema CfnResourcePolicyProps#LastUpdatedByUser
   */
  readonly lastUpdatedByUser?: ApiAtlasUserMetadata;

  /**
   * Human-readable label that describes the atlas resource policy.
   *
   * @schema CfnResourcePolicyProps#Name
   */
  readonly name: string;

  /**
   * Description of the Atlas resource policy.
   *
   * @schema CfnResourcePolicyProps#Description
   */
  readonly description?: string;

  /**
   * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
   *
   * @schema CfnResourcePolicyProps#OrgId
   */
  readonly orgId: string;

  /**
   * List of policies that make up the atlas resource policy.
   *
   * @schema CfnResourcePolicyProps#Policies
   */
  readonly policies: ApiAtlasPolicy[];

  /**
   * Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used
   *
   * @schema CfnResourcePolicyProps#Profile
   */
  readonly profile?: string;
}

/**
 * Converts an object of type 'CfnResourcePolicyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnResourcePolicyProps(
  obj: CfnResourcePolicyProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    CreatedByUser: toJson_ApiAtlasUserMetadata(obj.createdByUser),
    LastUpdatedByUser: toJson_ApiAtlasUserMetadata(obj.lastUpdatedByUser),
    Name: obj.name,
    Description: obj.description,
    OrgId: obj.orgId,
    Policies: obj.policies?.map((y) => toJson_ApiAtlasPolicy(y)),
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
 * @schema ApiAtlasUserMetadata
 */
export interface ApiAtlasUserMetadata {
  /**
   * Unique 24-hexadecimal character string that identifies a user.
   *
   * @schema ApiAtlasUserMetadata#Id
   */
  readonly id?: string;

  /**
   * Human-readable label that describes a user.
   *
   * @schema ApiAtlasUserMetadata#Name
   */
  readonly name?: string;
}

/**
 * Converts an object of type 'ApiAtlasUserMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiAtlasUserMetadata(
  obj: ApiAtlasUserMetadata | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Id: obj.id,
    Name: obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiAtlasPolicy
 */
export interface ApiAtlasPolicy {
  /**
   * A string that defines the permissions for the policy. The syntax used is the Cedar Policy language.
   *
   * @schema ApiAtlasPolicy#Body
   */
  readonly body: string;

  /**
   * Unique 24-hexadecimal character string that identifies the policy.
   *
   * @schema ApiAtlasPolicy#Id
   */
  readonly id?: string;
}

/**
 * Converts an object of type 'ApiAtlasPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiAtlasPolicy(
  obj: ApiAtlasPolicy | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Body: obj.body,
    Id: obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::ResourcePolicy`
 *
 * @cloudformationResource MongoDB::Atlas::ResourcePolicy
 * @stability external
 */
export class CfnResourcePolicy extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::ResourcePolicy";

  /**
   * Resource props.
   */
  public readonly props: CfnResourcePolicyProps;

  /**
   * Attribute `MongoDB::Atlas::ResourcePolicy.CreatedDate`
   */
  public readonly attrCreatedDate: string;
  /**
   * Attribute `MongoDB::Atlas::ResourcePolicy.Id`
   */
  public readonly attrId: string;
  /**
   * Attribute `MongoDB::Atlas::ResourcePolicy.LastUpdatedDate`
   */
  public readonly attrLastUpdatedDate: string;
  /**
   * Attribute `MongoDB::Atlas::ResourcePolicy.Version`
   */
  public readonly attrVersion: string;

  /**
   * Create a new `MongoDB::Atlas::ResourcePolicy`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnResourcePolicyProps
  ) {
    super(scope, id, {
      type: CfnResourcePolicy.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnResourcePolicyProps(props)!,
    });

    this.props = props;

    this.attrCreatedDate = cdk.Token.asString(this.getAtt("CreatedDate"));
    this.attrId = cdk.Token.asString(this.getAtt("Id"));
    this.attrLastUpdatedDate = cdk.Token.asString(
      this.getAtt("LastUpdatedDate")
    );
    this.attrVersion = cdk.Token.asString(this.getAtt("Version"));
  }
}
