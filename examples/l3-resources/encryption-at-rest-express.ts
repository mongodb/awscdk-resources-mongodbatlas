// This example creates a project and a cluster in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AtlasEncryptionAtRestExpress } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly clusterName: string;
  readonly region: string;
  readonly ip: string;
  readonly vpcId: string;
  readonly subnetId: string;
  readonly roleId: string;
  readonly customerMasterKeyId: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    const atlasBasicPrivateEndpointasBasic = new AtlasEncryptionAtRestExpress(this, 'AtlasBasic', {
      cluster: {
        name: atlasProps.clusterName,
        replicationSpecs: [
          {
            numShards: 1,
            advancedRegionConfigs: [
              {
                analyticsSpecs: {
                  ebsVolumeType: "STANDARD",
                  instanceSize: "M10",
                  nodeCount: 1
                },
                electableSpecs: {
                  ebsVolumeType: "STANDARD",
                  instanceSize: "M10",
                  nodeCount: 3
                },
                priority: 7,
                regionName: "US_EAST_1"
              }]
          }]


      },
      profile: atlasProps.profile,
      projectId: atlasProps.projId,
      encryptionAtRest: {
        customerMasterKeyId: atlasProps.customerMasterKeyId,
        roleId: atlasProps.roleId,
      },
      accessList: {
        accessList: [{ ipAddress: atlasProps.ip, comment: 'My first IP address' }]
      }
    });
  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId) {
      throw "No context value specified for projId. Please specify via the cdk context."
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const clusterName = this.node.tryGetContext('clusterName') ?? 'test-cluster';
    const region = this.node.tryGetContext('region') ?? "US_EAST_1";
    const ip = this.node.tryGetContext('ip');
    const vpcId = this.node.tryGetContext('vpcId');
    const subnetId = this.node.tryGetContext('subnetId');
    const roleId = this.node.tryGetContext('roleId');
    const customerMasterKeyId = this.node.tryGetContext('customerMasterKeyId');

    return {
      projId,
      profile,
      clusterName,
      region,
      ip,
      vpcId,
      subnetId,
      roleId,
      customerMasterKeyId
    }
  }
}
