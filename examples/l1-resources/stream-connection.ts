// This example creates a stream connection of type Cluster in MongoDB Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnStreamConnection, CfnStreamConnectionPropsType, DbRoleToExecuteType } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly instanceName: string;
  readonly connectionName: string;
  readonly clusterName: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    new CfnStreamConnection(this, 'StreamConnection', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      instanceName: atlasProps.instanceName,
      connectionName: atlasProps.connectionName,
      type: CfnStreamConnectionPropsType.CLUSTER,
      clusterName: atlasProps.clusterName,
      dbRoleToExecute: {
        role: 'atlasAdmin',
        type: DbRoleToExecuteType.BUILT_IN,
      },
    });
  }

  getContextProps(): AtlasStackProps {
    const projectId = this.node.tryGetContext('projectId');
    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context.";
    }
    const instanceName = this.node.tryGetContext('instanceName');
    if (!instanceName) {
      throw "No context value specified for instanceName. Please specify via the cdk context.";
    }
    const connectionName = this.node.tryGetContext('connectionName');
    if (!connectionName) {
      throw "No context value specified for connectionName. Please specify via the cdk context.";
    }
    const clusterName = this.node.tryGetContext('clusterName');
    if (!clusterName) {
      throw "No context value specified for clusterName. Please specify via the cdk context.";
    }
    const profile = this.node.tryGetContext('profile') ?? 'default';

    return {
      projectId,
      profile,
      instanceName,
      connectionName,
      clusterName,
    };
  }
}
