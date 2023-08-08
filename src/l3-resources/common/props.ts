import { aws_ec2 as ec2 } from "aws-cdk-lib";
import * as atlas from "../../index";

export interface PeeringProps {
  /**
   * The AWS VPC to peer with.
   */
  readonly vpc: ec2.IVpc;
  /**
   * The Atlas CIDR block for the network container.
   */
  readonly cidr: string;
  /**
   * The AWS region name to accept the peering.
   * @default - current region name.
   */
  readonly acceptRegionName?: string;
  /**
   * The AWS account ID.
   * @default - current account ID.
   */
  readonly accountId?: string;
}

/**
 * @description
 * @export
 * @interface AtlasBasicProps
 */
export interface AtlasBasicProps {
  /**
   * @description Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided `default` is used
   * @type {string}
   * @memberof AtlasBasicProps
   */
  readonly profile: string;

  readonly orgId: string;

  /**
   * @description
   * @type {AtlasProjectProps}
   * @memberof AtlasBasicProps
   *
   * @default - create a new project.
   */
  readonly project?: atlas.IProject;
  /**
   * @description
   * @type {AtlasClusterProps}
   * @memberof AtlasBasicProps
   */
  readonly clusterProps: AtlasClusterProps;
  /**
   * @description
   * @type {DatabaseUserProps}
   * @memberof AtlasBasicProps
   */
  readonly dbUserProps?: AtlasDatabaseUserProps;
  /**
   * @description
   * @type {IpAccessListProps}
   * @memberof AtlasBasicProps
   */
  // readonly ipAccessListProps?: AtlasIpAccessListProps;
  readonly accessList: atlas.AccessList[];

  /**
   * VPC peering options with AWS. If you enable this option, the network container and network peering with AWS VPC
   * will be provisioned and the VPC peering request will be auto accepted.
   *
   * @see https://www.mongodb.com/docs/atlas/security-vpc-peering/
   *
   * @default - no vpc peering.
   */
  readonly peering?: PeeringProps;
}

/**
 * @description
 * @export
 * @interface AtlasProjectProps
 */
export interface AtlasProjectProps {
  /**
   * @description Name of the project to create.
   * @type {string}
   * @memberof AtlasProjectProps
   */
  readonly name?: string;
  /**
   * @description Unique identifier of the organization within which to create the project.
   * @type {string}
   * @memberof AtlasProjectProps
   * @default auto-generated
   */
  readonly orgId: string;
  /**
   * @description Unique 24-hexadecimal digit string that identifies the Atlas user account to be granted the `Project Owner` role on the specified project. If you set this parameter, it overrides the default value of the oldest `Organization Owner`.
   * @type {string}
   * @memberof AtlasProjectProps
   */
  readonly projectOwnerId?: string;
  /**
   * @description Flag that indicates whether to create the project with default alert settings.
   * @type {boolean}
   * @memberof AtlasProjectProps
   */
  readonly withDefaultAlertsSettings?: boolean;
  /**
   * @description The number of Atlas clusters deployed in the project.
   * @type {number}
   * @memberof AtlasProjectProps
   */
  readonly clusterCount?: number;
  /**
   * @description
   * @type {project.ProjectSettings}
   * @memberof AtlasProjectProps
   */
  readonly projectSettings?: atlas.ProjectSettings;
  /**
   * @description
   * @type {project.ProjectTeam[]}
   * @memberof AtlasProjectProps
   */
  readonly projectTeams?: atlas.ProjectTeam[];
  /**
   * @description
   * @type {project.ProjectApiKey[]}
   * @memberof AtlasProjectProps
   */
  readonly projectApiKeys?: atlas.ProjectApiKey[];
}

/**
 * @description
 * @export
 * @interface ClusterProps
 */
