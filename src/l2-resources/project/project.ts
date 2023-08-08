import { Resource, ResourceProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as atlas from "../../index";

export interface ProjectOptions {
  /**
   * Name of the project to create.
   * @default auto-generated.
   */
  readonly projectName?: string;
  /**
   * Unique identifier of the organization within which to create the project.
   * @default auto-generated.
   */
  readonly orgId: string;
  /**
   * Unique 24-hexadecimal digit string that identifies the Atlas user account to be granted the `Project Owner`
   * role on the specified project. If you set this parameter, it overrides the default value of the oldest `Organization Owner`.
   */
  readonly projectOwnerId?: string;
  /**
   * Flag that indicates whether to create the project with default alert settings.
   */
  readonly defaultAlertsSettings?: boolean;
  /**
   * The number of Atlas clusters deployed in the project.
   */
  readonly clusterCount?: number;
  /**
   * Project settings.
   */
  readonly settings?: atlas.ProjectSettings;
  /**
   * Project team.
   */
  readonly teams?: atlas.ProjectTeam[];
  /**
   * Project API keys.
   */
  readonly apiKeys?: atlas.ProjectApiKey[];
}

/**
 * Represents a Project.
 */
export interface IProject {
  /**
   * The identifier of the project.
   */
  readonly projectId: string;
  /**
   * The name of the project.
   */
  readonly projectName: string;
  /**
   * The owner ID of the project.
   */
  readonly projectOwnerId: string;
  /**
   * The number of Atlas clusters deployed in the project.
   */
  readonly clusterCount?: number;
  /**
   * Date and time when MongoDB Cloud created this cluster.
   * @see https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/cluster/docs/README.md#createddate
   */
  readonly created?: string;
}

/**
 * Attributes for fromProjectAttributes().
 */
export interface ProjectAttributes {
  readonly projectId: string;
  readonly projectName: string;
  readonly projectOwnerId: string;
}

/**
 * Properties for the Project.
 */
export interface ProjectProps extends ResourceProps, ProjectOptions {
  readonly profile: string;
}

/**
 * The Project construct.
 */
export class Project extends Resource implements IProject {
  public static fromProjectAttributes(
    scope: Construct,
    id: string,
    attrs: ProjectAttributes
  ): IProject {
    class Import extends Resource {
      public projectId = attrs.projectId;
      public projectName = attrs.projectName;
      public projectOwnerId = attrs.projectOwnerId;
    }
    return new Import(scope, id);
  }
  readonly clusterCount?: number;
  readonly projectId: string;
  readonly created?: string;
  readonly projectOwnerId: string;
  readonly projectName: string;

  constructor(scope: Construct, id: string, props: ProjectProps) {
    super(scope, id);

    this.projectName = props.projectName ?? `project${id}`;
    const resource = new atlas.CfnProject(this, "Resource", {
      ...props,
      profile: props.profile,
      orgId: props.orgId,
      name: this.projectName,
    });
    this.clusterCount = resource.attrClusterCount;
    this.projectId = resource.attrId;
    this.created = resource.attrCreated;
    this.projectOwnerId = resource.attrProjectOwnerId;
  }
}
