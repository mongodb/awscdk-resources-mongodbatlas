// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Returns and edits the conditions that trigger alerts and how MongoDB Cloud notifies users. This collection remains under revision and may change. Refer to the legacy documentation for this collection in the following link.
 *
 * @schema CfnAlertConfigurationProps
 */
export interface CfnAlertConfigurationProps {
  /**
   * Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used
   *
   * @schema CfnAlertConfigurationProps#Profile
   */
  readonly profile?: string;

  /**
   * Event type that triggers an alert.
   *
   * @schema CfnAlertConfigurationProps#EventTypeName
   */
  readonly eventTypeName?: string;

  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnAlertConfigurationProps#ProjectId
   */
  readonly projectId?: string;

  /**
   * List of rules that determine whether MongoDB Cloud checks an object for the alert configuration. You can filter using the matchers array if the **eventTypeName** specifies an event for a host, replica set, or sharded cluster.
   *
   * @schema CfnAlertConfigurationProps#Matchers
   */
  readonly matchers?: Matcher[];

  /**
   * Threshold for the metric that, when exceeded, triggers an alert. The resource returns this parameter when '"eventTypeName" : "OUTSIDE_METRIC_THRESHOLD"'.
   *
   * @schema CfnAlertConfigurationProps#MetricThreshold
   */
  readonly metricThreshold?: MetricThresholdView;

  /**
   * List that contains the targets that MongoDB Cloud sends notifications.
   *
   * @schema CfnAlertConfigurationProps#Notifications
   */
  readonly notifications?: NotificationView[];

  /**
   * Limit that triggers an alert when exceeded. The resource returns this parameter when **eventTypeName** has not been set to 'OUTSIDE_METRIC_THRESHOLD'.
   *
   * @schema CfnAlertConfigurationProps#Threshold
   */
  readonly threshold?: IntegerThresholdView;

  /**
   * Human-readable label that displays the alert type.
   *
   * @schema CfnAlertConfigurationProps#TypeName
   */
  readonly typeName?: string;

}

/**
 * Converts an object of type 'CfnAlertConfigurationProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnAlertConfigurationProps(obj: CfnAlertConfigurationProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Profile': obj.profile,
    'EventTypeName': obj.eventTypeName,
    'ProjectId': obj.projectId,
    'Matchers': obj.matchers?.map(y => toJson_Matcher(y)),
    'MetricThreshold': toJson_MetricThresholdView(obj.metricThreshold),
    'Notifications': obj.notifications?.map(y => toJson_NotificationView(y)),
    'Threshold': toJson_IntegerThresholdView(obj.threshold),
    'TypeName': obj.typeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Matcher
 */
export interface Matcher {
  /**
   * Name of the parameter in the target object that MongoDB Cloud checks. The parameter must match all rules for MongoDB Cloud to check for alert configurations.
   *
   * @schema Matcher#FieldName
   */
  readonly fieldName?: MatcherFieldName;

  /**
   * Comparison operator to apply when checking the current metric value against **matcher[n].value**.
   *
   * @schema Matcher#Operator
   */
  readonly operator?: MatcherOperator;

  /**
   * Value to match or exceed using the specified **matchers.operator**.
   *
   * @schema Matcher#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Matcher' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Matcher(obj: Matcher | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldName': obj.fieldName,
    'Operator': obj.operator,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MetricThresholdView
 */
export interface MetricThresholdView {
  /**
   * Human-readable label that identifies the metric against which MongoDB Cloud checks the configured **metricThreshold.threshold**.
   *
   * @schema MetricThresholdView#MetricName
   */
  readonly metricName?: string;

  /**
   * MongoDB Cloud computes the current metric value as an average.
   *
   * @schema MetricThresholdView#Mode
   */
  readonly mode?: MetricThresholdViewMode;

  /**
   * Comparison operator to apply when checking the current metric value.
   *
   * @schema MetricThresholdView#Operator
   */
  readonly operator?: MetricThresholdViewOperator;

