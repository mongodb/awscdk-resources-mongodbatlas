import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnStreamInstance, StreamsDataProcessRegionCloudProvider } from 'awscdk-resources-mongodbatlas'
import { env } from 'node:process';

const PROFILE = "default-oriol";
const PROJECT_ID = "65dca009938ec8392b94e7e6";
const INSTANCE_NAME = "testInstanceName";
const REGION = "VIRGINIA_USA";
const TIER = "SP30";

const app = new cdk.App();


export class CdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const streamInstance = new CfnStreamInstance(this, "stream-instance-testing-stack", {
      profile: PROFILE,
      instanceName: INSTANCE_NAME,
      projectId: PROJECT_ID,
      dataProcessRegion: {
        cloudProvider: StreamsDataProcessRegionCloudProvider.AWS,
        region: REGION,
      },
      streamConfig: {
        tier: TIER,
      },
    });
  }

}
