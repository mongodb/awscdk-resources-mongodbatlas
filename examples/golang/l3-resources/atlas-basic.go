package l3_resources

import (
	mdb "github.com/mongodb/awscdk-resources-mongodbatlas-go/awscdkresourcesmongodbatlas"
)

const (
	ORG_ID     = "ORG_ID_HERE"
	PROFILE    = "PROFILE_HERE"
	PROJECT_ID = "PROJECT_ID_HERE"
	API_KEY    = "API_KEY_HERE"
	IP_ADDRESS = "IP_ADDRESS_HERE"
	IP_COMMENT = "COMMENT_HERE"
	REGION     = "REGION_HERE"
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
	ipAddr := getContextProp(stack.Node(), IP_ADDRESS)
	ipComment := getContextProp(stack.Node(), IP_COMMENT)
	region := getContextProp(stack.Node(), REGION)

	regionConfig := &mdb.AdvancedRegionConfig{
		AnalyticsSpecs: &mdb.Specs{
			EbsVolumeType: jsii.String("STANDARD"),
			InstanceSize:  jsii.String("M10"),
			NodeCount:     jsii.Number(1),
		},
		ElectableSpecs: &mdb.Specs{
			EbsVolumeType: jsii.String("STANDARD"),
			InstanceSize:  jsii.String("M10"),
			NodeCount:     jsii.Number(3),
		},
		Priority:   jsii.Number(7),
		RegionName: jsii.String(region),
	}

	regionConfigs := &[]*mdb.AdvancedRegionConfig{regionConfig}
	replicationSpecs := &[]*mdb.AdvancedReplicationSpec{
		{
			AdvancedRegionConfigs: regionConfigs,
			NumShards:             jsii.Number(1),
		},
	}

	ipAccessListProps := mdb.IpAccessListProps{
		AccessList: &[]*mdb.AccessListDefinition{
			{
				Comment:   jsii.String(ipComment),
				IpAddress: jsii.String(ipAddr),
			},
		},
	}

	mdb.NewAtlasBasic(stack, jsii.String("AtlasBasic-go"), &mdb.AtlasBasicProps{
		ClusterProps: &mdb.ClusterProps{
			ReplicationSpecs: replicationSpecs,
		},
		ProjectProps: &mdb.ProjectProps{
			OrgId: jsii.String(orgId),
		},
		IpAccessListProps: &ipAccessListProps,
		Profile:           jsii.String(profile),
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
