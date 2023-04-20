import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnPrivateEndpointAdl } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly type: string;
  readonly endpointId: string;
  readonly comment: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const myPrivateEndpointAdl = new CfnPrivateEndpointAdl(this, 'MyPrivateEndpointAdl', {
      projectId: atlasProps.projId,
      profile:  atlasProps.profile,
      provider: 'AWS',
      type: atlasProps.type,
      endpointId: atlasProps.endpointId,
      comment: atlasProps.comment,
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const type = this.node.tryGetContext('type');
    const endpointId = this.node.tryGetContext('endpointId');
    const comment = this.node.tryGetContext('comment');


    return {
      projId,
      profile,
      type,
      endpointId,
      comment,
    }
  }
}
