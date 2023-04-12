import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnThirdPartyIntegration,  CfnThirdPartyIntegrationPropsType} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly url: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const atlasProps = this.getContextProps();
    const thirdPartyIntegration = new CfnThirdPartyIntegration(this, 'ThirdPartyIntegration', {
      projectId: atlasProps.projId,
      profile:  atlasProps.profile,
      type: CfnThirdPartyIntegrationPropsType.WEBHOOK,
      url: atlasProps.url,
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const url = this.node.tryGetContext('url');


    return {
      projId,
      profile,
      url,
    }
  }
}
