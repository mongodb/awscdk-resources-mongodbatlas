import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnThirdPartyIntegration, CfnThirdPartyIntegrationPropsType } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly url: string;
  readonly datadogApiKey: string;
  readonly datadogRegion: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const atlasProps = this.getContextProps();
    new CfnThirdPartyIntegration(this, 'WebhookIntegration', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      type: CfnThirdPartyIntegrationPropsType.WEBHOOK,
      url: atlasProps.url,
    });

    new CfnThirdPartyIntegration(this, 'DatadogIntegration', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      type: CfnThirdPartyIntegrationPropsType.DATADOG,
      apiKey: atlasProps.datadogApiKey,
      region: atlasProps.datadogRegion,
      sendCollectionLatencyMetrics: true,
      sendDatabaseMetrics: true,
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const url = this.node.tryGetContext('url');
    const datadogApiKey = this.node.tryGetContext('datadogApiKey');
    const datadogRegion = this.node.tryGetContext('datadogRegion') ?? 'US';

    return {
      projId,
      profile,
      url,
      datadogApiKey,
      datadogRegion,
    }
  }
}
