// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * The cluster resource provides access to your cluster configurations. The resource lets you create, edit and delete clusters. The resource requires your Project ID.
 *
 * @schema CfnClusterProps
 */
export interface CfnClusterProps {
  /**
   * @schema CfnClusterProps#AdvancedSettings
   */
  readonly advancedSettings?: ProcessArgs;

  /**
   * Flag that indicates whether the cluster can perform backups. If set to true, the cluster can perform backups. You must set this value to true for NVMe clusters. Backup uses Cloud Backups for dedicated clusters and Shared Cluster Backups for tenant clusters. If set to false, the cluster doesn't use backups.
   *
   * @schema CfnClusterProps#BackupEnabled
   */
  readonly backupEnabled?: boolean;

  /**
   * Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster.
   *
   * @schema CfnClusterProps#BiConnector
   */
  readonly biConnector?: CfnClusterPropsBiConnector;

  /**
   * Configuration of nodes that comprise the cluster.
   *
   * @schema CfnClusterProps#ClusterType
   */
  readonly clusterType?: string;

  /**
   * Set of connection strings that your applications use to connect to this cluster. Use the parameters in this object to connect your applications to this cluster. See the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/) reference for further details.
   *
   * @schema CfnClusterProps#ConnectionStrings
   */
  readonly connectionStrings?: ConnectionStrings;

  /**
   * Storage capacity that the host's root volume possesses expressed in gigabytes. Increase this number to add capacity. MongoDB Cloud requires this parameter if you set replicationSpecs. If you specify a disk size below the minimum (10 GB), this parameter defaults to the minimum disk size value. Storage charge calculations depend on whether you choose the default value or a custom value. The maximum value for disk storage cannot exceed 50 times the maximum RAM for the selected cluster. If you require more storage space, consider upgrading your cluster to a higher tier.
   *
   * @schema CfnClusterProps#DiskSizeGB
   */
  readonly diskSizeGb?: number;

  /**
   * Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster. To enable customer key management for encryption at rest, the cluster replicationSpecs[n].regionConfigs[m].{type}Specs.instanceSize setting must be M10 or higher and "backupEnabled" : false or omitted entirely.
   *
   * @schema CfnClusterProps#EncryptionAtRestProvider
   */
  readonly encryptionAtRestProvider?: CfnClusterPropsEncryptionAtRestProvider;

  /**
   * Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used
   *
   * @schema CfnClusterProps#Profile
   */
  readonly profile?: string;

  /**
   * Unique identifier of the project the cluster belongs to.
   *
   * @schema CfnClusterProps#ProjectId
   */
  readonly projectId: string;

  /**
   * Collection of key-value pairs between 1 to 255 characters in length that tag and categorize the cluster. The MongoDB Cloud console doesn't display your labels.
   *
   * @schema CfnClusterProps#Labels
   */
  readonly labels?: CfnClusterPropsLabels[];

  /**
   * Major MongoDB version of the cluster. MongoDB Cloud deploys the cluster with the latest stable release of the specified version.
   *
   * @schema CfnClusterProps#MongoDBMajorVersion
   */
  readonly mongoDbMajorVersion?: string;

  /**
   * Human-readable label that identifies the advanced cluster.
   *
   * @schema CfnClusterProps#Name
   */
  readonly name: string;

  /**
   * Flag that indicates whether the cluster is paused or not.
   *
   * @schema CfnClusterProps#Paused
   */
  readonly paused?: boolean;

  /**
   * Flag that indicates whether the cluster uses continuous cloud backups.
   *
   * @schema CfnClusterProps#PitEnabled
   */
  readonly pitEnabled?: boolean;

  /**
   * List of settings that configure your cluster regions. For Global Clusters, each object in the array represents a zone where your clusters nodes deploy. For non-Global replica sets and sharded clusters, this array has one object representing where your clusters nodes deploy.
   *
   * @schema CfnClusterProps#ReplicationSpecs
   */
  readonly replicationSpecs?: AdvancedReplicationSpec[];

  /**
   * Root Certificate Authority that MongoDB Cloud cluster uses. MongoDB Cloud supports Internet Security Research Group.
   *
   * @schema CfnClusterProps#RootCertType
   */
  readonly rootCertType?: string;

