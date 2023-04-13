using System;
using System.Security.Cryptography;
using Amazon.CDK;
using Constructs;
using MongoDB.AWSCDKResourcesMongoDBAtlas;


namespace CdkTestAppCsharp
{
    public class CdkTestAppCsharpStack : Stack
    {
        internal CdkTestAppCsharpStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
            profile = this.Node.TryGetContext("profile");
            orgId = this.Node.TryGetContext("orgId");
            ipAddr = this.Node.TryGetContext("ipAddr");
            ipComment = this.Node.TryGetContext("ipComment");
            region = this.Node.TryGetContext("region");

             var regionConfig = new AdvancedRegionConfig
                     {
                         AnalyticsSpecs = new Specs { NodeCount = 1, InstanceSize = "M10", EbsVolumeType = "STANDARD" },
                         ElectableSpecs = new Specs { NodeCount = 3, InstanceSize = "M10", EbsVolumeType = "STANDARD" },
                         Priority = 7,
                         RegionName = region
                     };
             var regionConfigs = new AdvancedRegionConfig[1] { regionConfig };

             var replicationSpec = new AdvancedReplicationSpec { AdvancedRegionConfigs = regionConfigs, NumShards = 1 };
             var replicationSpecs = new AdvancedReplicationSpec[1] { replicationSpec };

             var accessListDef = new AccessListDefinition { IpAddress = ipAddr, Comment = ipComment };
             var ipAccessListProps = new IpAccessListProps { AccessList = new AccessListDefinition[1] { accessListDef } };

             var atlasBasic = new AtlasBasic(this, "AtlasBasic-l3", new AtlasBasicProps
                    {
                        ClusterProps = new ClusterProps { ReplicationSpecs = replicationSpecs },
                        ProjectProps = new ProjectProps { OrgId = orgId },
                        IpAccessListProps = ipAccessListProps,
                        Profile = profile,
                    });
        }
    }
}
