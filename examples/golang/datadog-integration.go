package golang

import (
	mdb "github.com/mongodb/awscdk-resources-mongodbatlas-go/awscdkresourcesmongodbatlas"
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

	ddProps := mdb.DatadogIntegrationProps{
		ProjectId: jsii.String("6435ce7777777777731"),
		ApiKey:    jsii.String("....."),
		Region:    mdb.DatadogRegion_US,
		Profile:   jsii.String("atlas-secret-profile-name"),
	}
	mdb.NewDatadogIntegration(stack, jsii.String("DatadogIntegration-go"), &ddProps)

	return stack
}
