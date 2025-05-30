// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Returns, adds, edits, and removes database users.
 *
 * @schema CfnDatabaseUserProps
 */
export interface CfnDatabaseUserProps {
  /**
   * Date and time when MongoDB Cloud deletes the user. This parameter expresses its value in the ISO 8601 timestamp format in UTC and can include the time zone designation. You must specify a future date that falls within one week of making the Application Programming Interface (API) request.
   *
   * @schema CfnDatabaseUserProps#DeleteAfterDate
   */
  readonly deleteAfterDate?: string;

  /**
   * Human-readable label that indicates whether the new database user authenticates with the Amazon Web Services (AWS) Identity and Access Management (IAM) credentials associated with the user or the user's role. Default value is `NONE`.
   *
   * @schema CfnDatabaseUserProps#AWSIAMType
   */
  readonly awsiamType?: CfnDatabaseUserPropsAwsiamType;

  /**
   * MongoDB database against which the MongoDB database user authenticates. MongoDB database users must provide both a username and authentication database to log into MongoDB.  Default value is `admin`.
   *
   * @schema CfnDatabaseUserProps#DatabaseName
   */
  readonly databaseName: string;

  /**
   * Description of this database user.
   *
   * @schema CfnDatabaseUserProps#Description
   */
  readonly description?: string;

  /**
   * List that contains the key-value pairs for tagging and categorizing the MongoDB database user. The labels that you define do not appear in the console.
   *
   * @schema CfnDatabaseUserProps#Labels
   */
  readonly labels?: LabelDefinition[];

  /**
   * Method by which the provided username is authenticated. Default value is `NONE`.
   *
   * @schema CfnDatabaseUserProps#LdapAuthType
   */
  readonly ldapAuthType?: CfnDatabaseUserPropsLdapAuthType;

  /**
   * Method that briefs who owns the certificate provided. Default value is `NONE`.
   *
   * @schema CfnDatabaseUserProps#X509Type
   */
  readonly x509Type?: CfnDatabaseUserPropsX509Type;

  /**
   * The user’s password. This field is not included in the entity returned from the server.
   *
   * @schema CfnDatabaseUserProps#Password
   */
  readonly password?: string;

  /**
   * Unique 24-hexadecimal digit string that identifies your Atlas Project.
   *
   * @schema CfnDatabaseUserProps#ProjectId
   */
  readonly projectId: string;

  /**
   * List that provides the pairings of one role with one applicable database.
   *
   * @schema CfnDatabaseUserProps#Roles
   */
  readonly roles: RoleDefinition[];

  /**
   * List that contains clusters and MongoDB Atlas Data Lakes that this database user can access. If omitted, MongoDB Cloud grants the database user access to all the clusters and MongoDB Atlas Data Lakes in the project.
   *
   * @schema CfnDatabaseUserProps#Scopes
   */
  readonly scopes?: ScopeDefinition[];

  /**
   * Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication. This will be USER_ARN or ROLE_ARN if AWSIAMType is USER or ROLE. Refer https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Database-Users/operation/createDatabaseUser for details.
   *
   * @schema CfnDatabaseUserProps#Username
   */
  readonly username: string;

  /**
   * Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided `default` is used
   *
   * @schema CfnDatabaseUserProps#Profile
   */
  readonly profile?: string;
}

/**
 * Converts an object of type 'CfnDatabaseUserProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnDatabaseUserProps(
  obj: CfnDatabaseUserProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    DeleteAfterDate: obj.deleteAfterDate,
    AWSIAMType: obj.awsiamType,
    DatabaseName: obj.databaseName,
    Description: obj.description,
    Labels: obj.labels?.map((y) => toJson_LabelDefinition(y)),
    LdapAuthType: obj.ldapAuthType,
    X509Type: obj.x509Type,
    Password: obj.password,
    ProjectId: obj.projectId,
    Roles: obj.roles?.map((y) => toJson_RoleDefinition(y)),
    Scopes: obj.scopes?.map((y) => toJson_ScopeDefinition(y)),
    Username: obj.username,
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
 * Human-readable label that indicates whether the new database user authenticates with the Amazon Web Services (AWS) Identity and Access Management (IAM) credentials associated with the user or the user's role. Default value is `NONE`.
 *
 * @schema CfnDatabaseUserPropsAwsiamType
 */
export enum CfnDatabaseUserPropsAwsiamType {
  /** NONE */
  NONE = "NONE",
  /** USER */
  USER = "USER",
  /** ROLE */
  ROLE = "ROLE",
}

/**
 * @schema labelDefinition
 */
export interface LabelDefinition {
  /**
   * @schema labelDefinition#Key
   */
  readonly key?: string;

  /**
   * @schema labelDefinition#Value
   */
  readonly value?: string;
}

/**
 * Converts an object of type 'LabelDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LabelDefinition(
  obj: LabelDefinition | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Key: obj.key,
    Value: obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Method by which the provided username is authenticated. Default value is `NONE`.
 *
 * @schema CfnDatabaseUserPropsLdapAuthType
 */
export enum CfnDatabaseUserPropsLdapAuthType {
  /** NONE */
  NONE = "NONE",
  /** USER */
  USER = "USER",
  /** GROUP */
  GROUP = "GROUP",
}

/**
 * Method that briefs who owns the certificate provided. Default value is `NONE`.
 *
 * @schema CfnDatabaseUserPropsX509Type
 */
export enum CfnDatabaseUserPropsX509Type {
  /** NONE */
  NONE = "NONE",
  /** MANAGED */
  MANAGED = "MANAGED",
  /** CUSTOMER */
  CUSTOMER = "CUSTOMER",
}

/**
 * @schema roleDefinition
 */
export interface RoleDefinition {
  /**
   * @schema roleDefinition#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema roleDefinition#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema roleDefinition#RoleName
   */
  readonly roleName?: string;
}

/**
 * Converts an object of type 'RoleDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoleDefinition(
  obj: RoleDefinition | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    CollectionName: obj.collectionName,
    DatabaseName: obj.databaseName,
    RoleName: obj.roleName,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema scopeDefinition
 */
export interface ScopeDefinition {
  /**
   * @schema scopeDefinition#Name
   */
  readonly name?: string;

  /**
   * @schema scopeDefinition#Type
   */
  readonly type?: ScopeDefinitionType;
}

/**
 * Converts an object of type 'ScopeDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ScopeDefinition(
  obj: ScopeDefinition | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Name: obj.name,
    Type: obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ScopeDefinitionType
 */
export enum ScopeDefinitionType {
  /** CLUSTER */
  CLUSTER = "CLUSTER",
  /** DATA_LAKE */
  DATA_LAKE = "DATA_LAKE",
}

/**
 * A CloudFormation `MongoDB::Atlas::DatabaseUser`
 *
 * @cloudformationResource MongoDB::Atlas::DatabaseUser
 * @stability external
 */
export class CfnDatabaseUser extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::DatabaseUser";

  /**
   * Resource props.
   */
  public readonly props: CfnDatabaseUserProps;

  /**
   * Attribute `MongoDB::Atlas::DatabaseUser.UserCFNIdentifier`
   */
  public readonly attrUserCFNIdentifier: string;

  /**
   * Create a new `MongoDB::Atlas::DatabaseUser`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnDatabaseUserProps
  ) {
    super(scope, id, {
      type: CfnDatabaseUser.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnDatabaseUserProps(props)!,
    });

    this.props = props;

    this.attrUserCFNIdentifier = cdk.Token.asString(
      this.getAtt("UserCFNIdentifier")
    );
  }
}
