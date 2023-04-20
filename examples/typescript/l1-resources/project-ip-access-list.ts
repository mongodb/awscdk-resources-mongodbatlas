// This example creates a database user in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnProjectIpAccessList } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly ip: string;
  readonly comment: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const myProjectIpAccessList = new CfnProjectIpAccessList(this, 'MyCfnProjectIpAccessList', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      accessList: [
        {
          ipAddress: atlasProps.ip,
          comment: atlasProps.comment
        }
      ]
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const ip = this.node.tryGetContext('ip');
    const comment = this.node.tryGetContext('comment');


    return {
      projId,
      profile,
      ip,
      comment
    }
  }
}
