import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnStreamPrivatelinkEndpoint } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly providerName: string;
  readonly vendor: string;
  readonly region: string;
  readonly arn: string;
}

export class CdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    new CfnStreamPrivatelinkEndpoint(this, "stream-privatelink-endpoint-testing-stack", {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      providerName: atlasProps.providerName,
      vendor: atlasProps.vendor,
      region: atlasProps.region,
      arn: atlasProps.arn,
    });
  }

  getContextProps(): AtlasStackProps {
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const projectId = this.node.tryGetContext('projectId');
    const providerName = this.node.tryGetContext('providerName') ?? 'AWS';
    const vendor = this.node.tryGetContext('vendor');
    const region = this.node.tryGetContext('region');
    const arn = this.node.tryGetContext('arn') ?? '';

    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context."
    }
    if (!vendor) {
      throw "No context value specified for vendor. Please specify via the cdk context. Valid values: MSK, CONFLUENT, S3"
    }
    if (!region) {
      throw "No context value specified for region. Please specify via the cdk context."
    }

    return {
      projectId,
      profile,
      providerName,
      vendor,
      region,
      arn,
    }
  }
}
