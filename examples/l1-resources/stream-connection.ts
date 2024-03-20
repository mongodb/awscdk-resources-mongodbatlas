import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnStreamConnection, CfnStreamConnectionPropsType } from 'awscdk-resources-mongodbatlas'
import { env } from 'node:process';

interface AtlasStackProps {
	readonly projectId: string;
	readonly profile: string;
	readonly instanceName: string;
	readonly connectionName: string;
	readonly type: CfnStreamConnectionPropsType;
	readonly clusterName: string;
}

const app = new cdk.App();


export class CdkTestStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const atlasProps = this.getContextProps();
		const streamConnection = new CfnStreamConnection(this, "stream-connection-testing-stack", {
			profile: atlasProps.profile,
			instanceName: atlasProps.instanceName,
			projectId: atlasProps.projectId,
			connectionName: atlasProps.connectionName,
			type: atlasProps.type,
			clusterName: atlasProps.clusterName
		});
	}


	getContextProps(): AtlasStackProps {
		const profile = this.node.tryGetContext('profile') ?? 'default';
		const projectId = this.node.tryGetContext('projectId');
		const instanceName = this.node.tryGetContext('instanceName');
		const connectionName = this.node.tryGetContext('connectionName');
		const type = this.node.tryGetContext('type');
		const clusterName = this.node.tryGetContext('clusterName') ?? '';
		if (!projectId) {
			throw "No context value specified for projectId. Please specify via the cdk context."
		}
		if (!instanceName) {
			throw "No context value specified for instanceName. Please specify via the cdk context."
		}
		if (!connectionName) {
			throw "No context value specified for connectionName. Please specify via the cdk context."
		}
		if (!type) {
			throw "No context value specified for type. Please specify via the cdk context."
		}

		return {
			projectId,
			profile,
			instanceName,
			connectionName,
			type,
			clusterName
		}
	}
}
