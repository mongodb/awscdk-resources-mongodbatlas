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
    final static String PROFILE = "PROFILE";
    final static String PROJECT_NAME = "PROJECT_NAME";


    public CdkJavaStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        final String profile = getContextProp(this.getNode(), PROFILE);
        final String projectName = getContextProp(this.getNode(), PROJECT_NAME);
        final String orgId = getContextProp(this.getNode(), ORG_ID);

        final CfnProject myProj = CfnProject.Builder.create(this, "myProject")
        .name(projectName)
        .orgId(orgId)
        .profile(profile)
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
