// This example creates a project and a cluster in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AtlasBasicPrivateEndpoint } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly orgId: string;
  readonly profile: string;
  readonly clusterName: string;
  readonly region: string;
  readonly ip: string;
  readonly vpcId: string;
  readonly subnetId: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const atlasBasicPrivateEndpointasBasic = new AtlasBasicPrivateEndpoint(this, 'AtlasBasic', {
      atlasBasicProps: {
        clusterProps: {
        name: atlasProps.clusterName,  
        replicationSpecs:   [
        {
            numShards: 1,
            advancedRegionConfigs: [
                {
                    analyticsSpecs: {
                        ebsVolumeType: "STANDARD",
                        instanceSize: "M10",
                        nodeCount: 1
                    },
                    electableSpecs: {
                        ebsVolumeType: "STANDARD",
                        instanceSize: "M10",
                        nodeCount: 3
                    },
                    priority:  7,
                    regionName: atlasProps.region,
                }]
        }]        
        },
        projectProps: {
          orgId: atlasProps.orgId,
        },
    
        ipAccessListProps: {
          accessList:[
            { ipAddress: atlasProps.ip, comment: 'My first IP address' }
          ]
        }
      },
      privateEndpointProps: {
        privateEndpoints: [
          {
            vpcId: atlasProps.vpcId,
            subnetIds: [atlasProps.subnetId],
          }
  
        ]
      },
      profile: atlasProps.profile,
      
    });

  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const clusterName = this.node.tryGetContext('clusterName') ?? 'test-cluster';
    const region = this.node.tryGetContext('region') ?? "US_EAST_1";
    const ip = this.node.tryGetContext('ip');
    const vpcId = this.node.tryGetContext('vpcId');
    const subnetId = this.node.tryGetContext('subnetId');

    return {
      orgId,
      profile,
      clusterName,
      region,
      ip,
      vpcId,
      subnetId
    }
  }
}
