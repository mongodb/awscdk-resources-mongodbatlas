import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnPrivatelinkEndpointServiceDataFederationOnlineArchive } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly endpointId: string;
  readonly profile: string;
}

export class CDKFederatedDatabaseInstanceExample extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const federatedDatabaseInstance = new CfnPrivatelinkEndpointServiceDataFederationOnlineArchive(this, 'FederatedDatabaseInstance', {
      projectId: atlasProps.projId,
      endpointId: atlasProps.endpointId,
      type: "DATA_LAKE",
      comment: "online-archive-private-link-endpoint",
      profile: atlasProps.profile,
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const endpointId = this.node.tryGetContext('endpointId');
    const profile = this.node.tryGetContext('profile') ?? 'default';

    return {
      projId,
      endpointId,
      profile
    }
  }
}
