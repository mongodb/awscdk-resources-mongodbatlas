import * as atlas from '../../index';

/**
 * @description
 * @export
 * @interface AtlasBasicProps
 */
export interface AtlasBasicProps {
  /**
   * @description
   * @type {string}
   * @memberof AtlasBasicProps
   */
  readonly profile?: string;

  /**
   * @description
   * @type {ProjectProps}
   * @memberof AtlasBasicProps
   */
  readonly projectProps: ProjectProps;
  /**
   * @description
   * @type {ClusterProps}
   * @memberof AtlasBasicProps
   */
  readonly clusterProps: ClusterProps;
  /**
   * @description
   * @type {DatabaseUserProps}
   * @memberof AtlasBasicProps
   */
  readonly dbUserProps?: DatabaseUserProps;
  /**
   * @description
   * @type {IpAccessListProps}
   * @memberof AtlasBasicProps
   */
  readonly ipAccessListProps?: IpAccessListProps;
}

/**
 * @description
 * @export
 * @interface ProjectProps
 */
export interface ProjectProps {
  /**
   * @description
   * @type {string}
   * @memberof ProjectProps
   */
  readonly name?: string;
  /**
   * @description
   * @type {string}
   * @memberof ProjectProps
   * @default auto-generated
   */
  readonly orgId: string;
  /**
   * @description
   * @type {string}
   * @memberof ProjectProps
   */
  readonly projectOwnerId?: string;
  /**
   * @description
   * @type {boolean}
   * @memberof ProjectProps
   */
  readonly withDefaultAlertsSettings?: boolean;
  /**
   * @description
   * @type {number}
   * @memberof ProjectProps
   */
  readonly clusterCount?: number;
  /**
   * @description
   * @type {project.ProjectSettings}
   * @memberof ProjectProps
   */
  readonly projectSettings?: atlas.ProjectSettings;
  /**
   * @description
   * @type {project.ProjectTeam[]}
   * @memberof ProjectProps
   */
  readonly projectTeams?: atlas.ProjectTeam[];
  /**
   * @description
   * @type {project.ProjectApiKey[]}
   * @memberof ProjectProps
   */
  readonly projectApiKeys?: atlas.ProjectApiKey[];
}
/**
 * @description
 * @export
 * @interface ClusterProps
 */
export interface ClusterProps {
  /**
   * @description
   * @type {atlas.ProcessArgs}
   * @memberof ClusterProps
   */
  readonly advancedSettings?: atlas.ProcessArgs;
  /**
   * @description
   * @type {boolean}
   * @memberof ClusterProps
   */
  readonly backupEnabled?: boolean;
  /**
   * @description
   * @type {atlas.CfnClusterPropsBiConnector}
   * @memberof ClusterProps
   */
  readonly biConnector?: atlas.CfnClusterPropsBiConnector;
  /**
   * @description
   * @type {string}
   * @memberof ClusterProps
   */
  readonly clusterType?: string;
  /**
   * @description
   * @type {atlas.ConnectionStrings}
   * @memberof ClusterProps
   * @default REPLICASET
   */
  readonly connectionStrings?: atlas.ConnectionStrings;
  /**
   * @description
   * @type {number}
   * @memberof ClusterProps
   */
  readonly diskSizeGb?: number;
  /**
   * @description
   * @type {atlas.CfnClusterPropsEncryptionAtRestProvider}
   * @memberof ClusterProps
   */
  readonly encryptionAtRestProvider?: atlas.CfnClusterPropsEncryptionAtRestProvider;
  /**
   * @description
   * @type {string}
   * @memberof ClusterProps
   */
  readonly projectId?: string;
  /**
   * @description
   * @type {atlas.CfnClusterPropsLabels[]}
   * @memberof ClusterProps
   */
  readonly labels?: atlas.CfnClusterPropsLabels[];
  /**
   * @description
   * @type {string}
   * @memberof ClusterProps
   */
  readonly mongoDbMajorVersion?: string;
  /**
   * @description
   * @type {string}
   * @memberof ClusterProps
   */
  readonly name?: string;
  /**
   * @description
   * @type {boolean}
   * @memberof ClusterProps
   * @default auto-generated
   */
  readonly paused?: boolean;
  /**
   * @description
   * @type {boolean}
   * @memberof ClusterProps
   */
  readonly pitEnabled?: boolean;
  /**
   * @description
   * @type {atlas.AdvancedReplicationSpec[]}
   * @memberof ClusterProps
   */
  readonly replicationSpecs?: atlas.AdvancedReplicationSpec[];
  /**
   * @description
   * @type {string}
   * @memberof ClusterProps
   */
  readonly rootCertType?: string;
  /**
   * @description
   * @type {string}
   * @memberof ClusterProps
   */
  readonly versionReleaseSystem?: string;
  /**
   * @description
   * @type {boolean}
   * @memberof ClusterProps
   */
  readonly terminationProtectionEnabled?: boolean;
}
/**
 * @description
 * @export
 * @interface DatabaseUserProps
 */
export interface DatabaseUserProps {
  /**
   * @description
   * @type {string}
   * @memberof DatabaseUserProps
   */
  readonly deleteAfterDate?: string;
  /**
   * @description
   * @type {user.CfnDatabaseUserPropsAwsiamType}
   * @memberof DatabaseUserProps
   */
  readonly awsiamType?: atlas.CfnDatabaseUserPropsAwsiamType;
  /**
   * @description
   * @type {string}
   * @memberof DatabaseUserProps
   */
  readonly databaseName?: string;
  /**
   * @description
   * @type {user.LabelDefinition[]}
   * @memberof DatabaseUserProps
   * @default admin
   */
  readonly labels?: atlas.LabelDefinition[];
  /**
   * @description
   * @type {user.CfnDatabaseUserPropsLdapAuthType}
   * @memberof DatabaseUserProps
   */
  readonly ldapAuthType?: atlas.CfnDatabaseUserPropsLdapAuthType;
  /**
   * @description
   * @type {user.CfnDatabaseUserPropsX509Type}
   * @memberof DatabaseUserProps
   */
  readonly x509Type?: atlas.CfnDatabaseUserPropsX509Type;
  /**
   * @description
   * @type {string}
   * @memberof DatabaseUserProps
   */
  readonly password?: string;
  /**
   * @description
   * @type {string}
   * @default cdk-pwd
   * @memberof DatabaseUserProps
   */
  readonly projectId?: string;
  /**
   * @description
   * @type {user.RoleDefinition[]}
   * @memberof DatabaseUserProps
   */
  readonly roles?: atlas.RoleDefinition[];
  /**
   * @description
   * @type {user.ScopeDefinition[]}
   * @memberof DatabaseUserProps
   */
  readonly scopes?: atlas.ScopeDefinition[];
  /**
   * @description
   * @type {string}
   * @memberof DatabaseUserProps
   * @default cdk-user
   */
  readonly username?: string;
}
/**
 * @description
 * @export
 * @interface IpAccessListProps
 */
export interface IpAccessListProps {
  /**
   * @description
   * @type {ipAccessList.AccessListDefinition[]}
   * @memberof IpAccessListProps
   */
  readonly accessList: atlas.AccessListDefinition[];
  /**
   * @description
   * @type {string}
   * @memberof IpAccessListProps
   * @default allow-all
   */
  readonly projectId?: string;
  /**
   * @description
   * @type {number}
   * @memberof IpAccessListProps
   */
  readonly totalCount?: number;
  /**
   * @description
   * @type {ipAccessList.ListOptions}
   * @memberof IpAccessListProps
   */
  readonly listOptions?: atlas.ListOptions;
}
