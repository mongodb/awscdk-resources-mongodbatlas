import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnNetworkContainer } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly atlasCidrBlock: string;
  readonly region: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  const atlasProps = this.getContextProps();

  const myNetworkContainer = new CfnNetworkContainer(this, 'MyNetworkContainer', {
    projectId: atlasProps.projId,
    profile: atlasProps.profile,
    atlasCidrBlock: atlasProps.atlasCidrBlock,
    regionName: atlasProps.region,
  });

}

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const atlasCidrBlock = this.node.tryGetContext('atlasCidrBlock');
    const region = this.node.tryGetContext('region');

    return {
      projId,
      profile,
      atlasCidrBlock,
      region
    }
  }
}