  /**
   * Method by which the cluster maintains the MongoDB versions. If value is CONTINUOUS, you must not specify mongoDBMajorVersion
   *
   * @schema CfnClusterProps#VersionReleaseSystem
   */
  readonly versionReleaseSystem?: string;

  /**
   * Flag that indicates whether termination protection is enabled on the cluster. If set to true, MongoDB Cloud won't delete the cluster. If set to false, MongoDB Cloud will delete the cluster.
   *
   * @schema CfnClusterProps#TerminationProtectionEnabled
   */
  readonly terminationProtectionEnabled?: boolean;

  /**
   * List of settings that configure your cluster regions. For Global Clusters, each object in the array represents a zone where your clusters nodes deploy. For non-Global replica sets and sharded clusters, this array has one object representing where your clusters nodes deploy.
   *
   * @schema CfnClusterProps#Tags
   */
  readonly tags?: Tag[];
}

/**
 * Converts an object of type 'CfnClusterProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnClusterProps(
  obj: CfnClusterProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    AdvancedSettings: toJson_ProcessArgs(obj.advancedSettings),
    BackupEnabled: obj.backupEnabled,
    BiConnector: toJson_CfnClusterPropsBiConnector(obj.biConnector),
    ClusterType: obj.clusterType,
    ConnectionStrings: toJson_ConnectionStrings(obj.connectionStrings),
    DiskSizeGB: obj.diskSizeGb,
    EncryptionAtRestProvider: obj.encryptionAtRestProvider,
    Profile: obj.profile,
    ProjectId: obj.projectId,
    Labels: obj.labels?.map((y) => toJson_CfnClusterPropsLabels(y)),
    MongoDBMajorVersion: obj.mongoDbMajorVersion,
    Name: obj.name,
    Paused: obj.paused,
    PitEnabled: obj.pitEnabled,
    ReplicationSpecs: obj.replicationSpecs?.map((y) =>
      toJson_AdvancedReplicationSpec(y)
    ),
    RootCertType: obj.rootCertType,
    VersionReleaseSystem: obj.versionReleaseSystem,
    TerminationProtectionEnabled: obj.terminationProtectionEnabled,
    Tags: obj.tags?.map((y) => toJson_Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Advanced configuration details to add for one cluster in the specified project.
 *
 * @schema processArgs
 */
export interface ProcessArgs {
  /**
   * Default level of acknowledgment requested from MongoDB for read operations set for this cluster.
   *
   * @schema processArgs#DefaultReadConcern
   */
  readonly defaultReadConcern?: string;

  /**
   * Default level of acknowledgment requested from MongoDB for write operations set for this cluster.
   *
   * @schema processArgs#DefaultWriteConcern
   */
  readonly defaultWriteConcern?: string;

  /**
   * Flag that indicates whether you can insert or update documents where all indexed entries don't exceed 1024 bytes. If you set this to false, mongod writes documents that exceed this limit but doesn't index them.
   *
   * @schema processArgs#FailIndexKeyTooLong
   */
  readonly failIndexKeyTooLong?: boolean;

  /**
   * Flag that indicates whether the cluster allows execution of operations that perform server-side executions of JavaScript.
   *
   * @schema processArgs#JavascriptEnabled
   */
  readonly javascriptEnabled?: boolean;

  /**
   * Minimum Transport Layer Security (TLS) version that the cluster accepts for incoming connections. Clusters using TLS 1.0 or 1.1 should consider setting TLS 1.2 as the minimum TLS protocol version.
   *
   * @schema processArgs#MinimumEnabledTLSProtocol
   */
  readonly minimumEnabledTlsProtocol?: string;

  /**
   * Flag that indicates whether the cluster disables executing any query that requires a collection scan to return results.
   *
   * @schema processArgs#NoTableScan
   */
  readonly noTableScan?: boolean;

  /**
   * Storage limit of cluster's oplog expressed in megabytes. A value of null indicates that the cluster uses the default oplog size that MongoDB Cloud calculates.
   *
   * @schema processArgs#OplogSizeMB
   */
  readonly oplogSizeMb?: number;

  /**
   * Interval in seconds at which the mongosqld process re-samples data to create its relational schema.
   *
   * @schema processArgs#SampleSizeBIConnector
   */
  readonly sampleSizeBiConnector?: number;

