import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnServerlessPrivateEndpoint,  CfnServerlessPrivateEndpointProps,AwsPrivateEndpointConfig} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly instanceName: string;
  readonly comment : string;
  readonly createAndAssignAwsPrivateEndpoint: boolean;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const awsPrivateEndpointConfig : AwsPrivateEndpointConfig = {
        vpcId: "vpc-078fe50fc2313c001",
        subnetIds:["subnet-0a2f7a198e5d6d6a6"],
        region:""
    }
    const myServerlessInstance = new CfnServerlessPrivateEndpoint(this, 'ServerlessPrivateEndpointWithAws', {
      projectId: atlasProps.projectId,
      profile:  atlasProps.profile,
      instanceName: atlasProps.instanceName,
      comment : atlasProps.comment,
      createAndAssignAwsPrivateEndpoint:atlasProps.createAndAssignAwsPrivateEndpoint,
      awsPrivateEndpointConfigurationProperties: awsPrivateEndpointConfig
    });
  }

  getContextProps(): AtlasStackProps {
    const projectId = this.node.tryGetContext('projectId');
    if (!projectId){
      throw "No context value specified for orgId. Please specify via the cdk context."
    }
    
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const instanceName = this.node.tryGetContext('instanceName');
    const comment = this.node.tryGetContext('comment');
    const createAndAssignAwsPrivateEndpoint = this.node.tryGetContext('createAndAssignAwsPrivateEndpoint') ?? false;


    return {
      projectId,
      profile,
      instanceName,
      comment,
      createAndAssignAwsPrivateEndpoint
    }
  }
}
