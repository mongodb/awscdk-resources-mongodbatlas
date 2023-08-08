import { Resource, ResourceProps } from "aws-cdk-lib";
// import { CfnCluster, ConnectionStrings } from "awscdk-resources-mongodbatlas";
import { Construct } from "constructs";
import * as atlas from "../../index";

export interface ClusterOptions {
  /**
   * Advanced configuration details to add for one cluster in the specified project.
   */
  readonly advancedSettings?: atlas.ProcessArgs;
  /**
   * Flag that indicates whether the cluster can perform backups. If set to true, the cluster can perform backups.
   * You must set this value to true for NVMe clusters. Backup uses Cloud Backups for dedicated clusters and Shared Cluster
   * Backups for tenant clusters. If set to false, the cluster doesn't use backups.
   */
  readonly backupEnabled?: boolean;
  /**
   * Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster.
   */
  readonly biConnector?: atlas.CfnClusterPropsBiConnector;
  /**
   * Configuration of nodes that comprise the cluster. Atlas accepts: `REPLICASET`, `SHARDED`, `GEOSHARDED`.
   * @default ClusterType.REPLICASET
   */
  readonly clusterType?: ClusterType;
  /**
   * Set of connection strings that your applications use to connect to this cluster. Use the parameters
   * in this object to connect your applications to this cluster.
   * See the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/) reference for further details.
   * @default REPLICASET
   */
  readonly connectionStrings?: atlas.ConnectionStrings;
  /**
   * Storage capacity that the host's root volume possesses expressed in gigabytes. Increase this number to add capacity.
   * MongoDB Cloud requires this parameter if you set replicationSpecs. If you specify a disk size below the minimum (10 GB),
   * this parameter defaults to the minimum disk size value. Storage charge calculations depend on whether you choose the
   * default value or a custom value. The maximum value for disk storage cannot exceed 50 times the maximum RAM for the selected cluster.
   * If you require more storage space, consider upgrading your cluster to a higher tier.
   */
  readonly diskSizeGb?: number;
  /**
   * Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest
   * for the cluster. To enable customer key management for encryption at rest, the cluster replicationSpecs[n].regionConfigs[m].{type}Specs.instanceSize
   * setting must be M10 or higher and "backupEnabled" : false or omitted entirely.
   */
  readonly encryptionAtRestProvider?: atlas.CfnClusterPropsEncryptionAtRestProvider;
  /**
   * The project ID.
   */
  // readonly projectId: string;
  /**
   * Collection of key-value pairs between 1 and 255 characters in length that tag and categorize the cluster.
   * The MongoDB Cloud console doesn't display your labels.
   */
  readonly labels?: atlas.CfnClusterPropsLabels[];
  /**
   * Major MongoDB version of the cluster. MongoDB Cloud deploys the cluster with the latest stable release of the specified
   * version.
   */
  readonly mongoDbMajorVersion?: string;
  /**
   * Human-readable label that identifies the advanced cluster.
   * @default - auto-generated.
   */
  readonly clusterName?: string;
  /**
   * Flag that indicates whether the cluster is paused or not.
   * @default auto-generated
   */
  readonly paused?: boolean;
  /**
   * Flag that indicates whether the cluster uses continuous cloud backups.
   */
  readonly pitEnabled?: boolean;
  /**
   * List of settings that configure your cluster regions. For Global Clusters, each object in the array represents a zone
   * where your clusters nodes deploy. For non-Global replica sets and sharded clusters, this array has one object representing
   * where your clusters nodes deploy.
   */
  readonly replicationSpecs?: atlas.AdvancedReplicationSpec[];
  /**
   * Root Certificate Authority that MongoDB Cloud cluster uses. MongoDB Cloud supports Internet Security Research Group.
   */
  readonly rootCertType?: string;
  /**
   * Method by which the cluster maintains the MongoDB versions. If value is CONTINUOUS, you must not specify
   * mongoDBMajorVersion
   */
  readonly versionReleaseSystem?: string;
  /**
   * Flag that indicates whether termination protection is enabled on the cluster. If set to true, MongoDB Cloud won't delete
   * the cluster. If set to false, MongoDB Cloud will delete the cluster.
   */
  readonly terminationProtectionEnabled?: boolean;
}

export enum ClusterType {
  REPLICASET = "REPLICASET",
  SHARDED = "SHARDED",
  GEOSHARDED = "GEOSHARDED",
}

export interface ICluster {
  readonly mongoDBVersion?: string;
  readonly clusterId: string;
  readonly createdDate?: string;
  readonly stateName?: string;
  readonly clusterName: string;
}

export interface ClusterAttributes {
  readonly clusterId: string;
  readonly clusterName: string;
}

/**
 * Properties to create a MongoDB Atlas cluster.
 *
 * @see https://www.mongodb.com/docs/atlas/reference/api-resources-spec/v2/#tag/Clusters/operation/createCluster
 */
export interface ClusterProps extends ResourceProps, ClusterOptions {
  readonly profile: string;
  readonly project: atlas.IProject;
}

export class Cluster extends Resource implements ICluster {
  public static fromClusterAttributes(
    scope: Construct,
    id: string,
    attrs: ClusterAttributes
  ): ICluster {
    class Import extends Resource {
      public clusterId = attrs.clusterId;
      public clusterName = attrs.clusterName;
    }
    return new Import(scope, id);
  }
  readonly mongoDBVersion?: string;
  readonly clusterId: string;
  readonly createdDate?: string;
  readonly stateName?: string;
  readonly clusterName: string;
  readonly connectionStrings: atlas.ConnectionStrings;

  constructor(scope: Construct, id: string, props: ClusterProps) {
    super(scope, id);

    this.clusterName = props.clusterName ?? `cluster${id}`;
    const resource = new atlas.CfnCluster(this, "Resource", {
      ...props,
      replicationSpecs: props.replicationSpecs,
      projectId: props.project.projectId,
      profile: props.profile,
      name: this.clusterName,
      clusterType: props.clusterType ?? ClusterType.REPLICASET,
    });
    this.mongoDBVersion = resource.attrMongoDBVersion;
    this.clusterId = resource.attrId;
    this.createdDate = resource.attrCreatedDate;
    this.stateName = resource.attrStateName;
    this.connectionStrings = resource.connectionStrings;
  }
}
