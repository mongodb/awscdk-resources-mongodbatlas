import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnPrivateEndpoint } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly region: string;
  readonly vpcId: string;
  readonly subnetId: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const myPrivateEndpoint = new CfnPrivateEndpoint (this, "privateEndpoint", {
      projectId: atlasProps.projId,
      profile:  atlasProps.profile,
      region: atlasProps.region,
      privateEndpoints: [
          {
            vpcId: atlasProps.vpcId,
            subnetIds: [atlasProps.subnetId]
          }
      ],
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const region = this.node.tryGetContext('region');
    const vpcId = this.node.tryGetContext('vpcId');
    const subnetId = this.node.tryGetContext('comment');


    return {
      projId,
      profile,
      region,
      vpcId,
      subnetId,
    }
  }
}