  /**
   * Number of documents per database to sample when gathering schema information.
   *
   * @schema processArgs#SampleRefreshIntervalBIConnector
   */
  readonly sampleRefreshIntervalBiConnector?: number;

  /**
   * Minimum retention window for cluster's oplog expressed in hours. A value of null indicates that the cluster uses the default minimum oplog window that MongoDB Cloud calculates.
   *
   * @schema processArgs#OplogMinRetentionHours
   */
  readonly oplogMinRetentionHours?: number;

  /**
   * Lifetime, in seconds, of multi-document transactions. Atlas considers the transactions that exceed this limit as expired and so aborts them through a periodic cleanup process.
   *
   * @schema processArgs#TransactionLifetimeLimitSeconds
   */
  readonly transactionLifetimeLimitSeconds?: number;
}

/**
 * Converts an object of type 'ProcessArgs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProcessArgs(
  obj: ProcessArgs | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    DefaultReadConcern: obj.defaultReadConcern,
    DefaultWriteConcern: obj.defaultWriteConcern,
    FailIndexKeyTooLong: obj.failIndexKeyTooLong,
    JavascriptEnabled: obj.javascriptEnabled,
    MinimumEnabledTLSProtocol: obj.minimumEnabledTlsProtocol,
    NoTableScan: obj.noTableScan,
    OplogSizeMB: obj.oplogSizeMb,
    SampleSizeBIConnector: obj.sampleSizeBiConnector,
    SampleRefreshIntervalBIConnector: obj.sampleRefreshIntervalBiConnector,
    OplogMinRetentionHours: obj.oplogMinRetentionHours,
    TransactionLifetimeLimitSeconds: obj.transactionLifetimeLimitSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster.
 *
 * @schema CfnClusterPropsBiConnector
 */
export interface CfnClusterPropsBiConnector {
  /**
   * Data source node designated for the MongoDB Connector for Business Intelligence on MongoDB Cloud. The MongoDB Connector for Business Intelligence on MongoDB Cloud reads data from the primary, secondary, or analytics node based on your read preferences. Defaults to ANALYTICS node, or SECONDARY if there are no ANALYTICS nodes.
   *
   * @default ANALYTICS node, or SECONDARY if there are no ANALYTICS nodes.
   * @schema CfnClusterPropsBiConnector#ReadPreference
   */
  readonly readPreference?: string;

  /**
   * Flag that indicates whether MongoDB Connector for Business Intelligence is enabled on the specified cluster.
   *
   * @schema CfnClusterPropsBiConnector#Enabled
   */
  readonly enabled?: boolean;
}

/**
 * Converts an object of type 'CfnClusterPropsBiConnector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnClusterPropsBiConnector(
  obj: CfnClusterPropsBiConnector | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    ReadPreference: obj.readPreference,
    Enabled: obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Collection of Uniform Resource Locators that point to the MongoDB database.
 *
 * @schema connectionStrings
 */
export interface ConnectionStrings {
  /**
   * Public connection string that you can use to connect to this cluster. This connection string uses the mongodb:// protocol.
   *
   * @schema connectionStrings#Standard
   */
  readonly standard?: string;

  /**
   * Public connection string that you can use to connect to this cluster. This connection string uses the mongodb+srv:// protocol.
   *
   * @schema connectionStrings#StandardSrv
   */
  readonly standardSrv?: string;

  /**
   * Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster. This connection string uses the mongodb+srv:// protocol. The resource returns this parameter once someone creates a network peering connection to this cluster. This protocol tells the application to look up the host seed list in the Domain Name System (DNS). This list synchronizes with the nodes in a cluster. If the connection string uses this Uniform Resource Identifier (URI) format, you don't need to append the seed list or change the URI if the nodes change. Use this URI format if your driver supports it. If it doesn't, use connectionStrings.private. For Amazon Web Services (AWS) clusters, this resource returns this parameter only if you enable custom DNS.
   *
   * @schema connectionStrings#Private
   */
  readonly private?: string;

