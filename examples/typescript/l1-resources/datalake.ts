// This example creates a database user in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnDataLakes, DataLakeDataProcessRegionViewCloudProvider, DataLakeDataProcessRegionViewRegion } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly roleId: string;
  readonly tenantName: string;
  readonly externalId: string;
  readonly iamUserArn: string;
  readonly testS3Bucket: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const dataLake = new CfnDataLakes(this, 'DataLake', {
        projectId: atlasProps.projId,
        profile: atlasProps.profile,
        tenantName : atlasProps.tenantName,
        cloudProviderConfig: {
          aws: {
            roleId: atlasProps.roleId,
            externalId: atlasProps.externalId,
            iamUserArn: atlasProps.iamUserArn,
            testS3Bucket:  atlasProps.testS3Bucket,
          }
        },
        dataProcessRegion: {
          cloudProvider: DataLakeDataProcessRegionViewCloudProvider.AWS,
          region: DataLakeDataProcessRegionViewRegion.DUBLIN_IRL
        }
      });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const tenantName = this.node.tryGetContext('tenantName');
    const roleId = this.node.tryGetContext('roleId');
    const externalId = this.node.tryGetContext('externalId');
    const iamUserArn = this.node.tryGetContext('iamUserArn');
    const testS3Bucket = this.node.tryGetContext('testS3Bucket');


    return {
      projId,
      profile,
      roleId,
      tenantName,
      externalId,
      iamUserArn,
      testS3Bucket
    }
  }
}
