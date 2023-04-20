import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PagerDutyIntegration,  PagerDutyRegion} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly serviceKey: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const atlasProps = this.getContextProps();

    const myPagerDutyIntegration = new PagerDutyIntegration(this, 'MyPagerDutyIntegration', {
        projectId: atlasProps.projId,
        profile:  atlasProps.profile,
        region: PagerDutyRegion.EU,
        serviceKey:   atlasProps.serviceKey,  
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const serviceKey = this.node.tryGetContext('serviceKey');


    return {
      projId,
      profile,
      serviceKey,
    }
  }
}
