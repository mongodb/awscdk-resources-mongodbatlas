using System;
using Amazon.CDK;
using Constructs;
using MongoDB.AWSCDKResourcesMongoDBAtlas;


namespace CdkTestAppCsharp
{
    public class CdkTestAppCsharpStack : Stack
    {
        internal CdkTestAppCsharpStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
            var apiKey = (string) this.Node.TryGetContext("apiKey");
            var profile = (string) this.Node.TryGetContext("profile");
            var projectId = (string) this.Node.TryGetContext("projectId");

            var ddi = new DatadogIntegration(this, "DatadogIntegration-l2", new DatadogIntegrationProps
                        {
                            ApiKey = apiKey,
                            Profile = profile,
                            ProjectId = projectId,
                            Region = DatadogRegion.US
                        });
        }
    }
}
