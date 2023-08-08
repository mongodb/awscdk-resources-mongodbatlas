import { Resource, ResourceProps, IResource } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as atlas from "../../index";

export interface AccessList {
  readonly ipAddress: string;
  readonly comment: string;
}

export interface ProjectIpAccessListOptions {
  /**
   * Access list definition.
   */
  readonly accessList: atlas.AccessListDefinition[];
  /**
   * Number of documents returned in this response.
   */
  readonly totalCount?: number;
  /**
   * List options.
   */
  readonly listOptions?: atlas.ListOptions;
}

export interface IProjectIpAccessList extends IResource {}

export interface IpAccessListAttributes {
  readonly userCFNIdentifier: string;
  readonly dabataseUserName: string;
}

export interface ProjectIpAccessListProps
  extends ResourceProps,
    ProjectIpAccessListOptions {
  readonly profile: string;
  readonly project: atlas.IProject;
}

export class ProjectIpAccessList
  extends Resource
  implements IProjectIpAccessList
{
  public static fromIpAccessListAttributes(
    scope: Construct,
    id: string,
    attrs: IpAccessListAttributes
  ): IProjectIpAccessList {
    class Import extends Resource {
      public userCFNIdentifier = attrs.userCFNIdentifier;
      public dabataseUserName = attrs.dabataseUserName;
    }
    return new Import(scope, id);
  }

  constructor(scope: Construct, id: string, props: ProjectIpAccessListProps) {
    super(scope, id);

    new atlas.CfnProjectIpAccessList(this, "Resource", {
      ...props,
      projectId: props.project.projectId,
      profile: props.profile,
      accessList: props.accessList,
    });
  }
}
