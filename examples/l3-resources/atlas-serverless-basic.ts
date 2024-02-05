// This CDK L3 example creates a MongoDB Atlas project, cluster, databaseUser, and projectIpAccessList
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AtlasServerlessBasic, ServerlessInstanceProviderSettingsProviderName } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly orgId: string;
  readonly projectId: string;
  readonly profile: string;
  readonly region: string;
  readonly ip: string;
  readonly continuousBackupEnabled: boolean;
  readonly terminationProtectionEnabled: boolean;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const atlasBasic = new AtlasServerlessBasic(this, 'AtlasServerlessBasic', {
        serverlessProps: { 
          projectId: atlasProps.projectId,
          profile:  atlasProps.profile,
          continuousBackupEnabled: atlasProps.continuousBackupEnabled,
          providerSettings: {
            providerName: ServerlessInstanceProviderSettingsProviderName.SERVERLESS,
            regionName: atlasProps.region
          },
          terminationProtectionEnabled: atlasProps.terminationProtectionEnabled
        },
        projectProps: {
          orgId: atlasProps.orgId,
        },
    
        ipAccessListProps: {
          accessList:[
            { ipAddress: atlasProps.ip, comment: 'My first IP address' }
          ]
        },
        profile: atlasProps.profile,
      });

  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    const projectId = this.node.tryGetContext('projectId');
    if (!projectId){
      throw "No context value specified for projectId. Please specify via the cdk context."
    }
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const terminationProtectionEnabled = this.node.tryGetContext('terminationProtectionEnabled');
    const continuousBackupEnabled = this.node.tryGetContext('continuousBackupEnabled');
    const region = this.node.tryGetContext('region') ?? "US_EAST_1";
    const ip = this.node.tryGetContext('ip');
    if (!ip){
      throw "No context value specified for ip. Please specify via the cdk context."
    }

    return {
      orgId,
      projectId,
      terminationProtectionEnabled,
      continuousBackupEnabled,
      profile,
      region,
      ip
    }
  }
}
