import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnStreamProcessor, CfnStreamProcessorPropsDesiredState } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly workspaceName: string;
  readonly processorName: string;
}

export class CdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    new CfnStreamProcessor(this, "stream-processor-testing-stack", {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      workspaceName: atlasProps.workspaceName,
      processorName: atlasProps.processorName,
      pipeline: JSON.stringify([
        { $source: { connectionName: "kafka-connection" } },
        {
          $emit: {
            connectionName: "atlas-connection",
            db: "myDb",
            coll: "myCol",
            timeseries: { timeField: "ts" },
          },
        },
      ]),
      desiredState: CfnStreamProcessorPropsDesiredState.STARTED,
      options: {
        dlq: {
          coll: "dlqCollection",
          connectionName: "atlas-connection",
          db: "dlqDatabase",
        },
      },
      timeouts: { create: "20m" },
      deleteOnCreateTimeout: true,
    });
  }

  getContextProps(): AtlasStackProps {
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const projectId = this.node.tryGetContext('projectId');
    const workspaceName = this.node.tryGetContext('workspaceName');
    const processorName = this.node.tryGetContext('processorName');

    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context."
    }
    if (!workspaceName) {
      throw "No context value specified for workspaceName. Please specify via the cdk context."
    }
    if (!processorName) {
      throw "No context value specified for processorName. Please specify via the cdk context."
    }

    return {
      projectId,
      profile,
      workspaceName,
      processorName,
    }
  }
}
