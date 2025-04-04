// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Returns, starts, and cancels Cloud Backup restore jobs.
 *
 * @schema CfnCloudBackUpRestoreJobsProps
 */
export interface CfnCloudBackUpRestoreJobsProps {
  /**
   * The unique identifier of the project for the Atlas cluster.
   *
   * @schema CfnCloudBackUpRestoreJobsProps#ProjectId
   */
  readonly projectId: string;

  /**
   * Type of instance specified on the Instance Name serverless or cluster. **WARNING:** `serverless` instance type is deprecated and will be removed in January 2026. For more details, see [Migrate your programmatic tools from M2, M5, or Serverless Instances to Flex Clusters](https://www.mongodb.com/docs/atlas/flex-migration/).
   *
   * @schema CfnCloudBackUpRestoreJobsProps#InstanceType
   */
  readonly instanceType: CfnCloudBackUpRestoreJobsPropsInstanceType;

  /**
   * The instance name of the Serverless/Cluster whose snapshot you want to restore or you want to retrieve restore jobs.
   *
   * @schema CfnCloudBackUpRestoreJobsProps#InstanceName
   */
  readonly instanceName: string;

  /**
   * Type of restore job to create.The value can be any one of download,automated or point_in_time
   *
   * @schema CfnCloudBackUpRestoreJobsProps#DeliveryType
   */
  readonly deliveryType: CfnCloudBackUpRestoreJobsPropsDeliveryType;

  /**
   * Unique identifier of the source snapshot ID of the restore job.
   *
   * @schema CfnCloudBackUpRestoreJobsProps#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * One or more links to sub-resources and/or related resources.
   *
   * @schema CfnCloudBackUpRestoreJobsProps#Links
   */
  readonly links?: CfnCloudBackUpRestoreJobsPropsLinks[];

  /**
   * Timestamp in the number of seconds that have elapsed since the UNIX epoch from which to you want to restore this snapshot. This is the first part of an Oplog timestamp.
   *
   * @schema CfnCloudBackUpRestoreJobsProps#OpLogTs
   */
  readonly opLogTs?: string;

  /**
   * Oplog operation number from which to you want to restore this snapshot. This is the second part of an Oplog timestamp.
   *
   * @schema CfnCloudBackUpRestoreJobsProps#OpLogInc
   */
  readonly opLogInc?: string;

  /**
   * If you performed a Point-in-Time restores at a time specified by a Unix time in seconds since epoch, pointInTimeUTCSeconds indicates the Unix time used.
   *
   * @schema CfnCloudBackUpRestoreJobsProps#PointInTimeUtcSeconds
   */
  readonly pointInTimeUtcSeconds?: number;

  /**
   * Name of the target Atlas project of the restore job. Only visible if deliveryType is automated.
   *
   * @schema CfnCloudBackUpRestoreJobsProps#TargetProjectId
   */
  readonly targetProjectId?: string;

  /**
   * Name of the target Atlas cluster to which the restore job restores the snapshot. Only visible if deliveryType is automated.
   *
   * @schema CfnCloudBackUpRestoreJobsProps#TargetClusterName
   */
  readonly targetClusterName?: string;

  /**
   * Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used
   *
   * @schema CfnCloudBackUpRestoreJobsProps#Profile
   */
  readonly profile?: string;

  /**
   * If set to true, the CloudFormation resource will wait until the job is completed, WARNING: if the snapshot has a big load of data, the cloud formation resource might take a long time to finish leading to high costs
   *
   * @schema CfnCloudBackUpRestoreJobsProps#EnableSynchronousCreation
   */
  readonly enableSynchronousCreation?: boolean;

  /**
   * Options that needs to be set to control the synchronous creation flow, this options need to be set if EnableSynchronousCreation is se to TRUE
   *
   * @schema CfnCloudBackUpRestoreJobsProps#SynchronousCreationOptions
   */
  readonly synchronousCreationOptions?: SynchronousCreationOptions;
}

/**
 * Converts an object of type 'CfnCloudBackUpRestoreJobsProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnCloudBackUpRestoreJobsProps(
  obj: CfnCloudBackUpRestoreJobsProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    ProjectId: obj.projectId,
    InstanceType: obj.instanceType,
    InstanceName: obj.instanceName,
    DeliveryType: obj.deliveryType,
    SnapshotId: obj.snapshotId,
    Links: obj.links?.map((y) => toJson_CfnCloudBackUpRestoreJobsPropsLinks(y)),
    OpLogTs: obj.opLogTs,
    OpLogInc: obj.opLogInc,
    PointInTimeUtcSeconds: obj.pointInTimeUtcSeconds,
    TargetProjectId: obj.targetProjectId,
    TargetClusterName: obj.targetClusterName,
    Profile: obj.profile,
    EnableSynchronousCreation: obj.enableSynchronousCreation,
    SynchronousCreationOptions: toJson_SynchronousCreationOptions(
      obj.synchronousCreationOptions
    ),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Type of instance specified on the Instance Name serverless or cluster. **WARNING:** `serverless` instance type is deprecated and will be removed in January 2026. For more details, see [Migrate your programmatic tools from M2, M5, or Serverless Instances to Flex Clusters](https://www.mongodb.com/docs/atlas/flex-migration/).
 *
 * @schema CfnCloudBackUpRestoreJobsPropsInstanceType
 */
