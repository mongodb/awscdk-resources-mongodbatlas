package com.myorg;

import java.util.List;
import org.jetbrains.annotations.NotNull;
import software.constructs.Construct;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import org.mongodb.awscdk.resources.mongodbatlas.*;
import software.constructs.Node;


public class CdkJavaStack extends Stack {
    final static String ORG_ID = "ORG_ID";
    final static String CLUSTER_NAME = "CLUSTER_NAME";
    final static String ACCESS_LIST_IP = "ACCESS_LIST_IP";
    final static String PROFILE = "PROFILE";
    final static String PROJECT_NAME = "PROJECT_NAME";


    public CdkJavaStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        final String clusterName = getContextProp(this.getNode(), CLUSTER_NAME);
        final String orgId = getContextProp(this.getNode(), ORG_ID);
        final String profile = getContextProp(this.getNode(), PROFILE);
        final String ip = getContextProp(this.getNode(), ACCESS_LIST_IP);
        final String projectName = getContextProp(this.getNode(), PROJECT_NAME);

        final AtlasBasic atlasBasic = AtlasBasic.Builder.create(this, "atlasBasic")
            .profile(profile)
            .ipAccessListProps(
                IpAccessListProps.builder().accessList(
                    List.of(AccessListDefinition.builder()
                        .ipAddress(ip).comment("CDK java").build())
                ).build())
            .projectProps(ProjectProps.builder()
                .orgId(orgId)
                .name(projectName)
                .build())
            .clusterProps(ClusterProps.builder()
                .name(clusterName)
                .replicationSpecs(List.of(
                    AdvancedReplicationSpec.builder()
                        .numShards(1)
                        .advancedRegionConfigs(
                            List.of(
                                AdvancedRegionConfig.builder()
                                    .regionName("US_EAST_1")
                                    .priority(7)
                                    .analyticsSpecs(
                                        Specs.builder()
                                            .ebsVolumeType("STANDARD")
                                            .instanceSize("M10")
                                            .nodeCount(1)
                                            .build())
                                    .electableSpecs(
                                        Specs.builder()
                                            .ebsVolumeType("STANDARD")
                                            .instanceSize("M10")
                                            .nodeCount(3)
                                            .build())
                                    .build()
                            )
                        )
                        .build()
                ))
                .build())
            .build();
    }

    public String getContextProp(final Node pNode, final String pPropName){
        @NotNull final Object obj = pNode.tryGetContext(pPropName);
        if (obj.toString().isEmpty()) {
            return "";
        }
        return obj.toString();
    }
}
