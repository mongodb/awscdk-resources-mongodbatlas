// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Returns, adds, edits, and removes Federated Database Instances.
 *
 * @schema CfnFederatedDatabaseInstanceProps
 */
export interface CfnFederatedDatabaseInstanceProps {
  /**
   * Cloud provider linked to this data lake.
   *
   * @schema CfnFederatedDatabaseInstanceProps#CloudProviderConfig
   */
  readonly cloudProviderConfig?: CloudProviderConfig;

  /**
   * Information about the cloud provider region to which the data lake routes client connections. MongoDB Cloud supports AWS only.
   *
   * @schema CfnFederatedDatabaseInstanceProps#DataProcessRegion
   */
  readonly dataProcessRegion?: DataProcessRegion;

  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnFederatedDatabaseInstanceProps#ProjectId
   */
  readonly projectId: string;

  /**
   * Human-readable label that identifies the data federation.
   *
   * @schema CfnFederatedDatabaseInstanceProps#TenantName
   */
  readonly tenantName: string;

  /**
   * Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check.
   *
   * @schema CfnFederatedDatabaseInstanceProps#SkipRoleValidation
   */
  readonly skipRoleValidation?: boolean;

  /**
   * Configuration information for each data store and its mapping to MongoDB Cloud databases.
   *
   * @schema CfnFederatedDatabaseInstanceProps#Storage
   */
  readonly storage?: Storage;

  /**
   * The profile is defined in AWS Secret manager. See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).
   *
   * @schema CfnFederatedDatabaseInstanceProps#Profile
   */
  readonly profile?: string;
}

/**
 * Converts an object of type 'CfnFederatedDatabaseInstanceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnFederatedDatabaseInstanceProps(
  obj: CfnFederatedDatabaseInstanceProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    CloudProviderConfig: toJson_CloudProviderConfig(obj.cloudProviderConfig),
    DataProcessRegion: toJson_DataProcessRegion(obj.dataProcessRegion),
    ProjectId: obj.projectId,
    TenantName: obj.tenantName,
    SkipRoleValidation: obj.skipRoleValidation,
    Storage: toJson_Storage(obj.storage),
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
 * Cloud provider linked to this data lake..
 *
 * @schema CloudProviderConfig
 */
export interface CloudProviderConfig {
  /**
   * Unique identifier of the role that the data lake can use to access the data stores.Required if specifying cloudProviderConfig.
   *
   * @schema CloudProviderConfig#ExternalId
   */
  readonly externalId?: string;

  /**
   * Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that the data lake assumes when accessing data stores.
   *
   * @schema CloudProviderConfig#IamAssumedRoleARN
   */
  readonly iamAssumedRoleArn?: string;

  /**
   * Amazon Resource Name (ARN) of the user that the data lake assumes when accessing data stores.
   *
   * @schema CloudProviderConfig#IamUserARN
   */
  readonly iamUserArn?: string;

  /**
   * Unique identifier of the role that the data lake can use to access the data stores.Required if specifying cloudProviderConfig.
   *
   * @schema CloudProviderConfig#RoleId
   */
  readonly roleId?: string;

  /**
   * Name of the S3 data bucket that the provided role ID is authorized to access.Required if specifying cloudProviderConfig.
   *
   * @schema CloudProviderConfig#TestS3Bucket
   */
  readonly testS3Bucket?: string;
}

/**
 * Converts an object of type 'CloudProviderConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudProviderConfig(
  obj: CloudProviderConfig | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    ExternalId: obj.externalId,
    IamAssumedRoleARN: obj.iamAssumedRoleArn,
    IamUserARN: obj.iamUserArn,
    RoleId: obj.roleId,
    TestS3Bucket: obj.testS3Bucket,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Information about the cloud provider region to which the data lake routes client connections. MongoDB Cloud supports AWS only.
 *
 * @schema DataProcessRegion
 */
export interface DataProcessRegion {
  /**
   * Name of the cloud service that hosts the data lake's data stores.
   *
   * @schema DataProcessRegion#CloudProvider
   */
  readonly cloudProvider?: string;

  /**
   * Name of the region to which the data lake routes client connections.
   *
   * @schema DataProcessRegion#Region
   */
  readonly region: string;
}

/**
 * Converts an object of type 'DataProcessRegion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataProcessRegion(
  obj: DataProcessRegion | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    CloudProvider: obj.cloudProvider,
    Region: obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Configuration information for each data store and its mapping to MongoDB Cloud databases.
 *
 * @schema Storage
 */
export interface Storage {
  /**
   * Array that contains the queryable databases and collections for this data lake.
   *
   * @schema Storage#Databases
   */
  readonly databases?: Database[];

  /**
   * Array that contains the data stores for the data lake.
   *
   * @schema Storage#Stores
   */
  readonly stores?: Store[];
}