  /**
   * Value of metric that, when exceeded, triggers an alert.
   *
   * @schema MetricThresholdView#Threshold
   */
  readonly threshold?: number;

  /**
   * Element used to express the quantity. This can be an element of time, storage capacity, and the like.
   *
   * @schema MetricThresholdView#Units
   */
  readonly units?: string;

}

/**
 * Converts an object of type 'MetricThresholdView' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MetricThresholdView(obj: MetricThresholdView | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricName': obj.metricName,
    'Mode': obj.mode,
    'Operator': obj.operator,
    'Threshold': obj.threshold,
    'Units': obj.units,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NotificationView
 */
export interface NotificationView {
  /**
   * Slack API token or Bot token that MongoDB Cloud needs to send alert notifications via Slack. The resource requires this parameter when '"notifications.typeName" : "SLACK"'. If the token later becomes invalid, MongoDB Cloud sends an email to the project owners. If the token remains invalid, MongoDB Cloud removes the token.
   *
   * @schema NotificationView#ApiToken
   */
  readonly apiToken?: string;

  /**
   * Name of the Slack channel to which MongoDB Cloud sends alert notifications. The resource requires this parameter when '"notifications.typeName" : "SLACK"'.
   *
   * @schema NotificationView#ChannelName
   */
  readonly channelName?: string;

  /**
   * Datadog API Key that MongoDB Cloud needs to send alert notifications to Datadog. You can find this API key in the Datadog dashboard. The resource requires this parameter when '"notifications.typeName" : "DATADOG"'.
   *
   * @schema NotificationView#DatadogApiKey
   */
  readonly datadogApiKey?: string;

  /**
   * Datadog region that indicates which API Uniform Resource Locator (URL) to use. The resource requires this parameter when '"notifications.typeName" : "DATADOG"'.
   *
   * @schema NotificationView#DatadogRegion
   */
  readonly datadogRegion?: NotificationViewDatadogRegion;

  /**
   * Number of minutes that MongoDB Cloud waits after detecting an alert condition before it sends out the first notification.
   *
   * @schema NotificationView#DelayMin
   */
  readonly delayMin?: number;

  /**
   * Email address to which MongoDB Cloud sends alert notifications. The resource requires this parameter when '"notifications.typeName" : "EMAIL"'. You don't need to set this value to send emails to individual or groups of MongoDB Cloud users including:
   *
   * - specific MongoDB Cloud users ('"notifications.typeName" : "USER"')
   * - MongoDB Cloud users with specific project roles ('"notifications.typeName" : "GROUP"')
   * - MongoDB Cloud users with specific organization roles ('"notifications.typeName" : "ORG"')
   * - MongoDB Cloud teams ('"notifications.typeName" : "TEAM"')
   *
   * To send emails to one MongoDB Cloud user or grouping of users, set the **notifications.emailEnabled** parameter.
   *
   * @schema NotificationView#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * Flag that indicates whether MongoDB Cloud should send email notifications. The resource requires this parameter when one of the following values have been set:
   *
   * - '"notifications.typeName" : "ORG"'
   * - '"notifications.typeName" : "GROUP"'
   * - '"notifications.typeName" : "USER"'
   *
   * @schema NotificationView#EmailEnabled
   */
  readonly emailEnabled?: boolean;

  /**
   * Number of minutes to wait between successive notifications. MongoDB Cloud sends notifications until someone acknowledges the unacknowledged alert.
   *
   * PagerDuty, VictorOps, and OpsGenie notifications don't return this element. Configure and manage the notification interval within each of those services.
   *
   * @schema NotificationView#IntervalMin
   */
  readonly intervalMin?: number;

  /**
   * Microsoft Teams Webhook Uniform Resource Locator (URL) that MongoDB Cloud needs to send this notification via Microsoft Teams. The resource requires this parameter when '"notifications.typeName" : "MICROSOFT_TEAMS"'. If the URL later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.
   *
   * @schema NotificationView#MicrosoftTeamsWebhookUrl
   */
  readonly microsoftTeamsWebhookUrl?: string;

