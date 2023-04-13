package l1_resources

import (
	mdb "github.com/mongodb/awscdk-resources-mongodbatlas-go/awscdkresourcesmongodbatlas"
)

const (
	ORG_ID       = "ORG_ID"
	PROFILE      = "PROFILE"
	PROJECT_NAME = "PROJECT_NAME"
)

type CdkTestAppGoStackProps struct {
	awscdk.StackProps
}

func NewCdkTestAppGoStack(scope constructs.Construct, id string, props *CdkTestAppGoStackProps) awscdk.Stack {
	var sprops awscdk.StackProps
	if props != nil {
		sprops = props.StackProps
	}
	stack := awscdk.NewStack(scope, &id, &sprops)

	profile := getContextProp(stack.Node(), PROFILE)
	orgId := getContextProp(stack.Node(), ORG_ID)
	projectName := getContextProp(stack.Node(), PROJECT_NAME)

	mdb.NewCfnProject(stack, jsii.String("CfnProject-go"), &mdb.CfnProjectProps{
		Name:    jsii.String(projectName),
		OrgId:   jsii.String(orgId),
		Profile: jsii.String(profile),
	})

	return stack
}

func getContextProp(pNode constructs.Node, propName string) string {
	ctxValue := pNode.TryGetContext(jsii.String(propName))
	if v, ok := ctxValue.(string); ok {
		return v
	}
	return ""
}
