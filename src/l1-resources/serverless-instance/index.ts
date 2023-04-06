// Generated by cdk-import
import * as cdk from 'aws-cdk-lib';
import * as constructs from 'constructs';

/**
 * Returns, adds, edits, and removes serverless instances.
 *
 * @schema CfnServerlessInstanceProps
 */
export interface CfnServerlessInstanceProps {
  /**
   * Collection of Uniform Resource Locators that point to the MongoDB database.
   *
   * @schema CfnServerlessInstanceProps#ConnectionStrings
   */
  readonly connectionStrings?: ServerlessInstanceConnectionStrings;

  /**
   * Flag that indicates whether the serverless instances uses Serverless Continuous Backup. If this parameter is false, the serverless instance uses Basic Backup. | Option | Description | |---|---| | Serverless Continuous Backup | Atlas takes incremental snapshots of the data in your serverless instance every six hours and lets you restore the data from a selected point in time within the last 72 hours. Atlas also takes daily snapshots and retains these daily snapshots for 35 days. To learn more, see Serverless Instance Costs. | | Basic Backup | Atlas takes incremental snapshots of the data in your serverless instance every six hours and retains only the two most recent snapshots. You can use this option for free.
   *
   * @schema CfnServerlessInstanceProps#ContinuousBackupEnabled
   */
  readonly continuousBackupEnabled?: boolean;

  /**
   * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
   *
   * @schema CfnServerlessInstanceProps#IncludeCount
   */
  readonly includeCount?: boolean;

  /**
   * Number of items that the response returns per page.
   *
   * @schema CfnServerlessInstanceProps#ItemsPerPage
   */
  readonly itemsPerPage?: number;

  /**
   * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
   *
   * @schema CfnServerlessInstanceProps#Links
   */
  readonly links?: Link[];

  /**
   * Human-readable label that identifies the serverless instance.
   *
   * @schema CfnServerlessInstanceProps#Name
   */
  readonly name?: string;

  /**
   * Number of the page that displays the current set of the total objects that the response returns.
   *
   * @schema CfnServerlessInstanceProps#PageNum
   */
  readonly pageNum?: number;

  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnServerlessInstanceProps#ProjectID
   */
  readonly projectId?: string;

  /**
   * Group of settings that configure the provisioned MongoDB serverless instance. The options available relate to the cloud service provider.
   *
   * @schema CfnServerlessInstanceProps#ProviderSettings
   */
  readonly providerSettings?: ServerlessInstanceProviderSettings;

  /**
   * Flag that indicates whether termination protection is enabled on the serverless instance. If set to true, MongoDB Cloud won't delete the serverless instance. If set to false, MongoDB cloud will delete the serverless instance."
   *
   * @schema CfnServerlessInstanceProps#TerminationProtectionEnabled
   */
  readonly terminationProtectionEnabled?: boolean;

  /**
   * Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used
   *
   * @schema CfnServerlessInstanceProps#Profile
   */
  readonly profile?: string;

}

/**
 * Converts an object of type 'CfnServerlessInstanceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnServerlessInstanceProps(obj: CfnServerlessInstanceProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionStrings': toJson_ServerlessInstanceConnectionStrings(obj.connectionStrings),
    'ContinuousBackupEnabled': obj.continuousBackupEnabled,
    'IncludeCount': obj.includeCount,
    'ItemsPerPage': obj.itemsPerPage,
    'Links': obj.links?.map(y => toJson_Link(y)),
    'Name': obj.name,
    'PageNum': obj.pageNum,
    'ProjectID': obj.projectId,
    'ProviderSettings': toJson_ServerlessInstanceProviderSettings(obj.providerSettings),
    'TerminationProtectionEnabled': obj.terminationProtectionEnabled,
    'Profile': obj.profile,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServerlessInstanceConnectionStrings
 */
export interface ServerlessInstanceConnectionStrings {
  /**
   * List of private endpoint connection strings that you can use to connect to this serverless instance through a private endpoint. This parameter returns only if you created a private endpoint for this serverless instance and it is AVAILABLE.
   *
   * @schema ServerlessInstanceConnectionStrings#PrivateEndpoint
   */
  readonly privateEndpoint?: ServerlessInstancePrivateEndpoint[];

  /**
   * Public connection string that you can use to connect to this serverless instance. This connection string uses the `mongodb+srv://` protocol.
   *
   * @schema ServerlessInstanceConnectionStrings#StandardSrv
   */
  readonly standardSrv?: string;

}

/**
 * Converts an object of type 'ServerlessInstanceConnectionStrings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServerlessInstanceConnectionStrings(obj: ServerlessInstanceConnectionStrings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrivateEndpoint': obj.privateEndpoint?.map(y => toJson_ServerlessInstancePrivateEndpoint(y)),
    'StandardSrv': obj.standardSrv,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Link
 */
export interface Link {
  /**
   * Uniform Resource Locator (URL) that points another API resource to which this response has some relationship. This URL often begins with `https://mms.mongodb.com`.
   *
   * @schema Link#Href
   */
  readonly href?: string;

  /**
   * Uniform Resource Locator (URL) that defines the semantic relationship between this resource and another API resource. This URL often begins with `https://mms.mongodb.com`.
   *
   * @schema Link#Rel
   */
  readonly rel?: string;

}

/**
 * Converts an object of type 'Link' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Link(obj: Link | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Href': obj.href,
    'Rel': obj.rel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServerlessInstanceProviderSettings
 */
