import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnCloudOutageSimulation,CfnCloudOutageSimulationProps,FilterCloudProvider } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly clusterName: string;
}

export class CdkTestingStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      const atlasProps = this.getContextProps();
      const cloudoutstagesimulation = new CfnCloudOutageSimulation(this, 'cloud-outstage-simulation', {
          projectId: atlasProps.projectId,
          profile: atlasProps.profile,
          clusterName: atlasProps.clusterName,
          outageFilters : [
            {
              "cloudProvider": FilterCloudProvider.AWS,
              "region": "US_WEST_1",
              "type": "REGION"
            }
          ]
          
        });
    }
  
    getContextProps(): AtlasStackProps {
      const projectId = this.node.tryGetContext('projectId');
      if (!projectId){
        throw "No context value specified for projId. Please specify via the cdk context."
      }

      const profile = this.node.tryGetContext('profile') ?? 'default';
      const clusterName = this.node.tryGetContext('clusterName')
      
      return {
        projectId,
        profile,
        clusterName
      }
    }
  }
  