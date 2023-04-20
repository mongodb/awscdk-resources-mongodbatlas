import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnPrivateEndPointRegionalMode } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const myPrivateEndpointAdl = new CfnPrivateEndPointRegionalMode(this, 'MyPrivateEndpointAdl', {
      projectId: atlasProps.projId,
      profile:  atlasProps.profile,
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';


    return {
      projId,
      profile,
    }
  }
}