export interface ServerlessInstanceProviderSettings {
  /**
   * Human-readable label that identifies the cloud service provider.
   *
   * @schema ServerlessInstanceProviderSettings#ProviderName
   */
  readonly providerName?: ServerlessInstanceProviderSettingsProviderName;

  /**
   * Human-readable label that identifies the geographic location of your MongoDB serverless instance. The region you choose can affect network latency for clients accessing your databases. For a complete list of region names, see [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/#std-label-amazon-aws), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), and [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
   *
   * @schema ServerlessInstanceProviderSettings#RegionName
   */
  readonly regionName?: string;

}

/**
 * Converts an object of type 'ServerlessInstanceProviderSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServerlessInstanceProviderSettings(obj: ServerlessInstanceProviderSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProviderName': obj.providerName,
    'RegionName': obj.regionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServerlessInstancePrivateEndpoint
 */
export interface ServerlessInstancePrivateEndpoint {
  /**
   * List that contains the private endpoints through which you connect to MongoDB Cloud when you use **connectionStrings.privateEndpoint[n].srvConnectionString**.
   *
   * @schema ServerlessInstancePrivateEndpoint#Endpoints
   */
  readonly endpoints?: ServerlessInstancePrivateEndpointEndpoint[];

  /**
   * Private endpoint-aware connection string that uses the `mongodb+srv://` protocol to connect to MongoDB Cloud through a private endpoint. The `mongodb+srv` protocol tells the driver to look up the seed list of hosts in the Domain Name System (DNS).
   *
   * @schema ServerlessInstancePrivateEndpoint#SrvConnectionString
   */
  readonly srvConnectionString?: string;

  /**
   * MongoDB process type to which your application connects.
   *
   *
   * @schema ServerlessInstancePrivateEndpoint#Type
   */
  readonly type?: ServerlessInstancePrivateEndpointType;

}

/**
 * Converts an object of type 'ServerlessInstancePrivateEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServerlessInstancePrivateEndpoint(obj: ServerlessInstancePrivateEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoints': obj.endpoints?.map(y => toJson_ServerlessInstancePrivateEndpointEndpoint(y)),
    'SrvConnectionString': obj.srvConnectionString,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Human-readable label that identifies the cloud service provider.
 *
 * @schema ServerlessInstanceProviderSettingsProviderName
 */
export enum ServerlessInstanceProviderSettingsProviderName {
  /** SERVERLESS */
  SERVERLESS = 'SERVERLESS',
}

/**
 * @schema ServerlessInstancePrivateEndpointEndpoint
 */
export interface ServerlessInstancePrivateEndpointEndpoint {
  /**
   * Unique provider identifier of the private endpoint.
   *
   *
   * @schema ServerlessInstancePrivateEndpointEndpoint#EndpointId
   */
  readonly endpointId?: string;

  /**
   * Cloud provider where the private endpoint is deployed.
   *
   *
   * @schema ServerlessInstancePrivateEndpointEndpoint#ProviderName
   */
  readonly providerName?: string;

  /**
   * Region where the private endpoint is deployed.
   *
   *
   * @schema ServerlessInstancePrivateEndpointEndpoint#Region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'ServerlessInstancePrivateEndpointEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServerlessInstancePrivateEndpointEndpoint(obj: ServerlessInstancePrivateEndpointEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointId': obj.endpointId,
    'ProviderName': obj.providerName,
    'Region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * MongoDB process type to which your application connects.
 *
 *
 * @schema ServerlessInstancePrivateEndpointType
 */
export enum ServerlessInstancePrivateEndpointType {
  /** MONGOS */
  MONGOS = 'MONGOS',
}


/**
 * A CloudFormation `MongoDB::Atlas::ServerlessInstance`
 *
 * @cloudformationResource MongoDB::Atlas::ServerlessInstance
 * @stability external
 */
export class CfnServerlessInstance extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = 'MongoDB::Atlas::ServerlessInstance';

  /**
   * Resource props.
   */
  public readonly props: CfnServerlessInstanceProps;

  /**
   * Attribute `MongoDB::Atlas::ServerlessInstance.CreateDate`
   */
  public readonly attrCreateDate: string;
  /**
   * Attribute `MongoDB::Atlas::ServerlessInstance.Id`
   */
  public readonly attrId: string;
  /**
   * Attribute `MongoDB::Atlas::ServerlessInstance.TotalCount`
   */
  public readonly attrTotalCount: number;
  /**
   * Attribute `MongoDB::Atlas::ServerlessInstance.StateName`
   */
  public readonly attrStateName: string;
  /**
   * Attribute `MongoDB::Atlas::ServerlessInstance.MongoDBVersion`
   */
  public readonly attrMongoDBVersion: string;

  /**
   * Create a new `MongoDB::Atlas::ServerlessInstance`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: constructs.Construct, id: string, props: CfnServerlessInstanceProps) {
    super(scope, id, { type: CfnServerlessInstance.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnServerlessInstanceProps(props)! });

    this.props = props;

    this.attrCreateDate = cdk.Token.asString(this.getAtt('CreateDate'));
    this.attrId = cdk.Token.asString(this.getAtt('Id'));
    this.attrTotalCount = cdk.Token.asNumber(this.getAtt('TotalCount'));
    this.attrStateName = cdk.Token.asString(this.getAtt('StateName'));
    this.attrMongoDBVersion = cdk.Token.asString(this.getAtt('MongoDBVersion'));
  }
}