/**
 * Converts an object of type 'Storage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Storage(
  obj: Storage | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Databases: obj.databases?.map((y) => toJson_Database(y)),
    Stores: obj.stores?.map((y) => toJson_Store(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Database
 */
export interface Database {
  /**
   * Array of collections and data sources that map to a stores data store.
   *
   * @schema Database#Collections
   */
  readonly collections?: Collection[];

  /**
   * Maximum number of wildcard collections in the database. This only applies to S3 data sources.
   *
   * @schema Database#MaxWildcardCollections
   */
  readonly maxWildcardCollections?: string;

  /**
   * Human-readable label that identifies the database to which the data lake maps data.
   *
   * @schema Database#Name
   */
  readonly name?: string;

  /**
   * Array of aggregation pipelines that apply to the collection. This only applies to S3 data sources.
   *
   * @schema Database#Views
   */
  readonly views?: View[];
}

/**
 * Converts an object of type 'Database' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Database(
  obj: Database | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Collections: obj.collections?.map((y) => toJson_Collection(y)),
    MaxWildcardCollections: obj.maxWildcardCollections,
    Name: obj.name,
    Views: obj.views?.map((y) => toJson_View(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Array that contains the data stores for the data lake.
 *
 * @schema Store
 */
export interface Store {
  /**
   * Human-readable label that identifies the data store. The databases.[n].collections.[n].dataSources.[n].storeName field references this values as part of the mapping configuration. To use MongoDB Cloud as a data store, the data lake requires a serverless instance or an M10 or higher cluster.
   *
   * @schema Store#Name
   */
  readonly name?: string;

  /**
   * Allowed values atlas, http, online_archive, s3 and DataLakeAzureBlobStore.
   *
   * @schema Store#Provider
   */
  readonly provider?: string;

  /**
   * Human-readable label of the MongoDB Cloud cluster on which the store is based.
   *
   * @schema Store#ClusterName
   */
  readonly clusterName?: string;

  /**
   * Unique 24-hexadecimal digit string that identifies the project.Regex ^([a-f0-9]{24})$ .
   *
   * @schema Store#ProjectId
   */
  readonly projectId?: string;

  /**
   * MongoDB Cloud cluster read preference, which describes how to route read requests to the cluster.
   *
   * @schema Store#ReadPreference
   */
  readonly readPreference?: ReadPreference;
}

/**
 * Converts an object of type 'Store' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Store(
  obj: Store | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Name: obj.name,
    Provider: obj.provider,
    ClusterName: obj.clusterName,
    ProjectId: obj.projectId,
    ReadPreference: toJson_ReadPreference(obj.readPreference),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Array of collections and data sources that map to a stores data store.
 *
 * @schema Collection
 */
export interface Collection {
  /**
   * Array that contains the data stores that map to a collection for this data lake.
   *
   * @schema Collection#DataSources
   */
  readonly dataSources?: DataSource[];

  /**
   * @schema Collection#Name
   */
  readonly name?: string;
}

/**
 * Converts an object of type 'Collection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Collection(
  obj: Collection | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    DataSources: obj.dataSources?.map((y) => toJson_DataSource(y)),
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
 * @schema View
 */
export interface View {
  /**
   * Human-readable label that identifies the view, which corresponds to an aggregation pipeline on a collection.
   *
   * @schema View#Name
   */
  readonly name?: string;

  /**
   * Aggregation pipeline stages to apply to the source collection.
   *
   * @schema View#Pipeline
   */
  readonly pipeline?: string;

  /**
   * Human-readable label that identifies the source collection for the view.
   *
   * @schema View#Source
   */
  readonly source?: string;
}

/**
 * Converts an object of type 'View' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_View(
  obj: View | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Name: obj.name,
    Pipeline: obj.pipeline,
    Source: obj.source,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ReadPreference
 */
export interface ReadPreference {
  /**
   * "primary" "primaryPreferred" "secondary" "secondaryPreferred" "nearest"
   * Read preference mode that specifies to which replica set member to route the read requests.
   *
   * @schema ReadPreference#Mode
   */
  readonly mode?: string;

  /**
   * Maximum replication lag, or staleness, for reads from secondaries.
   *
   * @schema ReadPreference#MaxStalenessSeconds
   */
  readonly maxStalenessSeconds?: string;

  /**
   * List that contains tag sets or tag specification documents. If specified, Atlas Data Lake routes read requests to replica set member or members that are associated with the specified tags.
   *
   * @schema ReadPreference#TagSets
   */
  readonly tagSets?: TagSet[][];
}

/**
 * Converts an object of type 'ReadPreference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ReadPreference(
  obj: ReadPreference | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Mode: obj.mode,
    MaxStalenessSeconds: obj.maxStalenessSeconds,
    TagSets: obj.tagSets?.map((y) => y?.map((x) => toJson_TagSet(x))),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSource
 */
