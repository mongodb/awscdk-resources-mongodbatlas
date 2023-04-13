package com.myorg;

import java.util.List;
import org.jetbrains.annotations.NotNull;
import software.constructs.Construct;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import org.mongodb.awscdk.resources.mongodbatlas.*;
import software.constructs.Node;


public class CdkJavaStack extends Stack {
    final static String PROJECT_ID = "PROJECT_ID";
    final static String PROFILE = "PROFILE";
    final static String ROLE_ID = "ROLE_ID";
    final static String MASTER_KEY_ID = "MASTER_KEY_ID";


    public CdkJavaStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        final String profile = getContextProp(this.getNode(), PROFILE);
        final String roleId = getContextProp(this.getNode(), ROLE_ID);
        final String projectId = getContextProp(this.getNode(), PROJECT_ID);
        final String customerMasterKeyId = getContextProp(this.getNode(), MASTER_KEY_ID);

        final AtlasEncryptionAtRest encryptionAtRest = AtlasEncryptionAtRest.Builder.create(this, "encryptionAtRest")
            .profile(profile)
            .projectId(projectId)
            .region(this.getRegion())
            .customerMasterKeyId(customerMasterKeyId)
            .roleId(roleId)
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
