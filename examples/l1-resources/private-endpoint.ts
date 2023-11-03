import { CfnPrivateEndpointAws } from './../../src/l1-resources/private-endpoint-aws/index';
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { CfnPrivateEndpointService, CfnPrivateEndpointServicePropsCloudProvider } from '../../src/l1-resources/private-endpoint-service';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly region: string;
  readonly vpcId: string;
  readonly subnetId: string;
}

export class CdkPrivateEndpoint extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const atlasService = new CfnPrivateEndpointService(this, "AtlasPrivateEndpointService", {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      region: atlasProps.region,
      cloudProvider: CfnPrivateEndpointServicePropsCloudProvider.AWS
    });

    const awsPrivateEndpoint = new ec2.CfnVPCEndpoint(this, 'AWSPrivateEndpoint', {
      serviceName: atlasService.attrEndpointServiceName,
      subnetIds: [atlasProps.subnetId],
      vpcEndpointType: 'Interface',
      vpcId: atlasProps.vpcId,
    });

    awsPrivateEndpoint.addDependency(atlasService)
    
    const myPrivateEndpoint = new CfnPrivateEndpointAws (this, "AtlasPrivateEndpoint", {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      endpointServiceId: atlasService.attrId,
      id : awsPrivateEndpoint.ref,
    });

    myPrivateEndpoint.addDependency(myPrivateEndpoint)
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
