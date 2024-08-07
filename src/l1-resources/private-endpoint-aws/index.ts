// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Creates one private endpoint for the specified cloud service provider. At this current version only AWS is supported
 *
 * @schema CfnPrivateEndpointAwsProps
 */
export interface CfnPrivateEndpointAwsProps {
  /**
   * The profile is defined in AWS Secret manager. See [Secret Manager Profile setup](../../../examples/profile-secret.yaml)
   *
   * @schema CfnPrivateEndpointAwsProps#Profile
   */
  readonly profile?: string;

  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnPrivateEndpointAwsProps#ProjectId
   */
  readonly projectId: string;

  /**
   * Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to create a private endpoint.
   *
   * @schema CfnPrivateEndpointAwsProps#EndpointServiceId
   */
  readonly endpointServiceId: string;

  /**
   * Unique string that identifies the private endpoint. for AWS is the VPC endpoint ID, example: vpce-xxxxxxxx
   *
   * @schema CfnPrivateEndpointAwsProps#Id
   */
  readonly id?: string;

  /**
   * If this proper is set to TRUE, the cloud formation resource will return success Only if the private connection is Succeeded
   *
   * @schema CfnPrivateEndpointAwsProps#EnforceConnectionSuccess
   */
  readonly enforceConnectionSuccess?: boolean;

  /**
   * State of the Amazon Web Service PrivateLink connection when MongoDB Cloud received this request.
   *
   * @schema CfnPrivateEndpointAwsProps#ConnectionStatus
   */
  readonly connectionStatus?: string;

  /**
   * Error message returned when requesting private connection resource. The resource returns null if the request succeeded.
   *
   * @schema CfnPrivateEndpointAwsProps#ErrorMessage
   */
  readonly errorMessage?: string;
}

/**
 * Converts an object of type 'CfnPrivateEndpointAwsProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnPrivateEndpointAwsProps(
  obj: CfnPrivateEndpointAwsProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Profile: obj.profile,
    ProjectId: obj.projectId,
    EndpointServiceId: obj.endpointServiceId,
    Id: obj.id,
    EnforceConnectionSuccess: obj.enforceConnectionSuccess,
    ConnectionStatus: obj.connectionStatus,
    ErrorMessage: obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::PrivateEndpointAWS`
 *
 * @cloudformationResource MongoDB::Atlas::PrivateEndpointAWS
 * @stability external
 */
export class CfnPrivateEndpointAws extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::PrivateEndpointAWS";

  /**
   * Resource props.
   */
  public readonly props: CfnPrivateEndpointAwsProps;

  /**
   * Create a new `MongoDB::Atlas::PrivateEndpointAWS`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnPrivateEndpointAwsProps
  ) {
    super(scope, id, {
      type: CfnPrivateEndpointAws.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnPrivateEndpointAwsProps(props)!,
    });

    this.props = props;
  }
}