  /**
   * Mobile phone number to which MongoDB Cloud sends alert notifications. The resource requires this parameter when '"notifications.typeName" : "SMS"'.
   *
   * @schema NotificationView#MobileNumber
   */
  readonly mobileNumber?: string;

  /**
   * HipChat API token that MongoDB Cloud needs to send alert notifications to HipChat. The resource requires this parameter when '"notifications.typeName" : "HIP_CHAT"'". If the token later becomes invalid, MongoDB Cloud sends an email to the project owners. If the token remains invalid, MongoDB Cloud removes it.
   *
   * @schema NotificationView#NotificationToken
   */
  readonly notificationToken?: string;

  /**
   * API Key that MongoDB Cloud needs to send this notification via Opsgenie. The resource requires this parameter when '"notifications.typeName" : "OPS_GENIE"'. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.
   *
   * @schema NotificationView#OpsGenieApiKey
   */
  readonly opsGenieApiKey?: string;

  /**
   * Opsgenie region that indicates which API Uniform Resource Locator (URL) to use.
   *
   * @schema NotificationView#OpsGenieRegion
   */
  readonly opsGenieRegion?: NotificationViewOpsGenieRegion;

  /**
   * Flowdock organization name to which MongoDB Cloud sends alert notifications. This name appears after 'www.flowdock.com/app/' in the Uniform Resource Locator (URL) path. The resource requires this parameter when '"notifications.typeName" : "FLOWDOCK"'.
   *
   * @schema NotificationView#OrgName
   */
  readonly orgName?: string;

  /**
   * List that contains the one or more organization or project roles that receive the configured alert. The resource requires this parameter when '"notifications.typeName" : "GROUP"' or '"notifications.typeName" : "ORG"'. If you include this parameter, MongoDB Cloud sends alerts only to users assigned the roles you specify in the array. If you omit this parameter, MongoDB Cloud sends alerts to users assigned any role.
   *
   * @schema NotificationView#Roles
   */
  readonly roles?: NotificationViewRoles[];

  /**
   * HipChat API room name to which MongoDB Cloud sends alert notifications. The resource requires this parameter when '"notifications.typeName" : "HIP_CHAT"'".
   *
   * @schema NotificationView#RoomName
   */
  readonly roomName?: string;

  /**
   * PagerDuty service key that MongoDB Cloud needs to send notifications via PagerDuty. The resource requires this parameter when '"notifications.typeName" : "PAGER_DUTY"'. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.
   *
   * @schema NotificationView#ServiceKey
   */
  readonly serviceKey?: string;

  /**
   * Degree of seriousness given to this notification.
   *
   * @schema NotificationView#Severity
   */
  readonly severity?: NotificationViewSeverity;

  /**
   * Flag that indicates whether MongoDB Cloud should send text message notifications. The resource requires this parameter when one of the following values have been set:
   *
   * - '"notifications.typeName" : "ORG"'
   * - '"notifications.typeName" : "GROUP"'
   * - '"notifications.typeName" : "USER"'
   *
   * @schema NotificationView#SmsEnabled
   */
  readonly smsEnabled?: boolean;

  /**
   * Unique 24-hexadecimal digit string that identifies one MongoDB Cloud team. The resource requires this parameter when '"notifications.typeName" : "TEAM"'.
   *
   * @schema NotificationView#TeamId
   */
  readonly teamId?: string;

  /**
   * Name of the MongoDB Cloud team that receives this notification. The resource requires this parameter when '"notifications.typeName" : "TEAM"'.
   *
   * @schema NotificationView#TeamName
   */
  readonly teamName?: string;

  /**
   * Human-readable label that displays the alert notification type.
   *
   * @schema NotificationView#TypeName
   */
  readonly typeName?: NotificationViewTypeName;

  /**
   * MongoDB Cloud username of the person to whom MongoDB Cloud sends notifications. Specify only MongoDB Cloud users who belong to the project that owns the alert configuration. The resource requires this parameter when '"notifications.typeName" : "USER"'.
   *
   * @schema NotificationView#Username
   */
  readonly username?: string;