  /**
   * Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster. This connection string uses the mongodb+srv:// protocol. The resource returns this parameter when someone creates a network peering connection to this cluster. This protocol tells the application to look up the host seed list in the Domain Name System (DNS). This list synchronizes with the nodes in a cluster. If the connection string uses this Uniform Resource Identifier (URI) format, you don't need to append the seed list or change the Uniform Resource Identifier (URI) if the nodes change. Use this Uniform Resource Identifier (URI) format if your driver supports it. If it doesn't, use connectionStrings.private. For Amazon Web Services (AWS) clusters, this parameter returns only if you enable custom DNS.
   *
   * @schema connectionStrings#PrivateSrv
   */
  readonly privateSrv?: string;

  /**
   * Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink. Each key identifies an Amazon Web Services (AWS) interface endpoint. Each value identifies the related mongodb:// connection string that you use to connect to MongoDB Cloud through the interface endpoint that the key names.
   *
   * @schema connectionStrings#PrivateEndpoints
   */
  readonly privateEndpoints?: string[];

  /**
   * Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink. Each key identifies an Amazon Web Services (AWS) interface endpoint. Each value identifies the related mongodb:// connection string that you use to connect to Atlas through the interface endpoint that the key names.
   *
   * @schema connectionStrings#PrivateEndpointsSrv
   */
  readonly privateEndpointsSrv?: string[];

  /**
   * Private endpoint-aware connection string optimized for sharded clusters that uses the `mongodb+srv://` protocol to connect to MongoDB Cloud through a private endpoint. If the connection string uses this Uniform Resource Identifier (URI) format, you don't need to change the Uniform Resource Identifier (URI) if the nodes change. Use this Uniform Resource Identifier (URI) format if your application and Atlas cluster supports it. If it doesn't, use and consult the documentation for connectionStrings.privateEndpoint[n].srvConnectionString.
   *
   * @schema connectionStrings#SRVShardOptimizedConnectionString
   */
  readonly srvShardOptimizedConnectionString?: string[];
}

/**
 * Converts an object of type 'ConnectionStrings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectionStrings(
  obj: ConnectionStrings | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Standard: obj.standard,
    StandardSrv: obj.standardSrv,
    Private: obj.private,
    PrivateSrv: obj.privateSrv,
    PrivateEndpoints: obj.privateEndpoints?.map((y) => y),
    PrivateEndpointsSrv: obj.privateEndpointsSrv?.map((y) => y),
    SRVShardOptimizedConnectionString:
      obj.srvShardOptimizedConnectionString?.map((y) => y),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster. To enable customer key management for encryption at rest, the cluster replicationSpecs[n].regionConfigs[m].{type}Specs.instanceSize setting must be M10 or higher and "backupEnabled" : false or omitted entirely.
 *
 * @schema CfnClusterPropsEncryptionAtRestProvider
 */
export enum CfnClusterPropsEncryptionAtRestProvider {
  /** AWS */
  AWS = "AWS",
  /** GCP */
  GCP = "GCP",
  /** AZURE */
  AZURE = "AZURE",
  /** NONE */
  NONE = "NONE",
}

/**
 * @schema CfnClusterPropsLabels
 */
export interface CfnClusterPropsLabels {
  /**
   * @schema CfnClusterPropsLabels#Key
   */
  readonly key?: string;

  /**
   * @schema CfnClusterPropsLabels#Value
   */
  readonly value?: string;
}

/**
 * Converts an object of type 'CfnClusterPropsLabels' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnClusterPropsLabels(
  obj: CfnClusterPropsLabels | undefined
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
 * List of settings that configure your cluster regions. For Global Clusters, each object in the array represents a zone where your clusters nodes deploy. For non-Global replica sets and sharded clusters, this array has one object representing where your clusters nodes deploy.
 *
 * @schema advancedReplicationSpec
 */
export interface AdvancedReplicationSpec {
  /**
   * Unique 24-hexadecimal digit string that identifies the replication object for a zone in a Multi-Cloud Cluster. If you include existing zones in the request, you must specify this parameter. If you add a new zone to an existing Multi-Cloud Cluster, you may specify this parameter. The request deletes any existing zones in the Multi-Cloud Cluster that you exclude from the request.
   *
   * @schema advancedReplicationSpec#ID
   */
  readonly id?: string;

  /**
   * Positive integer that specifies the number of shards to deploy in each specified zone. If you set this value to 1 and "clusterType" : "SHARDED", MongoDB Cloud deploys a single-shard sharded cluster. Don't create a sharded cluster with a single shard for production environments. Single-shard sharded clusters don't provide the same benefits as multi-shard configurations.
   *
   * @schema advancedReplicationSpec#NumShards
   */
  readonly numShards?: number;