export interface DataSource {
  /**
   * Flag that validates the scheme in the specified URLs. If true, allows insecure HTTP scheme, doesn't verify the server's certificate chain and hostname, and accepts any certificate with any hostname presented by the server. If false, allows secure HTTPS scheme only.
   *
   * @schema DataSource#AllowInsecure
   */
  readonly allowInsecure?: boolean;

  /**
   * Human-readable label that identifies the collection in the database. For creating a wildcard (*) collection, you must omit this parameter.
   *
   * @schema DataSource#Collection
   */
  readonly collection?: string;

  /**
   * Regex pattern to use for creating the wildcard (*) collection. To learn more about the regex syntax, see Go programming language.( https://pkg.go.dev/regexp ).
   *
   * @schema DataSource#CollectionRegex
   */
  readonly collectionRegex?: string;

  /**
   * Human-readable label that identifies the database, which contains the collection in the cluster. You must omit this parameter to generate wildcard (*) collections for dynamically generated databases.
   *
   * @schema DataSource#Database
   */
  readonly database?: string;

  /**
   * Regex pattern to use for creating the wildcard (*) collection. To learn more about the regex syntax, see Go programming language.( https://pkg.go.dev/regexp ).
   *
   * @schema DataSource#DatabaseRegex
   */
  readonly databaseRegex?: string;

  /**
   * File format that MongoDB Cloud uses if it encounters a file without a file extension while searching storeName.Enum: ".avro" ".avro.bz2" ".avro.gz" ".bson" ".bson.bz2" ".bson.gz" ".bsonx" ".csv" ".csv.bz2" ".csv.gz" ".json" ".json.bz2" ".json.gz" ".orc" ".parquet" ".tsv" ".tsv.bz2" ".tsv.gz"
   *
   * @schema DataSource#DefaultFormat
   */
  readonly defaultFormat?: string;

  /**
   * File path that controls how MongoDB Cloud searches for and parses files in the storeName before mapping them to a collection.Specify / to capture all files and folders from the prefix path.
   *
   * @schema DataSource#Path
   */
  readonly path?: string;

  /**
   * Name for the field that includes the provenance of the documents in the results. MongoDB Cloud returns different fields in the results for each supported provider.
   *
   * @schema DataSource#ProvenanceFieldName
   */
  readonly provenanceFieldName?: string;

  /**
   * Human-readable label that identifies the data store that MongoDB Cloud maps to the collection.
   *
   * @schema DataSource#StoreName
   */
  readonly storeName?: string;

  /**
   * URLs of the publicly accessible data files. You can't specify URLs that require authentication. Atlas Data Lake creates a partition for each URL. If empty or omitted, Data Lake uses the URLs from the store specified in the dataSources.storeName parameter.
   *
   * @schema DataSource#Urls
   */
  readonly urls?: string[];
}

/**
 * Converts an object of type 'DataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSource(
  obj: DataSource | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    AllowInsecure: obj.allowInsecure,
    Collection: obj.collection,
    CollectionRegex: obj.collectionRegex,
    Database: obj.database,
    DatabaseRegex: obj.databaseRegex,
    DefaultFormat: obj.defaultFormat,
    Path: obj.path,
    ProvenanceFieldName: obj.provenanceFieldName,
    StoreName: obj.storeName,
    Urls: obj.urls?.map((y) => y),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TagSet
 */
export interface TagSet {
  /**
   * Human-readable label of the tag.
   *
   * @schema TagSet#Name
   */
  readonly name?: string;

  /**
   * Human-readable label of the tag.
   *
   * @schema TagSet#Value
   */
  readonly value?: string;
}

/**
 * Converts an object of type 'TagSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TagSet(
  obj: TagSet | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Name: obj.name,
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
 * A CloudFormation `MongoDB::Atlas::FederatedDatabaseInstance`
 *
 * @cloudformationResource MongoDB::Atlas::FederatedDatabaseInstance
 * @stability external
 */
export class CfnFederatedDatabaseInstance extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::FederatedDatabaseInstance";

  /**
   * Resource props.
   */
  public readonly props: CfnFederatedDatabaseInstanceProps;

  /**
   * Attribute `MongoDB::Atlas::FederatedDatabaseInstance.HostNames`
   */
  public readonly attrHostNames: string[];
  /**
   * Attribute `MongoDB::Atlas::FederatedDatabaseInstance.State`
   */
  public readonly attrState: string;

  /**
   * Create a new `MongoDB::Atlas::FederatedDatabaseInstance`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnFederatedDatabaseInstanceProps
  ) {
    super(scope, id, {
      type: CfnFederatedDatabaseInstance.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnFederatedDatabaseInstanceProps(props)!,
    });

    this.props = props;

    this.attrHostNames = cdk.Token.asList(this.getAtt("HostNames"));
    this.attrState = cdk.Token.asString(this.getAtt("State"));
  }
}
