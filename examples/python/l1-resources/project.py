from aws_cdk import (
  # Duration,
  Stack,
  # aws_sqs as sqs,
)
from constructs import Construct

from awscdk_resources_mongodbatlas import CfnProject

class CdkTestAppPython2Stack(Stack):

  def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
    super().__init__(scope, construct_id, **kwargs)

    project_name = self.node.try_get_context('project_name')
    org_id = self.node.try_get_context('org_id')
    profile_name = self.node.try_get_context('profile')

    project_l1 = CfnProject(self, "Project-py-l1",
                            name=project_name,
                            org_id=org_id,
                            profile=profile_name)


