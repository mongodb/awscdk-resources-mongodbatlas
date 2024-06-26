// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Returns, adds, edits, and removes one connection for a stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
 *
 * @schema CfnStreamConnectionProps
 */
export interface CfnStreamConnectionProps {
  /**
   * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.
   *
   * **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
   *
   * @schema CfnStreamConnectionProps#ProjectId
   */
  readonly projectId: string;

  /**
   * Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used
   *
   * @schema CfnStreamConnectionProps#Profile
   */
  readonly profile?: string;

  /**
   * Human-readable label that identifies the stream connection. In the case of the Sample type, this is the name of the sample source.
   *
   * @schema CfnStreamConnectionProps#ConnectionName
   */
  readonly connectionName: string;

  /**
   * Human-readable label that identifies the stream instance.
   *
   * @schema CfnStreamConnectionProps#InstanceName
   */
  readonly instanceName: string;

  /**
   * Type of the connection. Can be either Cluster, Kafka, or Sample.
   *
   * @schema CfnStreamConnectionProps#Type
   */
  readonly type: CfnStreamConnectionPropsType;

  /**
   * Name of the cluster configured for this connection.
   *
   * @schema CfnStreamConnectionProps#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema CfnStreamConnectionProps#DbRoleToExecute
   */
  readonly dbRoleToExecute?: DbRoleToExecute;

  /**
   * @schema CfnStreamConnectionProps#Authentication
   */
  readonly authentication?: StreamsKafkaAuthentication;

  /**
   * Comma separated list of server addresses.
   *
   * @schema CfnStreamConnectionProps#BootstrapServers
   */
  readonly bootstrapServers?: string;

  /**
   * @schema CfnStreamConnectionProps#Security
   */
  readonly security?: StreamsKafkaSecurity;

  /**
   * @schema CfnStreamConnectionProps#Config
   */
  readonly config?: any;
}

/**
 * Converts an object of type 'CfnStreamConnectionProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnStreamConnectionProps(
  obj: CfnStreamConnectionProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    ProjectId: obj.projectId,
    Profile: obj.profile,
    ConnectionName: obj.connectionName,
    InstanceName: obj.instanceName,
    Type: obj.type,
    ClusterName: obj.clusterName,
    DbRoleToExecute: toJson_DbRoleToExecute(obj.dbRoleToExecute),
    Authentication: toJson_StreamsKafkaAuthentication(obj.authentication),
    BootstrapServers: obj.bootstrapServers,
    Security: toJson_StreamsKafkaSecurity(obj.security),
    Config: obj.config,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Type of the connection. Can be either Cluster, Kafka, or Sample.
 *
 * @schema CfnStreamConnectionPropsType
 */
export enum CfnStreamConnectionPropsType {
  /** Kafka */
  KAFKA = "Kafka",
  /** Cluster */
  CLUSTER = "Cluster",
  /** Sample */
  SAMPLE = "Sample",
}

/**
 * The name of a Built in or Custom DB Role to connect to an Atlas Cluster.
 *
 * @schema DBRoleToExecute
 */
export interface DbRoleToExecute {
  /**
   * The name of the role to use. Can be a built in role or a custom role.
   *
   * @schema DBRoleToExecute#Role
   */
  readonly role?: string;

  /**
   * Type of the DB role. Can be either BuiltIn or Custom.
   *
   * @schema DBRoleToExecute#Type
   */
  readonly type?: DbRoleToExecuteType;
}

/**
 * Converts an object of type 'DbRoleToExecute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DbRoleToExecute(
  obj: DbRoleToExecute | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Role: obj.role,
    Type: obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * User credentials required to connect to a Kafka Cluster. Includes the authentication type, as well as the parameters for that authentication mode.
 *
 * @schema StreamsKafkaAuthentication
 */
export interface StreamsKafkaAuthentication {
  /**
   * Style of authentication. Can be one of PLAIN, SCRAM-256, or SCRAM-512.
   *
   * @schema StreamsKafkaAuthentication#Mechanism
   */
  readonly mechanism?: string;

  /**
   * Username of the account to connect to the Kafka cluster.
   *
   * @schema StreamsKafkaAuthentication#Username
   */
  readonly username?: string;

  /**
   * Password of the account to connect to the Kafka cluster. Review [AWS security best practices for CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/security-best-practices.html#creds) to manage credentials.
   *
   * @schema StreamsKafkaAuthentication#Password
   */
  readonly password?: string;
}

/**
 * Converts an object of type 'StreamsKafkaAuthentication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StreamsKafkaAuthentication(
  obj: StreamsKafkaAuthentication | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Mechanism: obj.mechanism,
    Username: obj.username,
    Password: obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Properties for the secure transport connection to Kafka. For SSL, this can include the trusted certificate to use.
 *
 * @schema StreamsKafkaSecurity
 */
export interface StreamsKafkaSecurity {
  /**
   * A trusted, public x509 certificate for connecting to Kafka over SSL.
   *
   * @schema StreamsKafkaSecurity#BrokerPublicCertificate
   */
  readonly brokerPublicCertificate?: string;

  /**
   * Describes the transport type. Can be either PLAINTEXT or SSL.
   *
   * @schema StreamsKafkaSecurity#Protocol
   */
  readonly protocol?: string;
}

/**
 * Converts an object of type 'StreamsKafkaSecurity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StreamsKafkaSecurity(
  obj: StreamsKafkaSecurity | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    BrokerPublicCertificate: obj.brokerPublicCertificate,
    Protocol: obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Type of the DB role. Can be either BuiltIn or Custom.
 *
 * @schema DbRoleToExecuteType
 */
export enum DbRoleToExecuteType {
  /** BUILT_IN */
  BUILT_IN = "BUILT_IN",
  /** CUSTOM */
  CUSTOM = "CUSTOM",
}

/**
 * A CloudFormation `MongoDB::Atlas::StreamConnection`
 *
 * @cloudformationResource MongoDB::Atlas::StreamConnection
 * @stability external
 */
export class CfnStreamConnection extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::StreamConnection";

  /**
   * Resource props.
   */
  public readonly props: CfnStreamConnectionProps;

  /**
   * Create a new `MongoDB::Atlas::StreamConnection`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnStreamConnectionProps
  ) {
    super(scope, id, {
      type: CfnStreamConnection.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnStreamConnectionProps(props)!,
    });

    this.props = props;
  }
}
