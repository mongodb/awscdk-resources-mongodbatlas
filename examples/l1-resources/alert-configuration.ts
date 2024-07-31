// This example creates an alert in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  CfnAlertConfiguration, NotificationViewTypeName, MetricThresholdViewOperator, MetricThresholdViewMode
} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly email: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();


    const alert = new CfnAlertConfiguration(this, 'MyAlert', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      eventTypeName: 'OUTSIDE_METRIC_THRESHOLD',
      notifications: [{
        typeName: NotificationViewTypeName.EMAIL,
        delayMin: 0,
        emailAddress: atlasProps.email,
        emailEnabled: true,
        intervalMin: 15
      }],
      metricThreshold: {
        metricName: 'NORMALIZED_SYSTEM_CPU_USER',
        operator: MetricThresholdViewOperator.GREATER_THAN,
        threshold: 5,
        units: 'RAW',
        mode: MetricThresholdViewMode.AVERAGE,
      }
    });

  }

  getContextProps(): AtlasStackProps {
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const email = this.node.tryGetContext('email') ?? 'test@test.com';
    const projectId = this.node.tryGetContext('projectId')

    return {
      projectId,
      profile,
      email
    }
  }
}
