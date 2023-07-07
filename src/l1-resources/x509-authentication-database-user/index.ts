// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Generates one X.509 certificate for the specified MongoDB user. Atlas manages the certificate and MongoDB user that belong to one project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
 *
 * To get MongoDB Cloud to generate a managed certificate for a database user, set `"x509Type" : "MANAGED"` on the desired MongoDB Database User.
 *
 * If you are managing your own Certificate Authority (CA) in Self-Managed X.509 mode, you must generate certificates for database users using your own CA.
 *
 * @schema CfnX509AuthenticationDatabaseUserProps
 */
export interface CfnX509AuthenticationDatabaseUserProps {
  /**
   * Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used
   *
   * @schema CfnX509AuthenticationDatabaseUserProps#Profile
   */
  readonly profile?: string;

  /**
   * Total number of unexpired certificates returned in this response.
   *
   * @schema CfnX509AuthenticationDatabaseUserProps#TotalCount
   */
  readonly totalCount?: number;

  /**
   * CustomerX509 represents Customer-managed X.509 configuration for an Atlas project.
   *
   * @schema CfnX509AuthenticationDatabaseUserProps#CustomerX509
   */
  readonly customerX509?: CustomerX509;

  /**
   * Username of the database user to create a certificate for.
   *
   * @schema CfnX509AuthenticationDatabaseUserProps#UserName
   */
  readonly userName?: string;

  /**
   * A number of months that the created certificate is valid for before expiry, up to 24 months.default 3.
   *
   * @schema CfnX509AuthenticationDatabaseUserProps#MonthsUntilExpiration
   */
  readonly monthsUntilExpiration?: number;

  /**
   * The unique identifier for the project .
   *
   * @schema CfnX509AuthenticationDatabaseUserProps#ProjectId
   */
  readonly projectId?: string;
}

/**
 * Converts an object of type 'CfnX509AuthenticationDatabaseUserProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnX509AuthenticationDatabaseUserProps(
  obj: CfnX509AuthenticationDatabaseUserProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Profile: obj.profile,
    TotalCount: obj.totalCount,
    CustomerX509: toJson_CustomerX509(obj.customerX509),
    UserName: obj.userName,
    MonthsUntilExpiration: obj.monthsUntilExpiration,
    ProjectId: obj.projectId,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema customerX509
 */
export interface CustomerX509 {
  /**
   * PEM string containing one or more customer CAs for database user authentication.
   *
   * @schema customerX509#Cas
   */
  readonly cas?: string;
}

/**
 * Converts an object of type 'CustomerX509' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerX509(
  obj: CustomerX509 | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Cas: obj.cas,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::X509AuthenticationDatabaseUser`
 *
 * @cloudformationResource MongoDB::Atlas::X509AuthenticationDatabaseUser
 * @stability external
 */
export class CfnX509AuthenticationDatabaseUser extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::X509AuthenticationDatabaseUser";

  /**
   * Resource props.
   */
  public readonly props: CfnX509AuthenticationDatabaseUserProps;

  /**
   * Create a new `MongoDB::Atlas::X509AuthenticationDatabaseUser`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnX509AuthenticationDatabaseUserProps
  ) {
    super(scope, id, {
      type: CfnX509AuthenticationDatabaseUser.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnX509AuthenticationDatabaseUserProps(props)!,
    });

    this.props = props;
  }
}
