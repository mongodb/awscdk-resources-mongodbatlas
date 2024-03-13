// This example creates a search deployment in Atlas using the L1 resource.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnSearchDeployment } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly clusterName: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const searchDeployment = new CfnSearchDeployment(this, 'CfnSearchDeployment', {
        profile: atlasProps.profile,
        clusterName: atlasProps.clusterName,
        projectId: atlasProps.projectId,
        specs: [
            {
              instanceSize: "S30_HIGHCPU_NVME",
              nodeCount: 2,
            },
        ]
    });

  }

  getContextProps(): AtlasStackProps {
      const profile = this.node.tryGetContext('profile') ?? 'default';
    const projectId = this.node.tryGetContext('projectId');
    if (!projectId){
      throw "No context value specified for projectId. Please specify via the cdk context."
    }
    const clusterName = this.node.tryGetContext('clusterName');
    if (!clusterName){
      throw "No context value specified for clusterName. Please specify via the cdk context."
    }

    return {
      projectId,
      profile,
      clusterName
    }
  }

}