  /**
   * API key that MongoDB Cloud needs to send alert notifications to Splunk On-Call. The resource requires this parameter when '"notifications.typeName" : "VICTOR_OPS"'. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.
   *
   * @schema NotificationView#VictorOpsApiKey
   */
  readonly victorOpsApiKey?: string;

  /**
   * Routing key that MongoDB Cloud needs to send alert notifications to Splunk On-Call. The resource requires this parameter when '"notifications.typeName" : "VICTOR_OPS"'. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.
   *
   * @schema NotificationView#VictorOpsRoutingKey
   */
  readonly victorOpsRoutingKey?: string;

  /**
   * An optional field for your webhook secret.
   *
   * @schema NotificationView#WebhookSecret
   */
  readonly webhookSecret?: string;

  /**
   * Your webhook URL.
   *
   * @schema NotificationView#WebhookUrl
   */
  readonly webhookUrl?: string;

}

/**
 * Converts an object of type 'NotificationView' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NotificationView(obj: NotificationView | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiToken': obj.apiToken,
    'ChannelName': obj.channelName,
    'DatadogApiKey': obj.datadogApiKey,
    'DatadogRegion': obj.datadogRegion,
    'DelayMin': obj.delayMin,
    'EmailAddress': obj.emailAddress,
    'EmailEnabled': obj.emailEnabled,
    'IntervalMin': obj.intervalMin,
    'MicrosoftTeamsWebhookUrl': obj.microsoftTeamsWebhookUrl,
    'MobileNumber': obj.mobileNumber,
    'NotificationToken': obj.notificationToken,
    'OpsGenieApiKey': obj.opsGenieApiKey,
    'OpsGenieRegion': obj.opsGenieRegion,
    'OrgName': obj.orgName,
    'Roles': obj.roles?.map(y => y),
    'RoomName': obj.roomName,
    'ServiceKey': obj.serviceKey,
    'Severity': obj.severity,
    'SmsEnabled': obj.smsEnabled,
    'TeamId': obj.teamId,
    'TeamName': obj.teamName,
    'TypeName': obj.typeName,
    'Username': obj.username,
    'VictorOpsApiKey': obj.victorOpsApiKey,
    'VictorOpsRoutingKey': obj.victorOpsRoutingKey,
    'WebhookSecret': obj.webhookSecret,
    'WebhookUrl': obj.webhookUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IntegerThresholdView
 */
export interface IntegerThresholdView {
  /**
   * Comparison operator to apply when checking the current metric value.
   *
   * @schema IntegerThresholdView#Operator
   */
  readonly operator?: IntegerThresholdViewOperator;

  /**
   * Value of metric that, when exceeded, triggers an alert.
   *
   * @schema IntegerThresholdView#Threshold
   */
  readonly threshold?: number;

