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
            apiKey = this.Node.TryGetContext("apiKey");
            profile = this.Node.TryGetContext("profile");
            projectId = this.Node.TryGetContext("projectId");

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
