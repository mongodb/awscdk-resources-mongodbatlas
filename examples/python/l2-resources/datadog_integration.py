from aws_cdk import Stack
from constructs import Construct

from awscdk_resources_mongodbatlas import ( DatadogIntegration, DatadogRegion )

class CdkTestAppPython2Stack(Stack):

  def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
    super().__init__(scope, construct_id, **kwargs)

    project_id_var = self.node.try_get_context('project_id')
    api_key_var = self.node.try_get_context('api_key')
    profile_name_var = self.node.try_get_context('profile')

    datadog_integration_l2 = DatadogIntegration(self, "DatadogIntegration-py-l2",
                                                api_key=api_key_var,
                                                profile=profile_name_var,
                                                project_id=project_id_var,
                                                region=DatadogRegion.US)


