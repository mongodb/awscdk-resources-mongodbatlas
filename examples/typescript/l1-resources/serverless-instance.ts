import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnServerlessInstance,  ServerlessInstanceProviderSettingsProviderName} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly continuousBackupEnabled: string;
  readonly terminationProtectionEnabled: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const myServerlessInstance = new CfnServerlessInstance(this, 'MyServerlessInstance', {
      projectId: atlasProps.projId,
      profile:  atlasProps.profile,
      continuousBackupEnabled: atlasProps.continuousBackupEnabled,
      providerSettings: {
        providerName: ServerlessInstanceProviderSettingsProviderName.SERVERLESS
      },
      terminationProtectionEnabled: atlasProps.terminationProtectionEnabled   
     });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const terminationProtectionEnabled = this.node.tryGetContext('terminationProtectionEnabled');
    const continuousBackupEnabled = this.node.tryGetContext('continuousBackupEnabled');


    return {
      projId,
      profile,
      terminationProtectionEnabled,
      continuousBackupEnabled
    }
  }
}
