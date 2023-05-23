import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AtlasBasic } from '@mongodbatlas-awscdk/atlas-basic';
import { readFileSync, writeFileSync } from 'fs';

export class AtlasIntegInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const orgId = this.node.tryGetContext('MONGODB_ATLAS_ORG_ID') || process.env.MONGODB_ATLAS_ORG_ID;
    const replicationSpecs = [
      {
        "numShards": 1,
        "advancedRegionConfigs": [
          {
            "analyticsSpecs": {
              "ebsVolumeType": "STANDARD",
              "instanceSize": "M10",
              "nodeCount": 1
            },
            "electableSpecs": {
              "ebsVolumeType": "STANDARD",
              "instanceSize": "M10",
              "nodeCount": 3
            },
            "priority": 7,
            "regionName": "US_EAST_1"
          }
        ]
      }
    ]

    const atlas = new AtlasBasic(this, 'atlas-basic', {
      clusterProps: {
        replicationSpecs: replicationSpecs
      },
      projectProps: {
        orgId: orgId,
      },
      ipAccessListProps: {
        accessList: [
          { ipAddress: '0.0.0.0/0', comment: 'My first IP address' }
        ]
      }
    });

    let atlasUrl = (atlas.mCluster.connectionStrings.standardSrv ?? "UNDEFINED").toString()

    new cdk.CfnOutput(this, "atlas-url", {
      value: atlasUrl,
      // value: atlas.CFNCluster?connectionStrings?.standardSrv ?? 'undefined',
      exportName: "atlas-url",
    });

    new cdk.CfnOutput(this, "username", {
      value: (atlas.mDBUser.props.username ?? "UNDEFINED").toString(),
      exportName: "username",
    });

    new cdk.CfnOutput(this, "pwd", {
      value: (atlas.mDBUser.props.password ?? "UNDEFINED").toString(),
      exportName: "password",
    });
   
  }
}
