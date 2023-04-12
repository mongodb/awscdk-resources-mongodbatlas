// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Returns, adds, edits, or removes an online archive.
 *
 * @schema CfnOnlineArchiveProps
 */
export interface CfnOnlineArchiveProps {
  /**
   * The profile is defined in AWS Secret manager. See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).
   *
   * @schema CfnOnlineArchiveProps#Profile
   */
  readonly profile?: string;

  /**
   * Human-readable label that identifies the cluster that contains the collection from which you want to remove an online archive.
   *
   * @schema CfnOnlineArchiveProps#ClusterName
   */
  readonly clusterName: string;

  /**
   * Human-readable label that identifies the collection for which you created the online archive.
   *
   * @schema CfnOnlineArchiveProps#CollName
   */
  readonly collName?: string;

  /**
   * Classification of MongoDB database collection that you want to return.
   *
   * If you set this parameter to `TIMESERIES`, set `"criteria.type" : "date"` and `"criteria.dateFormat" : "ISODATE"`.
   *
   * @schema CfnOnlineArchiveProps#CollectionType
   */
  readonly collectionType?: CfnOnlineArchivePropsCollectionType;

  /**
   * Rules by which MongoDB MongoDB Cloud archives data.
   *
   * Use the **criteria.type** field to choose how MongoDB Cloud selects data to archive. Choose data using the age of the data or a MongoDB query.
   * **"criteria.type": "DATE"** selects documents to archive based on a date.
   * **"criteria.type": "CUSTOM"** selects documents to archive based on a custom JSON query. MongoDB Cloud doesn't support **"criteria.type": "CUSTOM"** when **"collectionType": "TIMESERIES"**.
   *
   * @schema CfnOnlineArchiveProps#Criteria
   */
  readonly criteria: CriteriaView;

  /**
   * Human-readable label of the database that contains the collection that contains the online archive.
   *
   * @schema CfnOnlineArchiveProps#DbName
   */
  readonly dbName?: string;

  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnOnlineArchiveProps#ProjectId
   */
  readonly projectId?: string;

  /**
   * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
   *
   * @schema CfnOnlineArchiveProps#IncludeCount
   */
  readonly includeCount?: boolean;

  /**
   * Number of items that the response returns per page.
   *
   * @schema CfnOnlineArchiveProps#ItemsPerPage
   */
  readonly itemsPerPage?: number;

  /**
   * Number of the page that displays the current set of the total objects that the response returns.
   *
   * @schema CfnOnlineArchiveProps#PageNum
   */
  readonly pageNum?: number;

  /**
   * List that contains document parameters to use to logically divide data within a collection. Partitions provide a coarse level of filtering of the underlying collection data. To divide your data, specify up to two parameters that you frequently query. Any queries that don't use these parameters result in a full collection scan of all archived documents. This takes more time and increase your costs.
   *
   * @schema CfnOnlineArchiveProps#PartitionFields
   */
  readonly partitionFields?: PartitionFieldView[];

  /**
   * Regular frequency and duration when archiving process occurs.
   *
   * @schema CfnOnlineArchiveProps#Schedule
   */
  readonly schedule?: ScheduleView;

}

/**
 * Converts an object of type 'CfnOnlineArchiveProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnOnlineArchiveProps(obj: CfnOnlineArchiveProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Profile': obj.profile,
    'ClusterName': obj.clusterName,
    'CollName': obj.collName,
    'CollectionType': obj.collectionType,
    'Criteria': toJson_CriteriaView(obj.criteria),
    'DbName': obj.dbName,
    'ProjectId': obj.projectId,
    'IncludeCount': obj.includeCount,
    'ItemsPerPage': obj.itemsPerPage,
    'PageNum': obj.pageNum,
    'PartitionFields': obj.partitionFields?.map(y => toJson_PartitionFieldView(y)),
    'Schedule': toJson_ScheduleView(obj.schedule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Classification of MongoDB database collection that you want to return.
 *
 * If you set this parameter to `TIMESERIES`, set `"criteria.type" : "date"` and `"criteria.dateFormat" : "ISODATE"`.
 *
 * @schema CfnOnlineArchivePropsCollectionType
 */
export enum CfnOnlineArchivePropsCollectionType {
  /** STANDARD */
  STANDARD = "STANDARD",
  /** TIMESERIES */
  TIMESERIES = "TIMESERIES",
}