  /**
   * Hardware specifications for nodes set for a given region. Each regionConfigs object describes the region's priority in elections and the number and type of MongoDB nodes that MongoDB Cloud deploys to the region. Each regionConfigs object must have either an analyticsSpecs object, electableSpecs object, or readOnlySpecs object. Tenant clusters only require electableSpecs. Dedicated clusters can specify any of these specifications, but must have at least one electableSpecs object within a replicationSpec. Every hardware specification must use the same instanceSize.
   *
   * Example:
   *
   * If you set "replicationSpecs[n].regionConfigs[m].analyticsSpecs.instanceSize" : "M30", set "replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M30"if you have electable nodes and"replicationSpecs[n].regionConfigs[m].readOnlySpecs.instanceSize" : "M30" if you have read-only nodes.",
   *
   * @schema advancedReplicationSpec#AdvancedRegionConfigs
   */
  readonly advancedRegionConfigs?: AdvancedRegionConfig[];

  /**
   * Human-readable label that identifies the zone in a Global Cluster. Provide this value only if "clusterType" : "GEOSHARDED".
   *
   * @schema advancedReplicationSpec#ZoneName
   */
  readonly zoneName?: string;
}

/**
 * Converts an object of type 'AdvancedReplicationSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AdvancedReplicationSpec(
  obj: AdvancedReplicationSpec | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    ID: obj.id,
    NumShards: obj.numShards,
    AdvancedRegionConfigs: obj.advancedRegionConfigs?.map((y) =>
      toJson_AdvancedRegionConfig(y)
    ),
    ZoneName: obj.zoneName,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Advanced configuration details to add for one cluster in the specified project.
 *
 * @schema tag
 */
export interface Tag {
  /**
   * Constant that defines the set of the tag. For example, environment in the environment : production tag.
   *
   * @schema tag#Key
   */
  readonly key?: string;

  /**
   * Variable that belongs to the set of the tag. For example, production in the environment : production tag.
   *
   * @schema tag#Value
   */
  readonly value?: string;
}

/**
 * Converts an object of type 'Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Tag(
  obj: Tag | undefined
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
 * Hardware specifications for nodes set for a given region. Each regionConfigs object describes the region's priority in elections and the number and type of MongoDB nodes that MongoDB Cloud deploys to the region. Each regionConfigs object must have either an analyticsSpecs object, electableSpecs object, or readOnlySpecs object. Tenant clusters only require electableSpecs. Dedicated clusters can specify any of these specifications, but must have at least one electableSpecs object within a replicationSpec. Every hardware specification must use the same instanceSize.
 *
 * Example:
 *
 * If you set "replicationSpecs[n].regionConfigs[m].analyticsSpecs.instanceSize" : "M30", set "replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M30"if you have electable nodes and"replicationSpecs[n].regionConfigs[m].readOnlySpecs.instanceSize" : "M30" if you have read-only nodes.",
 *
 * @schema advancedRegionConfig
 */
export interface AdvancedRegionConfig {
  /**
   * @schema advancedRegionConfig#AnalyticsAutoScaling
   */
  readonly analyticsAutoScaling?: AdvancedAutoScaling;

  /**
   * @schema advancedRegionConfig#AutoScaling
   */
  readonly autoScaling?: AdvancedAutoScaling;

  /**
   * @schema advancedRegionConfig#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema advancedRegionConfig#BackingProviderName
   */
  readonly backingProviderName?: string;

  /**
   * @schema advancedRegionConfig#ProviderName
   */
  readonly providerName?: AdvancedRegionConfigProviderName;

  /**
   * @schema advancedRegionConfig#AnalyticsSpecs
   */
  readonly analyticsSpecs?: Specs;

  /**
   * @schema advancedRegionConfig#ElectableSpecs
   */
  readonly electableSpecs?: Specs;

  /**
   * @schema advancedRegionConfig#Priority
   */
  readonly priority?: number;

  /**
   * @schema advancedRegionConfig#ReadOnlySpecs
   */
  readonly readOnlySpecs?: Specs;
}

