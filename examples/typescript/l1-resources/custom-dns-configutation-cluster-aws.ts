// This example creates a project in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnCustomDnsConfigurationClusterAws } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const projectRes = new CfnCustomDnsConfigurationClusterAws(this, 'ProjectResource', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      enabled: true
    });

  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';

    return {
      projId,
      profile
    }
  }
}