export enum CfnCloudBackUpRestoreJobsPropsInstanceType {
  /** serverless */
  SERVERLESS = "serverless",
  /** cluster */
  CLUSTER = "cluster",
}

/**
 * Type of restore job to create.The value can be any one of download,automated or point_in_time
 *
 * @schema CfnCloudBackUpRestoreJobsPropsDeliveryType
 */
export enum CfnCloudBackUpRestoreJobsPropsDeliveryType {
  /** download */
  DOWNLOAD = "download",
  /** automated */
  AUTOMATED = "automated",
  /** pointInTime */
  POINT_IN_TIME = "pointInTime",
}

/**
 * @schema CfnCloudBackUpRestoreJobsPropsLinks
 */
export interface CfnCloudBackUpRestoreJobsPropsLinks {
  /**
   * @schema CfnCloudBackUpRestoreJobsPropsLinks#Rel
   */
  readonly rel?: string;

  /**
   * @schema CfnCloudBackUpRestoreJobsPropsLinks#Href
   */
  readonly href?: string;
}

/**
 * Converts an object of type 'CfnCloudBackUpRestoreJobsPropsLinks' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnCloudBackUpRestoreJobsPropsLinks(
  obj: CfnCloudBackUpRestoreJobsPropsLinks | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Rel: obj.rel,
    Href: obj.href,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Options that needs to be set to control the synchronous creation flow, this options need to be set if EnableSynchronousCreation is se to TRUE
 *
 * @schema SynchronousCreationOptions
 */
export interface SynchronousCreationOptions {
  /**
   * The amount of time the process will wait until exiting with a success, default (1200 seconds)
   *
   * @schema SynchronousCreationOptions#TimeOutInSeconds
   */
  readonly timeOutInSeconds?: number;

  /**
   * Represents the time interval, measured in seconds, for the synchronous process to wait before checking again to verify if the job has been completed. example: if set to 20, it will chek every 20 seconds if the resource is completed, default (30 seconds)
   *
   * @schema SynchronousCreationOptions#CallbackDelaySeconds
   */
  readonly callbackDelaySeconds?: number;

  /**
   * if set to true, the process will return success, in the event of a timeOut, default false
   *
   * @schema SynchronousCreationOptions#ReturnSuccessIfTimeOut
   */
  readonly returnSuccessIfTimeOut?: boolean;
}

/**
 * Converts an object of type 'SynchronousCreationOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SynchronousCreationOptions(
  obj: SynchronousCreationOptions | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    TimeOutInSeconds: obj.timeOutInSeconds,
    CallbackDelaySeconds: obj.callbackDelaySeconds,
    ReturnSuccessIfTimeOut: obj.returnSuccessIfTimeOut,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::CloudBackUpRestoreJobs`
 *
 * @cloudformationResource MongoDB::Atlas::CloudBackUpRestoreJobs
 * @stability external
 */
export class CfnCloudBackUpRestoreJobs extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::CloudBackUpRestoreJobs";

  /**
   * Resource props.
   */
  public readonly props: CfnCloudBackUpRestoreJobsProps;

  /**
   * Attribute `MongoDB::Atlas::CloudBackUpRestoreJobs.Id`
   */
  public readonly attrId: string;
  /**
   * Attribute `MongoDB::Atlas::CloudBackUpRestoreJobs.DeliveryUrl`
   */
  public readonly attrDeliveryUrl: string[];
  /**
   * Attribute `MongoDB::Atlas::CloudBackUpRestoreJobs.Cancelled`
   */
  public readonly attrCancelled: cdk.IResolvable;
  /**
   * Attribute `MongoDB::Atlas::CloudBackUpRestoreJobs.Failed`
   */
  public readonly attrFailed: cdk.IResolvable;
  /**
   * Attribute `MongoDB::Atlas::CloudBackUpRestoreJobs.Expired`
   */
  public readonly attrExpired: cdk.IResolvable;
  /**
   * Attribute `MongoDB::Atlas::CloudBackUpRestoreJobs.ExpiresAt`
   */
  public readonly attrExpiresAt: string;
  /**
   * Attribute `MongoDB::Atlas::CloudBackUpRestoreJobs.FinishedAt`
   */
  public readonly attrFinishedAt: string;
  /**
   * Attribute `MongoDB::Atlas::CloudBackUpRestoreJobs.Timestamp`
   */
  public readonly attrTimestamp: string;

  /**
   * Create a new `MongoDB::Atlas::CloudBackUpRestoreJobs`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnCloudBackUpRestoreJobsProps
  ) {
    super(scope, id, {
      type: CfnCloudBackUpRestoreJobs.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnCloudBackUpRestoreJobsProps(props)!,
    });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt("Id"));
    this.attrDeliveryUrl = cdk.Token.asList(this.getAtt("DeliveryUrl"));
    this.attrCancelled = this.getAtt("Cancelled");
    this.attrFailed = this.getAtt("Failed");
    this.attrExpired = this.getAtt("Expired");
    this.attrExpiresAt = cdk.Token.asString(this.getAtt("ExpiresAt"));
    this.attrFinishedAt = cdk.Token.asString(this.getAtt("FinishedAt"));
    this.attrTimestamp = cdk.Token.asString(this.getAtt("Timestamp"));
  }
}