/**
 * Converts an object of type 'AdvancedRegionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AdvancedRegionConfig(
  obj: AdvancedRegionConfig | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    AnalyticsAutoScaling: toJson_AdvancedAutoScaling(obj.analyticsAutoScaling),
    AutoScaling: toJson_AdvancedAutoScaling(obj.autoScaling),
    RegionName: obj.regionName,
    BackingProviderName: obj.backingProviderName,
    ProviderName: obj.providerName,
    AnalyticsSpecs: toJson_Specs(obj.analyticsSpecs),
    ElectableSpecs: toJson_Specs(obj.electableSpecs),
    Priority: obj.priority,
    ReadOnlySpecs: toJson_Specs(obj.readOnlySpecs),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * AWS Automatic Cluster Scaling
 *
 * @schema advancedAutoScaling
 */
export interface AdvancedAutoScaling {
  /**
   * @schema advancedAutoScaling#DiskGB
   */
  readonly diskGb?: DiskGb;

  /**
   * @schema advancedAutoScaling#Compute
   */
  readonly compute?: Compute;
}

/**
 * Converts an object of type 'AdvancedAutoScaling' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AdvancedAutoScaling(
  obj: AdvancedAutoScaling | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    DiskGB: toJson_DiskGb(obj.diskGb),
    Compute: toJson_Compute(obj.compute),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AdvancedRegionConfigProviderName
 */
export enum AdvancedRegionConfigProviderName {
  /** AWS */
  AWS = "AWS",
  /** GCP */
  GCP = "GCP",
  /** AZURE */
  AZURE = "AZURE",
  /** TENANT */
  TENANT = "TENANT",
}

/**
 * @schema specs
 */
export interface Specs {
  /**
   * Target throughput desired for storage attached to your AWS-provisioned cluster. Only change this parameter if you:
   *
   * set "replicationSpecs[n].regionConfigs[m].providerName" : "AWS".
   * set "replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M30" or greater not including Mxx_NVME tiers.
   * The maximum input/output operations per second (IOPS) depend on the selected .instanceSize and .diskSizeGB. This parameter defaults to the cluster tier's standard IOPS value. Changing this value impacts cluster cost. MongoDB Cloud enforces minimum ratios of storage capacity to system memory for given cluster tiers. This keeps cluster performance consistent with large datasets.
   *
   * Instance sizes M10 to M40 have a ratio of disk capacity to system memory of 60:1.
   * Instance sizes greater than M40 have a ratio of 120:1.
   *
   * @schema specs#DiskIOPS
   */
  readonly diskIops?: string;

  /**
   * Type of storage you want to attach to your AWS-provisioned cluster.
   *
   * STANDARD volume types can't exceed the default input/output operations per second (IOPS) rate for the selected volume size.
   *
   * PROVISIONED volume types must fall within the allowable IOPS range for the selected volume size."
   *
   * @schema specs#EbsVolumeType
   */
  readonly ebsVolumeType?: string;

  /**
   * Hardware specification for the instance sizes in this region. Each instance size has a default storage and memory capacity. The instance size you select applies to all the data-bearing hosts in your instance size. If you deploy a Global Cluster, you must choose a instance size of M30 or greater.
   *
   * @schema specs#InstanceSize
   */
  readonly instanceSize?: string;

  /**
   * Number of read-only nodes for MongoDB Cloud deploys to the region. Read-only nodes can never become the primary, but can enable local reads.
   *
   * @schema specs#NodeCount
   */
  readonly nodeCount?: number;
}

/**
 * Converts an object of type 'Specs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Specs(
  obj: Specs | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    DiskIOPS: obj.diskIops,
    EbsVolumeType: obj.ebsVolumeType,
    InstanceSize: obj.instanceSize,
    NodeCount: obj.nodeCount,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Automatic cluster storage settings that apply to this cluster.
 *
 * @schema diskGB
 */
export interface DiskGb {
  /**
   * Flag that indicates whether this cluster enables disk auto-scaling. The maximum memory allowed for the selected cluster tier and the oplog size can limit storage auto-scaling.
   *
   * @schema diskGB#Enabled
   */
  readonly enabled?: boolean;
}

/**
 * Converts an object of type 'DiskGb' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiskGb(
  obj: DiskGb | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Enabled: obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Automatic Compute Scaling
 *
 * @schema compute
 */
