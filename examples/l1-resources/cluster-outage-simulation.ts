// This example creates a project and a cluster in Atlas using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnClusterOutageSimulation } from 'awscdk-resources-mongodbatlas';
import {FilterCloudProvider} from "../../src/l1-resources/cluster-outage-simulation";

interface AtlasStackProps {
    readonly projId: string;
    readonly profile: string;
    readonly clusterName: string;
    readonly provider : FilterCloudProvider;
    readonly region : string;
    readonly outageType : string;
}

export class CdkTestingStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const atlasProps = this.getContextProps();
        const customDbRole = new CfnClusterOutageSimulation(this, 'CfnClusterOutageSimulation', {
            profile: atlasProps.profile,
            projectId: atlasProps.projId,
            clusterName: atlasProps.clusterName,
            filters:[
                {
                    cloudProvider: atlasProps.provider,
                    region: atlasProps.region,
                    type: atlasProps.outageType
                }
            ],
        });

    }

    getContextProps(): AtlasStackProps {
        const projId = this.node.tryGetContext('projId');
        if (!projId){
            throw "No context value specified for projId. Please specify via the cdk context."
        }
        const clusterName = this.node.tryGetContext('clusterName');
        const profile = this.node.tryGetContext('profile') ?? 'default';
        const provider = this.node.tryGetContext('provider') ?? `AWS`;
        const region = this.node.tryGetContext('region') ?? `US_WEST_1`;
        const outageType = this.node.tryGetContext('type') ?? 'REGION';


        return {
            projId,
            profile,
            clusterName,
            provider,
            region,
            outageType
        }
    }
}
