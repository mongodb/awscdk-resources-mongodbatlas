from aws_cdk import (
  # Duration,
  Stack,
  # aws_sqs as sqs,
)
from constructs import Construct

from awscdk_resources_mongodbatlas import ( DatadogIntegration, DatadogRegion )

class CdkTestAppPython2Stack(Stack):

  def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
    super().__init__(scope, construct_id, **kwargs)

    projectt_id = self.node.try_get_context('project_name')
    apii_key = self.node.try_get_context('org_id')
    profile_name = self.node.try_get_context('profile')

    datadog_integration_l2 = DatadogIntegration(self, "DatadogIntegration-py-l2",
                                                api_key=apii_key,
                                                profile=profile_name,
                                                project_id=projectt_id,
                                                region=DatadogRegion.US)