export interface AtlasClusterProps {
  /**
   * @description Advanced configuration details to add for one cluster in the specified project.
   * @type {atlas.ProcessArgs}
   * @memberof AtlasClusterProps
   */
  readonly advancedSettings?: atlas.ProcessArgs;
  /**
   * @description Flag that indicates whether the cluster can perform backups. If set to true, the cluster can perform backups. You must set this value to true for NVMe clusters. Backup uses Cloud Backups for dedicated clusters and Shared Cluster Backups for tenant clusters. If set to false, the cluster doesn't use backups.
   * @type {boolean}
   * @memberof AtlasClusterProps
   */
  readonly backupEnabled?: boolean;
  /**
   * @description Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster.
   * @type {atlas.CfnClusterPropsBiConnector}
   * @memberof AtlasClusterProps
   */
  readonly biConnector?: atlas.CfnClusterPropsBiConnector;
  /**
   * @description Configuration of nodes that comprise the cluster. Atlas accepts: `REPLICASET`, `SHARDED`, `GEOSHARDED`.
   * @type {string}
   * @memberof AtlasClusterProps
   */
  readonly clusterType?: string;
  /**
   * @description Set of connection strings that your applications use to connect to this cluster. Use the parameters in this object to connect your applications to this cluster. See the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/) reference for further details.
   * @type {atlas.ConnectionStrings}
   * @memberof AtlasClusterProps
   * @default REPLICASET
   */
  readonly connectionStrings?: atlas.ConnectionStrings;
  /**
   * @description Storage capacity that the host's root volume possesses expressed in gigabytes. Increase this number to add capacity. MongoDB Cloud requires this parameter if you set replicationSpecs. If you specify a disk size below the minimum (10 GB), this parameter defaults to the minimum disk size value. Storage charge calculations depend on whether you choose the default value or a custom value. The maximum value for disk storage cannot exceed 50 times the maximum RAM for the selected cluster. If you require more storage space, consider upgrading your cluster to a higher tier.
   * @type {number}
   * @memberof AtlasClusterProps
   */
  readonly diskSizeGb?: number;
  /**
   * @description Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster. To enable customer key management for encryption at rest, the cluster replicationSpecs[n].regionConfigs[m].{type}Specs.instanceSize setting must be M10 or higher and "backupEnabled" : false or omitted entirely.
   * @type {atlas.CfnClusterPropsEncryptionAtRestProvider}
   * @memberof AtlasClusterProps
   */
  readonly encryptionAtRestProvider?: atlas.CfnClusterPropsEncryptionAtRestProvider;
  /**
   * @description
   * @type {string}
   * @memberof AtlasClusterProps
   */
  readonly projectId?: string;
  /**
   * @description Collection of key-value pairs between 1 and 255 characters in length that tag and categorize the cluster. The MongoDB Cloud console doesn't display your labels.
   * @type {atlas.CfnClusterPropsLabels[]}
   * @memberof AtlasClusterProps
   */
  readonly labels?: atlas.CfnClusterPropsLabels[];
  /**
   * @description Major MongoDB version of the cluster. MongoDB Cloud deploys the cluster with the latest stable release of the specified version.
   * @type {string}
   * @memberof AtlasClusterProps
   */
  readonly mongoDbMajorVersion?: string;
  /**
   * @description Human-readable label that identifies the advanced cluster.
   * @type {string}
   * @memberof AtlasClusterProps
   */
  readonly name?: string;
  /**
   * @description Flag that indicates whether the cluster is paused or not.
   * @type {boolean}
   * @memberof AtlasClusterProps
   * @default auto-generated
   */
  readonly paused?: boolean;
  /**
   * @description Flag that indicates whether the cluster uses continuous cloud backups.
   * @type {boolean}
   * @memberof AtlasClusterProps
   */
  readonly pitEnabled?: boolean;
  /**
   * @description List of settings that configure your cluster regions. For Global Clusters, each object in the array represents a zone where your clusters nodes deploy. For non-Global replica sets and sharded clusters, this array has one object representing where your clusters nodes deploy.
   * @type {atlas.AdvancedReplicationSpec[]}
   * @memberof AtlasClusterProps
   */
  readonly replicationSpecs?: atlas.AdvancedReplicationSpec[];
  /**
   * @description Root Certificate Authority that MongoDB Cloud cluster uses. MongoDB Cloud supports Internet Security Research Group.
   * @type {string}
   * @memberof AtlasClusterProps
   */
  readonly rootCertType?: string;
  /**
   * @description Method by which the cluster maintains the MongoDB versions. If value is CONTINUOUS, you must not specify mongoDBMajorVersion
   * @type {string}
   * @memberof AtlasClusterProps
   */
  readonly versionReleaseSystem?: string;
  /**
   * @description Flag that indicates whether termination protection is enabled on the cluster. If set to true, MongoDB Cloud won't delete the cluster. If set to false, MongoDB Cloud will delete the cluster.
   * @type {boolean}
   * @memberof AtlasClusterProps
   */
  readonly terminationProtectionEnabled?: boolean;
}
/**
 * @description
 * @export
 * @interface DatabaseUserProps
 */
