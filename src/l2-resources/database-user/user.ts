import { Resource, ResourceProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as atlas from "../../index";

export interface DatabaseUserCommonOptions {
  /**
   * MongoDB database against which the MongoDB database user authenticates. MongoDB database users must provide both a
   * username and authentication database to log into MongoDB.  Default value is `admin`.
   */
  readonly databaseName?: string;
  /**
   * Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on
   * the method of authentication. This will be USER_ARN or ROLE_ARN if AWSIAMType is USER or ROLE. Refer https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Database-Users/operation/createDatabaseUser for details.
   * @default cdk-user
   */
  readonly username?: string;
  /**
   * The user’s password. This field is not included in the entity returned from the server.
   */
  readonly password?: string;
  /**
   * List that provides the pairings of one role with one applicable database.
   *
   * @default - [{ roleName: "atlasAdmin", databaseName: "admin" }],
   */
  readonly roles?: atlas.RoleDefinition[];
}

export interface DatabaseUserOptions extends DatabaseUserCommonOptions {
  /**
   * Date and time when MongoDB Cloud deletes the user. This parameter expresses its value in the ISO 8601 timestamp
   * format in UTC and can include the time zone designation. You must specify a future date that falls within one week
   * of making the Application Programming Interface (API) request.
   */
  readonly deleteAfterDate?: string;
  /**
   * Human-readable label that indicates whether the new database user authenticates with the Amazon Web Services (AWS)
   * Identity and Access Management (IAM) credentials associated with the user or the user's role. Default value is `NONE`.
   */
  readonly awsiamType?: atlas.CfnDatabaseUserPropsAwsiamType;
  /**
   * List that contains the key-value pairs for tagging and categorizing the MongoDB database user. The labels that you define
   * do not appear in the console.
   * @default admin
   */
  readonly labels?: atlas.LabelDefinition[];
  /**
   * Method by which the provided username is authenticated. Default value is `NONE`.
   */
  readonly ldapAuthType?: atlas.CfnDatabaseUserPropsLdapAuthType;
  /**
   * Method that briefs who owns the certificate provided. Default value is `NONE`.
   */
  readonly x509Type?: atlas.CfnDatabaseUserPropsX509Type;
  /**
   * Unique 24-hexadecimal digit string that identifies your Atlas Project.
   */
  readonly projectId?: string;
  /**
   * List that contains clusters and MongoDB Atlas Data Lakes that this database user can access. If omitted,
   * MongoDB Cloud grants the database user access to all the clusters and MongoDB Atlas Data Lakes in the project.
   */
  readonly scopes?: atlas.ScopeDefinition[];
}

export interface IDatabaseUser {
  readonly userCFNIdentifier: string;
  readonly dabataseUserName: string;
}

export interface DatabaseUserAttributes {
  readonly userCFNIdentifier: string;
  readonly dabataseUserName: string;
}

export interface DatabaseUserProps extends ResourceProps, DatabaseUserOptions {
  readonly profile: string;
  readonly project: atlas.IProject;
}

export class DatabaseUser extends Resource implements IDatabaseUser {
  public static fromDatabaseUserAttributes(
    scope: Construct,
    id: string,
    attrs: DatabaseUserAttributes
  ): IDatabaseUser {
    class Import extends Resource {
      public userCFNIdentifier = attrs.userCFNIdentifier;
      public dabataseUserName = attrs.dabataseUserName;
    }
    return new Import(scope, id);
  }
  readonly userCFNIdentifier: string;
  readonly dabataseUserName: string;

  constructor(scope: Construct, id: string, props: DatabaseUserProps) {
    super(scope, id);

    this.dabataseUserName = props.username ?? "atlas-user";
    const resource = new atlas.CfnDatabaseUser(this, "Resource", {
      ...props,
      profile: props.profile,
      databaseName: props.databaseName ?? "admin",
      projectId: props.project.projectId,
      username: this.dabataseUserName,
      password: props.password ?? "atlas-pwd",
      roles: props.roles ?? [{ roleName: "atlasAdmin", databaseName: "admin" }],
    });
    this.userCFNIdentifier = resource.attrUserCFNIdentifier;
  }
}
