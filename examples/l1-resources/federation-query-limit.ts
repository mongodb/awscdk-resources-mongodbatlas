import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnFederatedQueryLimit, CfnFederatedQueryLimitPropsLimitName} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly role: string;
  readonly tenantName: string;
  readonly limitName: string;
  readonly value: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    new CfnFederatedQueryLimit(this, 'Federation', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      tenantName: atlasProps.tenantName,
      limitName : atlasProps.limitName,
      value: atlasProps.value
    });
  }

  getContextProps(): AtlasStackProps {
    const projectId = this.node.tryGetContext('projId');
    if (!projectId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const role = this.node.tryGetContext('role');
    const tenantName = this.node.tryGetContext('tenantName');
    const limitName=  this.node.tryGetContext('limitName') ?? CfnFederatedQueryLimitPropsLimitName.BYTES_PROCESSED_QUERY;
    const value= this.node.tryGetContext("value") ?? "2000000000"
    return {
      projectId,
      profile,
      role,
      tenantName,
      limitName,
      value
    }
  }
}
