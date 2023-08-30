import * as cdk from "aws-cdk-lib";
import { Construct } from 'constructs';
import { CfnApiKey,CfnApiKeyProps,ProjectAssignment,ListOptions} from 'awscdk-resources-mongodbatlas';



const app = new cdk.App();

interface AtlasStackProps {
  readonly orgId: string;
  readonly profile: string;
  readonly description: string;
  readonly awsSecretName: string;
}
const proAssignments: ProjectAssignment[] = [{
    "projectId": "64ee3fcfaa95ad6b7e358d56",
    "roles": [
      "GROUP_READ_ONLY"
    ]
  },
  {
    "projectId": "64ee3fd58bb58153335e8469",
    "roles": [
      "GROUP_SEARCH_INDEX_EDITOR",
      "GROUP_OWNER",
      "GROUP_READ_ONLY"
    ]
  }];

const listOptions : ListOptions = {
    "pageNum": 1,
    "itemsPerPage": 300
} 
const Roles = ["ORG_MEMBER","ORG_GROUP_CREATOR"]
export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const apiKeyProps = new CfnApiKey(this, 'api-key', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      description: atlasProps.description,
      awsSecretName: atlasProps.awsSecretName,
      proAssignments: proAssignments,
      listOptions: listOptions,
      roles: Roles
    });
  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId){
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
    }
  }
}