from aws_cdk import Stack
from constructs import Construct

from awscdk_resources_mongodbatlas import ( AdvancedRegionConfig, AdvancedReplicationSpec,
                                            Specs, AccessListDefinition, IpAccessListProps,
                                            ProjectProps, ClusterProps, AtlasBasic )

class CdkTestAppPython2Stack(Stack):

  def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
    super().__init__(scope, construct_id, **kwargs)

    org_id_var = self.node.try_get_context('org_id')
    region_var = self.node.try_get_context('region')
    profile_name_var = self.node.try_get_context('profile')
    ip_addr_var = self.node.try_get_context('ip_addr')
    ip_comment_var = self.node.try_get_context('ip_comment')

    region_configs_var = []
    region_configs_var.append(
      AdvancedRegionConfig(analytics_specs=Specs(node_count=1, instance_size="M10", ebs_volume_type="STANDARD"),
                           electable_specs=Specs(node_count=3, instance_size="M10", ebs_volume_type="STANDARD"),
                           priority=7,
                           region_name=region_var))
    replication_specs_var = []
    replication_specs_var.append(AdvancedReplicationSpec(advanced_region_configs = region_configs_var, num_shards = 1))

    access_list_defs_var = []
    access_list_defs_var.append(AccessListDefinition(ip_address = ip_addr_var, comment = ip_comment_var))

    atlas_basic_l3 = AtlasBasic(self, "AtlasBasic-py-l3",
                                      cluster_props=ClusterProps(replication_specs=replication_specs_var),
                                      project_props=ProjectProps(org_id=org_id_var),
                                      ip_access_list_props=IpAccessListProps(access_list = access_list_defs_var),
                                      profile=profile_name_var)


