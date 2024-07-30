// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Creates one private endpoint service for the specified cloud service provider. This cloud service provider manages the private endpoint service for the project. When you create a private endpoint service, MongoDB Cloud creates a network container in the project for the cloud provider for which you create the private endpoint service if one doesn't already exist.
 *
 * @schema CfnPrivateEndpointServiceProps
 */
export interface CfnPrivateEndpointServiceProps {
  /**
   * The profile is defined in AWS Secret manager. See [Secret Manager Profile setup](../../../examples/profile-secret.yaml)
   *
   * @schema CfnPrivateEndpointServiceProps#Profile
   */
  readonly profile?: string;

  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnPrivateEndpointServiceProps#ProjectId
   */
  readonly projectId: string;

  /**
   * Aws Region
   *
   * @schema CfnPrivateEndpointServiceProps#Region
   */
  readonly region: string;

  /**
   * Cloud service provider that manages this private endpoint, default : AWS
   *
   * @schema CfnPrivateEndpointServiceProps#CloudProvider
   */
  readonly cloudProvider: CfnPrivateEndpointServicePropsCloudProvider;
}

/**
 * Converts an object of type 'CfnPrivateEndpointServiceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnPrivateEndpointServiceProps(
  obj: CfnPrivateEndpointServiceProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Profile: obj.profile,
    ProjectId: obj.projectId,
    Region: obj.region,
    CloudProvider: obj.cloudProvider,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Cloud service provider that manages this private endpoint, default : AWS
 *
 * @schema CfnPrivateEndpointServicePropsCloudProvider
 */
export enum CfnPrivateEndpointServicePropsCloudProvider {
  /** AWS */
  AWS = "AWS",
  /** AZURE */
  AZURE = "AZURE",
  /** GCP */
  GCP = "GCP",
}

/**
 * A CloudFormation `MongoDB::Atlas::PrivateEndpointService`
 *
 * @cloudformationResource MongoDB::Atlas::PrivateEndpointService
 * @stability external
 */
export class CfnPrivateEndpointService extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::PrivateEndpointService";

  /**
   * Resource props.
   */
  public readonly props: CfnPrivateEndpointServiceProps;

  /**
   * Attribute `MongoDB::Atlas::PrivateEndpointService.Id`
   */
  public readonly attrId: string;
  /**
   * Attribute `MongoDB::Atlas::PrivateEndpointService.EndpointServiceName`
   */
  public readonly attrEndpointServiceName: string;
  /**
   * Attribute `MongoDB::Atlas::PrivateEndpointService.ErrorMessage`
   */
  public readonly attrErrorMessage: string;
  /**
   * Attribute `MongoDB::Atlas::PrivateEndpointService.Status`
   */
  public readonly attrStatus: string;
  /**
   * Attribute `MongoDB::Atlas::PrivateEndpointService.InterfaceEndpoints`
   */
  public readonly attrInterfaceEndpoints: string[];

  /**
   * Create a new `MongoDB::Atlas::PrivateEndpointService`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnPrivateEndpointServiceProps
  ) {
    super(scope, id, {
      type: CfnPrivateEndpointService.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnPrivateEndpointServiceProps(props)!,
    });

    this.props = props;

    this.attrId = cdk.Token.asString(this.getAtt("Id"));
    this.attrEndpointServiceName = cdk.Token.asString(
      this.getAtt("EndpointServiceName")
    );
    this.attrErrorMessage = cdk.Token.asString(this.getAtt("ErrorMessage"));
    this.attrStatus = cdk.Token.asString(this.getAtt("Status"));
    this.attrInterfaceEndpoints = cdk.Token.asList(
      this.getAtt("InterfaceEndpoints")
    );
  }
}
