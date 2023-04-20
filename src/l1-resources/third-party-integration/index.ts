// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Returns, adds, edits, and removes third-party service integration configurations. MongoDB Cloud sends alerts to each third-party service that you configure.
 *
 * @schema CfnThirdPartyIntegrationProps
 */
export interface CfnThirdPartyIntegrationProps {
  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnThirdPartyIntegrationProps#ProjectId
   */
  readonly projectId?: string;

  /**
   * The profile is defined in AWS Secret manager. See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).
   *
   * @schema CfnThirdPartyIntegrationProps#Profile
   */
  readonly profile?: string;

  /**
   * Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.
   *
   * @schema CfnThirdPartyIntegrationProps#Type
   */
  readonly type?: CfnThirdPartyIntegrationPropsType;

  /**
   * Key that allows MongoDB Cloud to access your Opsgenie/Datadog account.
   *
   * @schema CfnThirdPartyIntegrationProps#ApiKey
   */
  readonly apiKey?: string;

  /**
   * Two-letter code that indicates which regional URL MongoDB uses to access the Opsgenie/Datadog API.
   *
   * @schema CfnThirdPartyIntegrationProps#Region
   */
  readonly region?: string;

  /**
   * Service key associated with your PagerDuty account.
   *
   * @schema CfnThirdPartyIntegrationProps#ServiceKey
   */
  readonly serviceKey?: string;

  /**
   * Key that allows MongoDB Cloud to access your Slack account.
   *
   * @schema CfnThirdPartyIntegrationProps#ApiToken
   */
  readonly apiToken?: string;

  /**
   * Human-readable label that identifies your Slack team. Set this parameter when you configure a legacy Slack integration.
   *
   * @schema CfnThirdPartyIntegrationProps#TeamName
   */
  readonly teamName?: string;

  /**
   * Name of the Slack channel to which MongoDB Cloud sends alert notifications.
   *
   * @schema CfnThirdPartyIntegrationProps#ChannelName
   */
  readonly channelName?: string;

  /**
   * Routing key associated with your Splunk On-Call account.
   *
   * @schema CfnThirdPartyIntegrationProps#RoutingKey
   */
  readonly routingKey?: string;

  /**
   * Endpoint web address to which MongoDB Cloud sends notifications.
   *
   * @schema CfnThirdPartyIntegrationProps#Url
   */
  readonly url?: string;

  /**
   * Parameter returned if someone configure this webhook with a secret.
   *
   * @schema CfnThirdPartyIntegrationProps#Secret
   */
  readonly secret?: string;

  /**
   * Endpoint web address of the Microsoft Teams webhook to which MongoDB Cloud sends notifications.
   *
   * @schema CfnThirdPartyIntegrationProps#MicrosoftTeamsWebhookUrl
   */
  readonly microsoftTeamsWebhookUrl?: string;

  /**
   * Human-readable label that identifies your Prometheus incoming webhook.
   *
   * @schema CfnThirdPartyIntegrationProps#UserName
   */
  readonly userName?: string;

  /**
   * Password required for your integration with Prometheus
   *
   * @schema CfnThirdPartyIntegrationProps#Password
   */
  readonly password?: string;

  /**
   * Desired method to discover the Prometheus service.
   *
   * @schema CfnThirdPartyIntegrationProps#ServiceDiscovery
   */
  readonly serviceDiscovery?: CfnThirdPartyIntegrationPropsServiceDiscovery;

  /**
   * Security Scheme to apply to HyperText Transfer Protocol (HTTP) traffic between Prometheus and MongoDB Cloud.
   *
   * @schema CfnThirdPartyIntegrationProps#Scheme
   */
  readonly scheme?: CfnThirdPartyIntegrationPropsScheme;

  /**
   * Flag that indicates whether someone has activated the Prometheus integration.
   *
   * @schema CfnThirdPartyIntegrationProps#Enabled
   */
  readonly enabled?: boolean;

  /**
   * Combination of IPv4 address and Internet Assigned Numbers Authority (IANA) port or the IANA port alone to which Prometheus binds to ingest MongoDB metrics.
   *
   * @schema CfnThirdPartyIntegrationProps#ListenAddress
   */
  readonly listenAddress?: string;

  /**
   * Root-relative path to the Transport Layer Security (TLS) Privacy Enhanced Mail (PEM) key and certificate file on the host.
   *
   * @schema CfnThirdPartyIntegrationProps#TlsPemPath
   */
  readonly tlsPemPath?: string;
}

/**
 * Converts an object of type 'CfnThirdPartyIntegrationProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnThirdPartyIntegrationProps(
  obj: CfnThirdPartyIntegrationProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    ProjectId: obj.projectId,
    Profile: obj.profile,
    Type: obj.type,
    ApiKey: obj.apiKey,
    Region: obj.region,
    ServiceKey: obj.serviceKey,
    ApiToken: obj.apiToken,
    TeamName: obj.teamName,
    ChannelName: obj.channelName,
    RoutingKey: obj.routingKey,
    Url: obj.url,
    Secret: obj.secret,
    MicrosoftTeamsWebhookUrl: obj.microsoftTeamsWebhookUrl,
    UserName: obj.userName,
    Password: obj.password,
    ServiceDiscovery: obj.serviceDiscovery,
    Scheme: obj.scheme,
    Enabled: obj.enabled,
    ListenAddress: obj.listenAddress,
    TlsPemPath: obj.tlsPemPath,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.
 *
 * @schema CfnThirdPartyIntegrationPropsType
 */
export enum CfnThirdPartyIntegrationPropsType {
  /** PAGER_DUTY */
  PAGER_DUTY = "PAGER_DUTY",
  /** MICROSOFT_TEAMS */
  MICROSOFT_TEAMS = "MICROSOFT_TEAMS",
  /** SLACK */
  SLACK = "SLACK",
  /** DATADOG */
  DATADOG = "DATADOG",
  /** OPS_GENIE */
  OPS_GENIE = "OPS_GENIE",
  /** VICTOR_OPS */
  VICTOR_OPS = "VICTOR_OPS",
  /** WEBHOOK */
  WEBHOOK = "WEBHOOK",
  /** PROMETHEUS */
  PROMETHEUS = "PROMETHEUS",
}

/**
 * Desired method to discover the Prometheus service.
 *
 * @schema CfnThirdPartyIntegrationPropsServiceDiscovery
 */
export enum CfnThirdPartyIntegrationPropsServiceDiscovery {
  /** http */
  HTTP = "http",
  /** file */
  FILE = "file",
}

/**
 * Security Scheme to apply to HyperText Transfer Protocol (HTTP) traffic between Prometheus and MongoDB Cloud.
 *
 * @schema CfnThirdPartyIntegrationPropsScheme
 */
export enum CfnThirdPartyIntegrationPropsScheme {
  /** http */
  HTTP = "http",
  /** https */
  HTTPS = "https",
}

/**
 * A CloudFormation `MongoDB::Atlas::ThirdPartyIntegration`
 *
 * @cloudformationResource MongoDB::Atlas::ThirdPartyIntegration
 * @stability external
 */
export class CfnThirdPartyIntegration extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::ThirdPartyIntegration";

  /**
   * Resource props.
   */
  public readonly props: CfnThirdPartyIntegrationProps;

  /**
   * Create a new `MongoDB::Atlas::ThirdPartyIntegration`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnThirdPartyIntegrationProps
  ) {
    super(scope, id, {
      type: CfnThirdPartyIntegration.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnThirdPartyIntegrationProps(props)!,
    });

    this.props = props;
  }
}
