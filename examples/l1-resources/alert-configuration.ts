// This example creates an alert in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnAlertConfiguration, CfnAlertConfigurationPropsEventTypeName, 
  NotificationViewTypeName,  MetricThresholdViewMetricName, MetricThresholdViewOperator,
  MetricThresholdViewUnits, MetricThresholdViewMode} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly email: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props); // Make sure that props contains "GroupId".

    const atlasProps = this.getContextProps();


    const alert = new CfnAlertConfiguration(this, 'MyAlert', {
      profile: atlasProps.profile,
      eventTypeName: CfnAlertConfigurationPropsEventTypeName.OUTSIDE_METRIC_THRESHOLD, 
      notifications: [{
        typeName: NotificationViewTypeName.EMAIL,
        delayMin: 0,
        emailAddress: atlasProps.email,
        emailEnabled: true,
        intervalMin: 15
      }],
      metricThreshold: {
        metricName:MetricThresholdViewMetricName.NORMALIZED_SYSTEM_CPU_USER,
        operator: MetricThresholdViewOperator.GREATER_THAN,
        threshold: 5,
        units: MetricThresholdViewUnits.RAW,
        mode: MetricThresholdViewMode.AVERAGE,
      }
    });

  }

  getContextProps(): AtlasStackProps {
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const email = this.node.tryGetContext('email') ?? 'test@test.com';

    return {
      profile,
      email
    }
  }
}
