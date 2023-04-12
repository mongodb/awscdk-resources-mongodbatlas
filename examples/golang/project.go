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

	mdb.NewCfnProject(stack, jsii.String("CfnProject-go"), &mdb.CfnProjectProps{
		Name:    jsii.String("cdk-go-project-l1"),
		OrgId:   jsii.String("63bec77777777777777"),
		Profile: jsii.String("atlas-secret-profile-name"),
	})

	return stack
}
