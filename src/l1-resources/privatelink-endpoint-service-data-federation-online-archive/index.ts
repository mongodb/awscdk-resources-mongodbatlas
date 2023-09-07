// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Adds one private endpoint for Federated Database Instances and Online Archives to the specified projects.
 *
 * @schema CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps
 */
export interface CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps {
  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps#ProjectId
   */
  readonly projectId: string;

  /**
   * Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used
   *
   * @schema CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps#Profile
   */
  readonly profile?: string;

  /**
   * Unique 22-character alphanumeric string that identifies the private endpoint.Reg ex ^vpce-[0-9a-f]{17}$ .
   *
   * Atlas Data Lake supports Amazon Web Services private endpoints using the AWS PrivateLink feature.
   *
   * @schema CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps#EndpointId
   */
  readonly endpointId: string;

  /**
   * Human-readable label that identifies the resource type associated with this private endpoint.
   *
   * @schema CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps#Type
   */
  readonly type?: string;

  /**
   * Human-readable string to associate with this private endpoint.
   *
   * @schema CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps#Comment
   */
  readonly comment?: string;
}

/**
 * Converts an object of type 'CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps(
  obj: CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    ProjectId: obj.projectId,
    Profile: obj.profile,
    EndpointId: obj.endpointId,
    Type: obj.type,
    Comment: obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::PrivatelinkEndpointServiceDataFederationOnlineArchive`
 *
 * @cloudformationResource MongoDB::Atlas::PrivatelinkEndpointServiceDataFederationOnlineArchive
 * @stability external
 */
export class CfnPrivatelinkEndpointServiceDataFederationOnlineArchive extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::PrivatelinkEndpointServiceDataFederationOnlineArchive";

  /**
   * Resource props.
   */
  public readonly props: CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps;

  /**
   * Create a new `MongoDB::Atlas::PrivatelinkEndpointServiceDataFederationOnlineArchive`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps
  ) {
    super(scope, id, {
      type: CfnPrivatelinkEndpointServiceDataFederationOnlineArchive.CFN_RESOURCE_TYPE_NAME,
      properties:
        toJson_CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps(
          props
        )!,
    });

    this.props = props;
  }
}
