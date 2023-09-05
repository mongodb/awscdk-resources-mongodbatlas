// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Returns, adds, and edits organizational units in MongoDB Cloud.
 *
 * @schema CfnOrganizationProps
 */
export interface CfnOrganizationProps {
  /**
   * Human-readable label that identifies the organization.
   *
   * @schema CfnOrganizationProps#Name
   */
  readonly name: string;

  /**
   * @schema CfnOrganizationProps#APIKey
   */
  readonly apiKey?: ApiKey;

  /**
   * Unique 24-hexadecimal digit string that identifies the federation to link the newly created organization to. If specified, the proposed Organization Owner of the new organization must have the Organization Owner role in an organization associated with the federation.
   *
   * @schema CfnOrganizationProps#FederatedSettingsId
   */
  readonly federatedSettingsId?: string;

  /**
   * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud user that you want to assign the Organization Owner role. This user must be a member of the same organization as the calling API key. If you provide federationSettingsId, this user must instead have the Organization Owner role on an organization in the specified federation. This parameter is required only when you authenticate with Programmatic API Keys.
   *
   * @schema CfnOrganizationProps#OrgOwnerId
   */
  readonly orgOwnerId: string;

  /**
   * Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used
   *
   * @schema CfnOrganizationProps#Profile
   */
  readonly profile?: string;

  /**
   * AwsSecretName used to set newly created Org credentials information.
   *
   * @schema CfnOrganizationProps#AwsSecretName
   */
  readonly awsSecretName: string;

  /**
   * Flag that indicates whether this organization has been deleted.
   *
   * @schema CfnOrganizationProps#IsDeleted
   */
  readonly isDeleted?: boolean;
}

/**
 * Converts an object of type 'CfnOrganizationProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnOrganizationProps(
  obj: CfnOrganizationProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Name: obj.name,
    APIKey: toJson_ApiKey(obj.apiKey),
    FederatedSettingsId: obj.federatedSettingsId,
    OrgOwnerId: obj.orgOwnerId,
    Profile: obj.profile,
    AwsSecretName: obj.awsSecretName,
    IsDeleted: obj.isDeleted,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema APIKey
 */
export interface ApiKey {
  /**
   * Purpose or explanation provided when someone created this organization API key. 1 to 250 characters
   *
   * @schema APIKey#Description
   */
  readonly description?: string;

  /**
   * List of roles to grant this API key. If you provide this list, provide a minimum of one role and ensure each role applies to this organization.
   *
   * @schema APIKey#Roles
   */
  readonly roles?: string[];
}

/**
 * Converts an object of type 'ApiKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiKey(
  obj: ApiKey | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Description: obj.description,
    Roles: obj.roles?.map((y) => y),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::Organization`
 *
 * @cloudformationResource MongoDB::Atlas::Organization
 * @stability external
 */
export class CfnOrganization extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::Organization";

  /**
   * Resource props.
   */
  public readonly props: CfnOrganizationProps;

  /**
   * Attribute `MongoDB::Atlas::Organization.OrgId`
   */
  public readonly attrOrgId: string;

  /**
   * Create a new `MongoDB::Atlas::Organization`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnOrganizationProps
  ) {
    super(scope, id, {
      type: CfnOrganization.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnOrganizationProps(props)!,
    });

    this.props = props;

    this.attrOrgId = cdk.Token.asString(this.getAtt("OrgId"));
  }
}
