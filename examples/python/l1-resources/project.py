from aws_cdk import Stack
from constructs import Construct

from awscdk_resources_mongodbatlas import CfnProject

class CdkTestAppPython2Stack(Stack):

  def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
    super().__init__(scope, construct_id, **kwargs)

    project_name_var = self.node.try_get_context('project_name')
    org_id_var = self.node.try_get_context('org_id')
    profile_name_var = self.node.try_get_context('profile')

    project_l1 = CfnProject(self, "Project-py-l1",
                            name=project_name_var,
                            org_id=org_id_var,
                            profile=profile_name_var)


