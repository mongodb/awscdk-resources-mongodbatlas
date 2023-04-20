import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnLdapConfiguration } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly bindUsername: string;
  readonly bindPassword: string;
  readonly hostname: string;
  readonly port: string;
  readonly authenticationEnabled: boolean;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const ldapConfig = new CfnLdapConfiguration(this, 'CfnLdapConfiguration', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      bindPassword: atlasProps.bindPassword,
      bindUsername: atlasProps.bindUsername,
      hostname: atlasProps.hostname,
      port: atlasProps.port,
      authenticationEnabled: atlasProps.authenticationEnabled,
    });

  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const bindUsername = this.node.tryGetContext('bindUsername');
    const bindPassword = this.node.tryGetContext('bindPassword');
    const hostname = this.node.tryGetContext('hostname');
    const port = this.node.tryGetContext('port');
    const authenticationEnabled = this.node.tryGetContext('authenticationEnabled');

    return {
      projId,
      profile,
      bindUsername,
      bindPassword,
      hostname,
      port,
      authenticationEnabled
    }
  }
}
