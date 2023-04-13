from aws_cdk import (
  # Duration,
  Stack,
  # aws_sqs as sqs,
)
from constructs import Construct

from awscdk_resources_mongodbatlas import ( AdvancedRegionConfig, AdvancedReplicationSpec,
                                            Specs, AccessListDefinition, IpAccessListProps,
                                            ProjectProps, ClusterProps, AtlasBasic )

class CdkTestAppPython2Stack(Stack):

  def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
    super().__init__(scope, construct_id, **kwargs)

    orgg_id = self.node.try_get_context('org_id')
    region = self.node.try_get_context('region')
    profile_name = self.node.try_get_context('profile')
    ip_addr = self.node.try_get_context('ip_addr')
    ip_comment = self.node.try_get_context('ip_comment')

    region_configs = []
    region_configs.append(
      AdvancedRegionConfig(analytics_specs=Specs(node_count=1, instance_size="M10", ebs_volume_type="STANDARD"),
                           electable_specs=Specs(node_count=3, instance_size="M10", ebs_volume_type="STANDARD"),
                           priority=7,
                           region_name=region))
    replication_specs = []
    replication_specs.append(AdvancedReplicationSpec(advanced_region_configs = region_configs, num_shards = 1))

    access_list_defs = []
    access_list_defs.append(AccessListDefinition(ip_address = ip_addr, comment = ip_comment))

    atlas_basic = AtlasBasic(self, "AtlasBasic-py-l3",
                             cluster_props=ClusterProps(replication_specs=replication_specs),
                             project_props=ProjectProps(org_id=orgg_id),
                             ip_access_list_props=IpAccessListProps(access_list = access_list_defs),
                             profile=profile_name)


