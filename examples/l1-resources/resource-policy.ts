import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnResourcePolicy, CfnResourcePolicyProps } from 'awscdk-resources-mongodbatlas'
import { env } from 'node:process';

interface AtlasStackProps {
	readonly profile: string;
	readonly name: string;
	readonly orgId: string;
	readonly body: string;
}

const app = new cdk.App();

export class CdkTestStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const atlasProps = this.getContextProps();
		const resourcePolicy = new CfnResourcePolicy(this, "resource-policy-testing-stack", {
			profile: atlasProps.profile,
			name: atlasProps.name,
			orgId: atlasProps.orgId,
			policies: [
				{
					body: atlasProps.body,
				},
			],
		});
	}

	getContextProps(): AtlasStackProps {
		const profile = this.node.tryGetContext('profile') ?? 'default';
		const name = this.node.tryGetContext('name');
		const orgId = this.node.tryGetContext('orgId');
		const body = this.node.tryGetContext('body');
		if (!name) {
			throw "No context value specified for name. Please specify via the cdk context."
		}
		if (!orgId) {
			throw "No context value specified for orgId. Please specify via the cdk context."
		}
		if (!body) {
			throw "No context value specified for body. Please specify via the cdk context."
		}

		return {
			profile,
			name,
			orgId,
			body
		}
	}

}