/**
 * @schema CriteriaView
 */
export interface CriteriaView {
  /**
   * Means by which MongoDB Cloud selects data to archive. Data can be chosen using the age of the data or a MongoDB query.
   * **DATE** selects documents to archive based on a date.
   * **CUSTOM** selects documents to archive based on a custom JSON query. MongoDB Cloud doesn't support **CUSTOM** when `"collectionType": "TIMESERIES"`.
   *
   * @schema CriteriaView#Type
   */
  readonly type?: CriteriaViewType;

  /**
   * Indexed database parameter that stores the date that determines when data moves to the online archive. MongoDB Cloud archives the data when the current date exceeds the date in this database parameter plus the number of days specified through the expireAfterDays parameter. Set this parameter when you set "criteria.type" : "DATE".
   *
   * @schema CriteriaView#DateField
   */
  readonly dateField?: string;

  /**
   * Syntax used to write the date after which data moves to the online archive. Date can be expressed as ISO 8601 or Epoch timestamps. The Epoch timestamp can be expressed as nanoseconds, milliseconds, or seconds. Set this parameter when "criteria.type" : "DATE". You must set "criteria.type" : "DATE" if "collectionType": "TIMESERIES".
   *
   * @schema CriteriaView#DateFormat
   */
  readonly dateFormat?: CriteriaViewDateFormat;

  /**
   * Number of days after the value in the criteria.dateField when MongoDB Cloud archives data in the specified cluster. Set this parameter when you set "criteria.type" : "DATE".
   *
   * @schema CriteriaView#ExpireAfterDays
   */
  readonly expireAfterDays?: number;

  /**
   * MongoDB find query that selects documents to archive. The specified query follows the syntax of the db.collection.find(query) command. This query can't use the empty document ({}) to return all documents. Set this parameter when "criteria.type" : "CUSTOM".
   *
   * @schema CriteriaView#Query
   */
  readonly query?: string;

}

/**
 * Converts an object of type 'CriteriaView' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CriteriaView(obj: CriteriaView | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'DateField': obj.dateField,
    'DateFormat': obj.dateFormat,
    'ExpireAfterDays': obj.expireAfterDays,
    'Query': obj.query,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PartitionFieldView
 */
export interface PartitionFieldView {
  /**
   * Human-readable label that identifies the parameter that MongoDB Cloud uses to partition data. To specify a nested parameter, use the dot notation.
   *
   * @schema PartitionFieldView#FieldName
   */
  readonly fieldName?: string;

  /**
   * Data type of the parameter that that MongoDB Cloud uses to partition data. Partition parameters of type [UUID](http://bsonspec.org/spec.html) must be of binary subtype 4. MongoDB Cloud skips partition parameters of type UUID with subtype 3.
   *
   * @schema PartitionFieldView#FieldType
   */
  readonly fieldType?: PartitionFieldViewFieldType;

  /**
   * Sequence in which MongoDB Cloud slices the collection data to create partitions. The resource expresses this sequence starting with zero. The value of the **criteria.dateField** parameter defaults as the first item in the partition sequence.
   *
   * @schema PartitionFieldView#Order
   */
  readonly order?: number;

}

/**
 * Converts an object of type 'PartitionFieldView' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PartitionFieldView(obj: PartitionFieldView | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldName': obj.fieldName,
    'FieldType': obj.fieldType,
    'Order': obj.order,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ScheduleView
 */
export interface ScheduleView {
  /**
   * @schema ScheduleView#Type
   */
  readonly type?: ScheduleViewType;

  /**
   * Hour of the day when the scheduled window to run one online archive ends.
   *
   * @schema ScheduleView#EndHour
   */
  readonly endHour?: number;

  /**
   * Minute of the hour when the scheduled window to run one online archive ends.
   *
   * @schema ScheduleView#EndMinute
   */
  readonly endMinute?: number;

  /**
   * Hour of the day when the when the scheduled window to run one online archive starts.
   *
   * @schema ScheduleView#StartHour
   */
  readonly startHour?: number;

  /**
   * Minute of the hour when the scheduled window to run one online archive starts.
   *
   * @schema ScheduleView#StartMinute
   */
  readonly startMinute?: number;

  /**
   * Day of the month when the scheduled archive starts.
   *
   * @schema ScheduleView#DayOfMonth
   */
  readonly dayOfMonth?: number;

