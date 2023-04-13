package l2_resources

import (
	mdb "github.com/mongodb/awscdk-resources-mongodbatlas-go/awscdkresourcesmongodbatlas"
)

const (
	PROFILE    = "PROFILE_HERE"
	PROJECT_ID = "PROJECT_ID_HERE"
	API_KEY    = "API_KEY_HERE"
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
	projectId := getContextProp(stack.Node(), PROJECT_ID)
	apiKey := getContextProp(stack.Node(), API_KEY)

	ddProps := mdb.DatadogIntegrationProps{
		ProjectId: jsii.String(projectId),
		ApiKey:    jsii.String(apiKey),
		Region:    mdb.DatadogRegion_US,
		Profile:   jsii.String(profile),
	}
	mdb.NewDatadogIntegration(stack, jsii.String("DatadogIntegration-go"), &ddProps)

	return stack
}

func getContextProp(pNode constructs.Node, propName string) string {
	ctxValue := pNode.TryGetContext(jsii.String(propName))
	if v, ok := ctxValue.(string); ok {
		return v
	}
	return ""
}
