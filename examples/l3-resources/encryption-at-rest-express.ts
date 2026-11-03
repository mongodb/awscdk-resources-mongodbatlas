// This example creates a project and a cluster in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import {
  AtlasEncryptionAtRestExpress,
  CfnCloudProviderAccessAuthorization,
  CfnCloudProviderAccessSetup,
} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly clusterName: string;
  readonly region: string;
  readonly ip: string;
  readonly customerMasterKeyArn: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    // Register the Atlas side of the trust handshake, then authorize the IAM
    // role that Atlas assumes to use the customer master key.
    const cloudProviderAccessSetup = new CfnCloudProviderAccessSetup(this, 'CloudProviderAccessSetup', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
    });

    const atlasRole = new iam.Role(this, 'AtlasCloudProviderAccessRole', {
      assumedBy: new iam.ArnPrincipal(cloudProviderAccessSetup.attrAtlasAWSAccountArn),
      externalIds: [cloudProviderAccessSetup.attrAtlasAssumedRoleExternalId],
      inlinePolicies: {
        AtlasEncryptionAtRest: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: ['kms:DescribeKey', 'kms:Encrypt', 'kms:Decrypt'],
              resources: [atlasProps.customerMasterKeyArn],
            }),
          ],
        }),
      },
    });

    const cloudProviderAccessAuthorization = new CfnCloudProviderAccessAuthorization(this, 'CloudProviderAccessAuthorization', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      roleId: cloudProviderAccessSetup.attrRoleId,
      iamAssumedRoleArn: atlasRole.roleArn,
    });

    const encryptionAtRestExpress = new AtlasEncryptionAtRestExpress(this, 'AtlasBasic', {
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
        customerMasterKeyId: atlasProps.customerMasterKeyArn,
        roleId: cloudProviderAccessSetup.attrRoleId,
      },
      accessList: {
        accessList: [{ ipAddress: atlasProps.ip, comment: 'My first IP address' }]
      }
    });

    // The role id alone waits for the registration, not for the authorization.
    encryptionAtRestExpress.encryptionAtRest.node.addDependency(cloudProviderAccessAuthorization);
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
    const customerMasterKeyArn = this.node.tryGetContext('customerMasterKeyArn');

    return {
      projId,
      profile,
      clusterName,
      region,
      ip,
      customerMasterKeyArn,
    }
  }
}
