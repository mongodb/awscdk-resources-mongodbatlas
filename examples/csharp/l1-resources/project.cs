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
            projectName = this.Node.TryGetContext("projectName");

            var proj = new CfnProject(this, "CfnProject-l1",
                            new CfnProjectProps { Name = projectName,
                                                  Profile = profile,
                                                  OrgId = orgId });
        }
    }
}
