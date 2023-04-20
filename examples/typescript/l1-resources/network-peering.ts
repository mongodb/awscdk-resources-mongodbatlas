import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnNetworkPeering } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly containerId: string;
  readonly region: string;
  readonly awsAccountId: string;
  readonly routeTableCidrBlock: string;
  readonly vpcId: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const myNetworkPeering = new CfnNetworkPeering(this, 'MyNetworkPeering', {
      projectId: atlasProps.projId,
      profile:  atlasProps.profile,
      containerId: atlasProps.containerId,
      accepterRegionName: atlasProps.region,
      awsAccountId: atlasProps.awsAccountId,
      routeTableCidrBlock: atlasProps.routeTableCidrBlock,
      vpcId: atlasProps.vpcId,
    })
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const containerId = this.node.tryGetContext('containerId');
    const region = this.node.tryGetContext('region');
    const awsAccountId = this.node.tryGetContext('awsAccountId');
    const routeTableCidrBlock = this.node.tryGetContext('routeTableCidrBlock');
    const vpcId = this.node.tryGetContext('vpcId');

    return {
      projId,
      profile,
      containerId,
      region,
      awsAccountId,
      routeTableCidrBlock,
      vpcId
    }
  }
}