  /**
   * Element used to express the quantity. This can be an element of time, storage capacity, and the like.
   *
   * @schema IntegerThresholdView#Units
   */
  readonly units?: string;

}

/**
 * Converts an object of type 'IntegerThresholdView' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IntegerThresholdView(obj: IntegerThresholdView | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Operator': obj.operator,
    'Threshold': obj.threshold,
    'Units': obj.units,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Name of the parameter in the target object that MongoDB Cloud checks. The parameter must match all rules for MongoDB Cloud to check for alert configurations.
 *
 * @schema MatcherFieldName
 */
export enum MatcherFieldName {
  /** CLUSTER_NAME */
  CLUSTER_UNDERSCORE_NAME = "CLUSTER_NAME",
  /** HOSTNAME */
  HOSTNAME = "HOSTNAME",
  /** HOSTNAME_AND_PORT */
  HOSTNAME_UNDERSCORE_AND_UNDERSCORE_PORT = "HOSTNAME_AND_PORT",
  /** PORT */
  PORT = "PORT",
  /** REPLICA_SET_NAME */
  REPLICA_UNDERSCORE_SET_UNDERSCORE_NAME = "REPLICA_SET_NAME",
  /** SHARD_NAME */
  SHARD_UNDERSCORE_NAME = "SHARD_NAME",
  /** TYPE_NAME */
  TYPE_UNDERSCORE_NAME = "TYPE_NAME",
  /** APPLICATION_ID */
  APPLICATION_UNDERSCORE_ID = "APPLICATION_ID",
  /** INSTANCE_NAME */
  INSTANCE_UNDERSCORE_NAME = "INSTANCE_NAME",
  /** PROCESSOR_NAME */
  PROCESSOR_UNDERSCORE_NAME = "PROCESSOR_NAME",
}

/**
 * Comparison operator to apply when checking the current metric value against **matcher[n].value**.
 *
 * @schema MatcherOperator
 */
export enum MatcherOperator {
  /** EQUALS */
  EQUALS = "EQUALS",
  /** CONTAINS */
  CONTAINS = "CONTAINS",
  /** STARTS_WITH */
  STARTS_UNDERSCORE_WITH = "STARTS_WITH",
  /** ENDS_WITH */
  ENDS_UNDERSCORE_WITH = "ENDS_WITH",
  /** NOT_EQUALS */
  NOT_UNDERSCORE_EQUALS = "NOT_EQUALS",
  /** NOT_CONTAINS */
  NOT_UNDERSCORE_CONTAINS = "NOT_CONTAINS",
  /** REGEX */
  REGEX = "REGEX",
}

/**
 * MongoDB Cloud computes the current metric value as an average.
 *
 * @schema MetricThresholdViewMode
 */
export enum MetricThresholdViewMode {
  /** AVERAGE */
  AVERAGE = "AVERAGE",
}

/**
 * Comparison operator to apply when checking the current metric value.
 *
 * @schema MetricThresholdViewOperator
 */
export enum MetricThresholdViewOperator {
  /** GREATER_THAN */
  GREATER_UNDERSCORE_THAN = "GREATER_THAN",
  /** LESS_THAN */
  LESS_UNDERSCORE_THAN = "LESS_THAN",
}

/**
 * Datadog region that indicates which API Uniform Resource Locator (URL) to use. The resource requires this parameter when '"notifications.typeName" : "DATADOG"'.
 *
 * @schema NotificationViewDatadogRegion
 */
export enum NotificationViewDatadogRegion {
  /** EU */
  EU = "EU",
  /** US */
  US = "US",
}

/**
 * Opsgenie region that indicates which API Uniform Resource Locator (URL) to use.
 *
 * @schema NotificationViewOpsGenieRegion
 */
export enum NotificationViewOpsGenieRegion {
  /** EU */
  EU = "EU",
  /** US */
  US = "US",
}

/**
 * @schema NotificationViewRoles
 */
export enum NotificationViewRoles {
  /** GROUP_CLUSTER_MANAGER */
  GROUP_UNDERSCORE_CLUSTER_UNDERSCORE_MANAGER = "GROUP_CLUSTER_MANAGER",
  /** GROUP_DATA_ACCESS_ADMIN */
  GROUP_UNDERSCORE_DATA_UNDERSCORE_ACCESS_UNDERSCORE_ADMIN = "GROUP_DATA_ACCESS_ADMIN",
  /** GROUP_DATA_ACCESS_READ_ONLY */
  GROUP_UNDERSCORE_DATA_UNDERSCORE_ACCESS_UNDERSCORE_READ_UNDERSCORE_ONLY = "GROUP_DATA_ACCESS_READ_ONLY",
  /** GROUP_DATA_ACCESS_READ_WRITE */
  GROUP_UNDERSCORE_DATA_UNDERSCORE_ACCESS_UNDERSCORE_READ_UNDERSCORE_WRITE = "GROUP_DATA_ACCESS_READ_WRITE",
  /** GROUP_OWNER */
  GROUP_UNDERSCORE_OWNER = "GROUP_OWNER",
  /** GROUP_READ_WRITE */
  GROUP_UNDERSCORE_READ_UNDERSCORE_WRITE = "GROUP_READ_WRITE",
  /** ORG_OWNER */
  ORG_UNDERSCORE_OWNER = "ORG_OWNER",
  /** ORG_MEMBER */
  ORG_UNDERSCORE_MEMBER = "ORG_MEMBER",
  /** ORG_GROUP_CREATOR */
  ORG_UNDERSCORE_GROUP_UNDERSCORE_CREATOR = "ORG_GROUP_CREATOR",
  /** ORG_BILLING_ADMIN */
  ORG_UNDERSCORE_BILLING_UNDERSCORE_ADMIN = "ORG_BILLING_ADMIN",
  /** ORG_READ_ONLY */
  ORG_UNDERSCORE_READ_UNDERSCORE_ONLY = "ORG_READ_ONLY",
}

/**
 * Degree of seriousness given to this notification.
 *
 * @schema NotificationViewSeverity
 */
export enum NotificationViewSeverity {
  /** CRITICAL */
  CRITICAL = "CRITICAL",
  /** ERROR */
  ERROR = "ERROR",
  /** WARNING */
  WARNING = "WARNING",
}

/**
 * Human-readable label that displays the alert notification type.
 *
 * @schema NotificationViewTypeName
 */
export enum NotificationViewTypeName {
  /** DATADOG */
  DATADOG = "DATADOG",
  /** EMAIL */
  EMAIL = "EMAIL",
  /** FLOWDOCK */
  FLOWDOCK = "FLOWDOCK",
  /** GROUP */
  GROUP = "GROUP",
  /** MICROSOFT_TEAMS */
  MICROSOFT_UNDERSCORE_TEAMS = "MICROSOFT_TEAMS",
  /** OPS_GENIE */
  OPS_UNDERSCORE_GENIE = "OPS_GENIE",
  /** ORG */
  ORG = "ORG",
  /** PAGER_DUTY */
  PAGER_UNDERSCORE_DUTY = "PAGER_DUTY",
  /** PROMETHEUS */
  PROMETHEUS = "PROMETHEUS",
  /** SLACK */
  SLACK = "SLACK",
  /** SMS */
  SMS = "SMS",
  /** TEAM */
  TEAM = "TEAM",
  /** USER */
  USER = "USER",
  /** VICTOR_OPS */
  VICTOR_UNDERSCORE_OPS = "VICTOR_OPS",
  /** WEBHOOK */
  WEBHOOK = "WEBHOOK",
}

/**
 * Comparison operator to apply when checking the current metric value.
 *
 * @schema IntegerThresholdViewOperator
 */
export enum IntegerThresholdViewOperator {
  /** GREATER_THAN */
  GREATER_UNDERSCORE_THAN = "GREATER_THAN",
  /** LESS_THAN */
  LESS_UNDERSCORE_THAN = "LESS_THAN",
}


/**
 * A CloudFormation `MongoDB::Atlas::AlertConfiguration`
 *
 * @cloudformationResource MongoDB::Atlas::AlertConfiguration
 * @stability external
 */
export class CfnAlertConfiguration extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "MongoDB::Atlas::AlertConfiguration";

  /**
   * Resource props.
   */
  public readonly props: CfnAlertConfigurationProps;

  /**
   * Attribute `MongoDB::Atlas::AlertConfiguration.Id`
   */
  public readonly attrId: string;
  /**
   * Attribute `MongoDB::Atlas::AlertConfiguration.Enabled`
   */
  public readonly attrEnabled: cdk.IResolvable;
  /**
   * Attribute `MongoDB::Atlas::AlertConfiguration.Updated`
   */
  public readonly attrUpdated: string;
  /**
   * Attribute `MongoDB::Atlas::AlertConfiguration.Created`
   */
  public readonly attrCreated: string;

  /**
   * Create a new `MongoDB::Atlas::AlertConfiguration`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnAlertConfigurationProps) {
    super(scope, id, { type: CfnAlertConfiguration.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnAlertConfigurationProps(props)! });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt('Id'));
    this.attrEnabled = this.getAtt('Enabled');
    this.attrUpdated = cdk.Token.asString(this.getAtt('Updated'));
    this.attrCreated = cdk.Token.asString(this.getAtt('Created'));
  }
}