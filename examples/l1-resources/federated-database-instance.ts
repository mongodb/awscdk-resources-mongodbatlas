import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnFederatedSettingsOrgRoleMapping } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly orgId: string;
  readonly externalGroupName: string;
  readonly federationSettingsId: string;
}

const UNDEFINED = "UNDEFINED";

export class CDKFederatedDatabaseInstanceExample extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const federatedDatabaseInstance = new CfnFederatedSettingsOrgRoleMapping(this, 'FederatedDatabaseInstance', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      externalGroupName: atlasProps.externalGroupName,
      federationSettingsId: atlasProps.federationSettingsId
    });

    new cdk.CfnOutput(this, "ID", {
      value: (federatedDatabaseInstance.attrId ?? UNDEFINED).toString(),
      exportName: "ID",
    });
  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('projId');
    if (!orgId) {
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const externalGroupName = this.node.tryGetContext('externalGroupName');
    const federationSettingsId = this.node.tryGetContext('federationSettingsId');

    return {
      profile,
      orgId,
      externalGroupName,
      federationSettingsId
    }
  }
}