export interface Compute {
  /**
   * Flag that indicates whether someone enabled instance size auto-scaling.
   *
   * Set to true to enable instance size auto-scaling. If enabled, you must specify a value for replicationSpecs[n].regionConfigs[m].autoScaling.compute.maxInstanceSize.
   * Set to false to disable instance size automatic scaling.
   *
   * @schema compute#Enabled
   */
  readonly enabled?: boolean;

  /**
   * Flag that indicates whether the instance size may scale down. MongoDB Cloud requires this parameter if "replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true. If you enable this option, specify a value for replicationSpecs[n].regionConfigs[m].autoScaling.compute.minInstanceSize.
   *
   * @schema compute#ScaleDownEnabled
   */
  readonly scaleDownEnabled?: boolean;

  /**
   * Minimum instance size to which your cluster can automatically scale. MongoDB Cloud requires this parameter if "replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true.
   *
   * @schema compute#MinInstanceSize
   */
  readonly minInstanceSize?: string;

  /**
   * Maximum instance size to which your cluster can automatically scale. MongoDB Cloud requires this parameter if "replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true.
   *
   * @schema compute#MaxInstanceSize
   */
  readonly maxInstanceSize?: string;
}

/**
 * Converts an object of type 'Compute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Compute(
  obj: Compute | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Enabled: obj.enabled,
    ScaleDownEnabled: obj.scaleDownEnabled,
    MinInstanceSize: obj.minInstanceSize,
    MaxInstanceSize: obj.maxInstanceSize,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::Cluster`
 *
 * @cloudformationResource MongoDB::Atlas::Cluster
 * @stability external
 */
export class CfnCluster extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME = "MongoDB::Atlas::Cluster";

  /**
   * Resource props.
   */
  public readonly props: CfnClusterProps;

  /**
   * Attribute `MongoDB::Atlas::Cluster.StateName`
   */
  public readonly attrStateName: string;
  /**
   * Attribute `MongoDB::Atlas::Cluster.MongoDBVersion`
   */
  public readonly attrMongoDBVersion: string;
  /**
   * Attribute `MongoDB::Atlas::Cluster.CreatedDate`
   */
  public readonly attrCreatedDate: string;
  /**
   * Attribute `MongoDB::Atlas::Cluster.Id`
   */
  public readonly attrId: string;

  /**
   * Attribute `MongoDB::Atlas::Cluster.ConnectionStrings`
   */
  public readonly connectionStrings: ConnectionStrings; <<-- review this one

  /**
   * Create a new `MongoDB::Atlas::Cluster`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnClusterProps) {
    super(scope, id, {
      type: CfnCluster.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnClusterProps(props)!,
    });

    this.props = props;

    const connStringsStandard = cdk.Token.asString(
      this.getAtt("ConnectionStrings.Standard")
    );
    const connStringsStandardSrv = cdk.Token.asString(
      this.getAtt("ConnectionStrings.StandardSrv")
    );
    const connStringsPrivate = cdk.Token.asString(
      this.getAtt("ConnectionStrings.Private")
    );
    const connStringsPrivateSrv = cdk.Token.asString(
      this.getAtt("ConnectionStrings.PrivateSrv")
    );

    const privateEndpoints = cdk.Token.asList(
      this.getAtt("ConnectionStrings.PrivateEndpoints")
    );

    const privateEndpointsSrv = cdk.Token.asList(
      this.getAtt("ConnectionStrings.PrivateEndpointsSrv")
    );

    const srvShardOptimizedConnectionString = cdk.Token.asList(
      this.getAtt("ConnectionStrings.SrvShardOptimizedConnectionString")
    );

    this.attrStateName = cdk.Token.asString(this.getAtt("StateName"));
    this.attrMongoDBVersion = cdk.Token.asString(this.getAtt("MongoDBVersion"));
    this.attrCreatedDate = cdk.Token.asString(this.getAtt("CreatedDate"));
    this.attrId = cdk.Token.asString(this.getAtt("Id"));
    this.connectionStrings = {
      standard: connStringsStandard,
      standardSrv: connStringsStandardSrv,
      private: connStringsPrivate,
      privateSrv: connStringsPrivateSrv,
      privateEndpoints: privateEndpoints,
      privateEndpointsSrv: privateEndpointsSrv,
      srvShardOptimizedConnectionString: srvShardOptimizedConnectionString,
    };
  }
}
