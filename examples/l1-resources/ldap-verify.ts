import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnLdapVerify } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly bindUsername: string;
  readonly bindPassword: string;
  readonly hostName: string;
  readonly port: number;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const ldapConfig = new CfnLdapVerify(this, 'CfnLdapConfiguration', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      bindPassword: atlasProps.bindPassword,
      bindUsername: atlasProps.bindUsername,
      hostName: atlasProps.hostName,
      port: atlasProps.port
    });

  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId) {
      throw "No context value specified for orgId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const bindUsername = this.node.tryGetContext('bindUsername');
    const bindPassword = this.node.tryGetContext('bindPassword');
    const hostName = this.node.tryGetContext('hostName');
    const port = this.node.tryGetContext('port');

    return {
      projId,
      profile,
      bindUsername,
      bindPassword,
      hostName,
      port
    }
  }
}
