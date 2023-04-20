// This example creates a project in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnProject } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly orgId: string;
  readonly profile: string;
  readonly projName: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const projectRes = new CfnProject(this, 'ProjectResource', {
      name: atlasProps.projName,
      orgId: atlasProps.orgId,
      profile: atlasProps.profile
    });

  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    const projName = this.node.tryGetContext('projName') ?? 'test-proj';
    const profile = this.node.tryGetContext('profile') ?? 'default';

    return {
      projName,
      orgId,
      profile
    }
  }
}
