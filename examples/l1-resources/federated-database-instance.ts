import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnFederatedSettingsOrgRoleMapping } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly tenantName: string;
  readonly projectId: string;
  readonly profile: string;
  readonly roleId: string;
  readonly testS3Bucket: string;
}

const UNDEFINED = "UNDEFINED";

export class CDKFederatedDatabaseInstanceExample extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const federatedDatabaseInstance = new CfnFederatedSettingsOrgRoleMapping(this, 'FederatedDatabaseInstance', {
      tenantName: atlasProps.tenantName,
      projectId: atlasProps.projectId,
      profile: atlasProps.profile,
      cloudProviderConfig: {
        roleId: atlasProps.roleId,
        testS3Bucket: atlasProps.testS3Bucket,
      },
      dataProcessRegion: {
        region: "VIRGINIA_USA",
      },
      storage: {
        databases: [
          {
            maxWildcardCollections: "50",
            name: "cfn-df-dbs",
          },
        ],
      },
    });

    new cdk.CfnOutput(this, "externalID", {
      value: (federatedDatabaseInstance.attrExternalId ?? UNDEFINED).toString(),
      exportName: "externalId",
    });
    
    new cdk.CfnOutput(this, "HostName", {
      value: (
        cdk.Fn.select(0, federatedDatabaseInstance.attrHostNames) ?? UNDEFINED
      ).toString(),
      exportName: "HostName",
    });
  }

  getContextProps(): AtlasStackProps {
    const projectId = this.node.tryGetContext('projId');
    if (!projectId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const tenantName = this.node.tryGetContext('tenantName');
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const roleId = this.node.tryGetContext('roleId');
    const testS3Bucket = this.node.tryGetContext('testS3Bucket');

    return {
      tenantName,
      projectId,
      profile,
      roleId,
      testS3Bucket
    }
  }
}
