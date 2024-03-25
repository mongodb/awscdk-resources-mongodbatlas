import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnStreamConnection, CfnStreamConnectionPropsType } from 'awscdk-resources-mongodbatlas'

interface AtlasStackProps {
	readonly projectId: string;
	readonly profile: string;
	readonly instanceName: string;
	readonly sampleDataset: string;
}

const app = new cdk.App();


export class CdkTestStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const atlasProps = this.getContextProps();
		const streamConnection = new CfnStreamConnection(this, "stream-connection-sample-stack", {
			profile: atlasProps.profile,
			instanceName: atlasProps.instanceName,
			projectId: atlasProps.projectId,
			connectionName: atlasProps.sampleDataset,
			type: CfnStreamConnectionPropsType.SAMPLE,
		});
	}


	getContextProps(): AtlasStackProps {
		const profile = this.node.tryGetContext('profile') ?? 'default';
		const projectId = this.node.tryGetContext('projectId');
		const instanceName = this.node.tryGetContext('instanceName');
		const sampleDataset = this.node.tryGetContext('sampleDataset');
		if (!projectId) {
			throw "No context value specified for projectId. Please specify via the cdk context."
		}
		if (!instanceName) {
			throw "No context value specified for instanceName. Please specify via the cdk context."
		}
		if (!sampleDataset) {
			throw "No context value specified for sampleDataset. Please specify via the cdk context."
		}

		return {
			projectId,
			profile,
			instanceName,
			sampleDataset,
		}
	}
}
