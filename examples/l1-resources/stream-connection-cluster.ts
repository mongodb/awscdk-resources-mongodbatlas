import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnStreamConnection, CfnStreamConnectionPropsType, DbRoleToExecute, DbRoleToExecuteType } from 'awscdk-resources-mongodbatlas'

interface AtlasStackProps {
	readonly projectId: string;
	readonly profile: string;
	readonly instanceName: string;
	readonly connectionName: string;
	readonly clusterName: string;
}

const app = new cdk.App();


export class CdkTestStackCluster extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const atlasProps = this.getContextProps();
		const streamConnection = new CfnStreamConnection(this, "stream-connection-cluster-stack", {
			profile: atlasProps.profile,
			instanceName: atlasProps.instanceName,
			projectId: atlasProps.projectId,
			connectionName: atlasProps.connectionName,
			type: CfnStreamConnectionPropsType.CLUSTER,
			clusterName: atlasProps.clusterName,
			dbRoleToExecute: {role: "atlasAdmin", type: DbRoleToExecuteType.BUILT_IN}
		});
	}


	getContextProps(): AtlasStackProps {
		const profile = this.node.tryGetContext('profile') ?? 'default';
		const projectId = this.node.tryGetContext('projectId');
		const instanceName = this.node.tryGetContext('instanceName');
		const connectionName = this.node.tryGetContext('connectionName');
		const clusterName = this.node.tryGetContext('clusterName');
		if (!projectId) {
			throw "No context value specified for projectId. Please specify via the cdk context."
		}
		if (!instanceName) {
			throw "No context value specified for instanceName. Please specify via the cdk context."
		}
		if (!connectionName) {
			throw "No context value specified for connectionName. Please specify via the cdk context."
		}

		return {
			projectId,
			profile,
			instanceName,
			connectionName,
			clusterName
		}
	}
}