  /**
   * Day of the month when the scheduled archive starts.
   *
   * @schema ScheduleView#DayOfWeek
   */
  readonly dayOfWeek?: number;

}

/**
 * Converts an object of type 'ScheduleView' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ScheduleView(obj: ScheduleView | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'EndHour': obj.endHour,
    'EndMinute': obj.endMinute,
    'StartHour': obj.startHour,
    'StartMinute': obj.startMinute,
    'DayOfMonth': obj.dayOfMonth,
    'DayOfWeek': obj.dayOfWeek,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Means by which MongoDB Cloud selects data to archive. Data can be chosen using the age of the data or a MongoDB query.
 * **DATE** selects documents to archive based on a date.
 * **CUSTOM** selects documents to archive based on a custom JSON query. MongoDB Cloud doesn't support **CUSTOM** when `"collectionType": "TIMESERIES"`.
 *
 * @schema CriteriaViewType
 */
export enum CriteriaViewType {
  /** DATE */
  DATE = "DATE",
  /** CUSTOM */
  CUSTOM = "CUSTOM",
}

/**
 * Syntax used to write the date after which data moves to the online archive. Date can be expressed as ISO 8601 or Epoch timestamps. The Epoch timestamp can be expressed as nanoseconds, milliseconds, or seconds. Set this parameter when "criteria.type" : "DATE". You must set "criteria.type" : "DATE" if "collectionType": "TIMESERIES".
 *
 * @schema CriteriaViewDateFormat
 */
export enum CriteriaViewDateFormat {
  /** ISODATE */
  ISODATE = "ISODATE",
  /** EPOCH_SECONDS */
  EPOCH_SECONDS = "EPOCH_SECONDS",
  /** EPOCH_MILLIS */
  EPOCH_MILLIS = "EPOCH_MILLIS",
  /** EPOCH_NANOSECONDS */
  EPOCH_NANOSECONDS = "EPOCH_NANOSECONDS",
}

/**
 * Data type of the parameter that that MongoDB Cloud uses to partition data. Partition parameters of type [UUID](http://bsonspec.org/spec.html) must be of binary subtype 4. MongoDB Cloud skips partition parameters of type UUID with subtype 3.
 *
 * @schema PartitionFieldViewFieldType
 */
export enum PartitionFieldViewFieldType {
  /** date */
  DATE = "date",
  /** int */
  INT = "int",
  /** long */
  LONG = "long",
  /** objectId */
  OBJECT_ID = "objectId",
  /** string */
  STRING = "string",
  /** uuid */
  UUID = "uuid",
}

/**
 * @schema ScheduleViewType
 */
export enum ScheduleViewType {
  /** DAILY */
  DAILY = "DAILY",
  /** MONTHLY */
  MONTHLY = "MONTHLY",
  /** DEFAULT */
  DEFAULT = "DEFAULT",
  /** WEEKLY */
  WEEKLY = "WEEKLY",
}


/**
 * A CloudFormation `MongoDB::Atlas::OnlineArchive`
 *
 * @cloudformationResource MongoDB::Atlas::OnlineArchive
 * @stability external
 */
export class CfnOnlineArchive extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "MongoDB::Atlas::OnlineArchive";

  /**
   * Resource props.
   */
  public readonly props: CfnOnlineArchiveProps;

  /**
   * Attribute `MongoDB::Atlas::OnlineArchive.State`
   */
  public readonly attrState: string;
  /**
   * Attribute `MongoDB::Atlas::OnlineArchive.TotalCount`
   */
  public readonly attrTotalCount: number;
  /**
   * Attribute `MongoDB::Atlas::OnlineArchive.ArchiveId`
   */
  public readonly attrArchiveId: string;
  /**
   * Attribute `MongoDB::Atlas::OnlineArchive.State`
   */
  public readonly attrState: string;

  /**
   * Create a new `MongoDB::Atlas::OnlineArchive`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnOnlineArchiveProps) {
    super(scope, id, { type: CfnOnlineArchive.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnOnlineArchiveProps(props)! });

    this.props = props;

    this.attrState = cdk.Token.asString(this.getAtt('State'));
    this.attrTotalCount = cdk.Token.asNumber(this.getAtt('TotalCount'));
    this.attrArchiveId = cdk.Token.asString(this.getAtt('ArchiveId'));
    this.attrState = cdk.Token.asString(this.getAtt('State'));
  }
}