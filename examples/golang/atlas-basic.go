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
		RegionName: jsii.String("US_EAST_1"),
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
				Comment:   jsii.String("Open comment"),
				IpAddress: jsii.String("10.10.0.0/24"),
			},
		},
	}

	mdb.NewAtlasBasic(stack, jsii.String("AtlasBasic-go"), &mdb.AtlasBasicProps{
		ClusterProps: &mdb.ClusterProps{
			ReplicationSpecs: replicationSpecs,
		},
		ProjectProps: &mdb.ProjectProps{
			OrgId: jsii.String("63be77777777777705e"),
		},
		IpAccessListProps: &ipAccessListProps,
		Profile:           jsii.String("atlas-secret-profile-name"),
	})

	return stack
}
