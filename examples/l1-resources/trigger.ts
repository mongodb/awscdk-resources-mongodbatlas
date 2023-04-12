// This example creates a database user in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnTrigger,  DatabaseConfigOperationTypes } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projId: string;
  readonly profile: string;
  readonly appId: string;
  readonly dbName: string;
  readonly collection: string;
  readonly serviceId: string;
  readonly functionId: string;
  readonly functionName: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    const trigger = new CfnTrigger(this, 'ThirdPartyIntegration', {
      projectId: atlasProps.projId,
      profile: atlasProps.profile,
      type: "DATABASE",
      appId: atlasProps.appId,
      databaseTrigger: {
        operationTypes: [DatabaseConfigOperationTypes.INSERT],
        database: atlasProps.dbName,
        collection: atlasProps.collection,
        serviceId: atlasProps.serviceId,
      },
      eventProcessors: {
        function: {
          funcConfig: {
            functionId: atlasProps.functionId,
            functionName: atlasProps.functionName,
          }
        }
      }
    });

  }

  getContextProps(): AtlasStackProps {
    const projId = this.node.tryGetContext('projId');
    if (!projId){
      throw "No context value specified for projId. Please specify via the cdk context."
    }
    const appId = this.node.tryGetContext('appId');
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const dbName = this.node.tryGetContext('dbName');
    const collection = this.node.tryGetContext('collection');
    const serviceId = this.node.tryGetContext('serviceId');
    const functionId = this.node.tryGetContext('functionId');
    const functionName = this.node.tryGetContext('functionName');
    
    return {
      projId,
      profile,
      appId,
      dbName,
      collection,
      serviceId, 
      functionId,
      functionName
    }
  }
}
