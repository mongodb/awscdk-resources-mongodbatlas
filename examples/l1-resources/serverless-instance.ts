import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnServerlessInstance,  ServerlessInstanceProviderSettingsProviderName} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly name: string;
  readonly projId: string;
  readonly profile: string;
  readonly continuousBackupEnabled: boolean;
  readonly terminationProtectionEnabled: boolean;
  readonly region: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const myServerlessInstance = new CfnServerlessInstance(this, 'MyServerlessInstance', {
      name: atlasProps.name,
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      continuousBackupEnabled: atlasProps.continuousBackupEnabled,
      providerSettings: {
        providerName: ServerlessInstanceProviderSettingsProviderName.SERVERLESS,
        regionName: atlasProps.region
      },
      terminationProtectionEnabled: atlasProps.terminationProtectionEnabled   
     });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }

    const name = this.node.tryGetContext('name') ?? 'default';
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const terminationProtectionEnabled = this.node.tryGetContext('terminationProtectionEnabled') ?? false;
    const continuousBackupEnabled = this.node.tryGetContext('continuousBackupEnabled') ?? false;
    const region = this.node.tryGetContext('region') ?? "EU_WEST_1";

    return {
      name,
      projId,
      profile,
      terminationProtectionEnabled,
      continuousBackupEnabled,
      region
    }
  }
}