export interface AtlasDatabaseUserProps {
  /**
   * @description Date and time when MongoDB Cloud deletes the user. This parameter expresses its value in the ISO 8601 timestamp format in UTC and can include the time zone designation. You must specify a future date that falls within one week of making the Application Programming Interface (API) request.
   * @type {string}
   * @memberof DatabaseUserProps
   */
  readonly deleteAfterDate?: string;
  /**
   * @description Human-readable label that indicates whether the new database user authenticates with the Amazon Web Services (AWS) Identity and Access Management (IAM) credentials associated with the user or the user's role. Default value is `NONE`.
   * @type {user.CfnDatabaseUserPropsAwsiamType}
   * @memberof DatabaseUserProps
   */
  readonly awsiamType?: atlas.CfnDatabaseUserPropsAwsiamType;
  /**
   * @description MongoDB database against which the MongoDB database user authenticates. MongoDB database users must provide both a username and authentication database to log into MongoDB.  Default value is `admin`.
   * @type {string}
   * @memberof DatabaseUserProps
   */
  readonly databaseName?: string;
  /**
   * @description List that contains the key-value pairs for tagging and categorizing the MongoDB database user. The labels that you define do not appear in the console.
   * @type {user.LabelDefinition[]}
   * @memberof DatabaseUserProps
   * @default admin
   */
  readonly labels?: atlas.LabelDefinition[];
  /**
   * @description Method by which the provided username is authenticated. Default value is `NONE`.
   * @type {user.CfnDatabaseUserPropsLdapAuthType}
   * @memberof DatabaseUserProps
   */
  readonly ldapAuthType?: atlas.CfnDatabaseUserPropsLdapAuthType;
  /**
   * @description Method that briefs who owns the certificate provided. Default value is `NONE`.
   * @type {user.CfnDatabaseUserPropsX509Type}
   * @memberof DatabaseUserProps
   */
  readonly x509Type?: atlas.CfnDatabaseUserPropsX509Type;
  /**
   * @description The user’s password. This field is not included in the entity returned from the server.
   * @type {string}
   * @memberof DatabaseUserProps
   */
  readonly password?: string;
  /**
   * @description Unique 24-hexadecimal digit string that identifies your Atlas Project.
   * @type {string}
   * @default cdk-pwd
   * @memberof DatabaseUserProps
   */
  readonly projectId?: string;
  /**
   * @description List that provides the pairings of one role with one applicable database.
   * @type {user.RoleDefinition[]}
   * @memberof DatabaseUserProps
   */
  readonly roles?: atlas.RoleDefinition[];
  /**
   * @description List that contains clusters and MongoDB Atlas Data Lakes that this database user can access. If omitted, MongoDB Cloud grants the database user access to all the clusters and MongoDB Atlas Data Lakes in the project.
   * @type {user.ScopeDefinition[]}
   * @memberof DatabaseUserProps
   */
  readonly scopes?: atlas.ScopeDefinition[];
  /**
   * @description Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication. This will be USER_ARN or ROLE_ARN if AWSIAMType is USER or ROLE. Refer https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Database-Users/operation/createDatabaseUser for details.
   * @type {string}
   * @memberof DatabaseUserProps
   * @default cdk-user
   */
  readonly username?: string;
}
/**
 * @description Returns, adds, edits, and removes network access limits to database deployments in MongoDB Cloud.
 * @export
 * @interface IpAccessListProps
 */
export interface AtlasIpAccessListProps {
  /**
   * @description
   * @type {ipAccessList.AccessListDefinition[]}
   * @memberof IpAccessListProps
   */
  readonly accessList: atlas.AccessListDefinition[];
  /**
   * @description Unique 24-hexadecimal digit string that identifies your project.
   * @type {string}
   * @memberof IpAccessListProps
   * @default allow-all
   */
  readonly projectId?: string;
  /**
   * @description Number of documents returned in this response.
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
