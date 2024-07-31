import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnMaintenanceWindow } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly dayOfWeek: number;
  readonly hourOfDay: number;
  readonly autoDeferOnceEnabled: boolean;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const myMaintenanceWindow = new CfnMaintenanceWindow(this, 'MyMaintenanceWindow', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      dayOfWeek: atlasProps.dayOfWeek,
      hourOfDay: atlasProps.hourOfDay,
      autoDeferOnceEnabled: atlasProps.autoDeferOnceEnabled,
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId) {
      throw "No context value specified for orgId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const dayOfWeek = this.node.tryGetContext('dayOfWeek');
    const hourOfDay = this.node.tryGetContext('hourOfDay');
    const autoDeferOnceEnabled = this.node.tryGetContext('autoDeferOnceEnabled');

    return {
      projId,
      profile,
      dayOfWeek,
      hourOfDay,
      autoDeferOnceEnabled
    }
  }
}
