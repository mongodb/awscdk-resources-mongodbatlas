import * as cdk from "aws-cdk-lib";
import { Construct } from 'constructs';
import { CfnApiKey, CfnApiKeyProps, ProjectAssignment, ListOptions } from 'awscdk-resources-mongodbatlas';

const app = new cdk.App();

interface AtlasStackProps {
  readonly orgId: string;
  readonly profile: string;
  readonly description: string;
  readonly awsSecretName: string;
  readonly projectId: string;
}

const Roles = ["ORG_MEMBER", "ORG_GROUP_CREATOR"]
export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    new CfnApiKey(this, 'api-key', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      description: atlasProps.description,
      awsSecretName: atlasProps.awsSecretName,
      projectAssignments: [{
        projectId: atlasProps.projectId,
        "roles": [
          "GROUP_READ_ONLY"
        ]
      }],
      roles: Roles
    });
  }

  getContextProps(): AtlasStackProps {
    const projectId = this.node.tryGetContext('projId');
    if (!projectId) {
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const orgId = this.node.tryGetContext('orgId');
    if (!orgId) {
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const description = this.node.tryGetContext('description');
    const awsSecretName = this.node.tryGetContext('awsSecretName');
    return {
      orgId,
      profile,
      description,
      awsSecretName,
      projectId
    }
  }
}
