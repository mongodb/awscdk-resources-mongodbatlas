using System;
using Amazon.CDK;
using Constructs;
using MongoDB.AWSCDKResourcesMongoDBAtlas;
using CfnProject = MongoDB.AWSCDKResourcesMongoDBAtlas.CfnProject;
using CfnProjectProps = MongoDB.AWSCDKResourcesMongoDBAtlas.CfnProjectProps;
using ProjectProps = MongoDB.AWSCDKResourcesMongoDBAtlas.ProjectProps;


namespace CdkTestAppCsharp
{
    public class CdkTestAppCsharpStack : Stack
    {
        internal CdkTestAppCsharpStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
            var profile = (string) this.Node.TryGetContext("profile");
            var orgId = (string) this.Node.TryGetContext("orgId");
            var projectName = (string) this.Node.TryGetContext("projectName");

            var proj = new CfnProject(this, "CfnProject-l1",
                                        new CfnProjectProps { Name = projectName,
                                                              Profile = profile,
                                                              OrgId = orgId });
        }
    }
}
