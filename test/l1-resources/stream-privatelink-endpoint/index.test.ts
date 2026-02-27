// Copyright 2024 MongoDB Inc
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { CfnStreamPrivatelinkEndpoint } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::StreamPrivatelinkEndpoint";
const PROFILE = "default";
const PROJECT_ID = "testProjectId";
const PROVIDER_NAME = "AWS";
const REGION = "us-east-1";

test("CfnStreamPrivatelinkEndpoint construct should support MSK vendor with ARN", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  const ARN =
    "arn:aws:kafka:us-east-1:123456789012:cluster/test-cluster/abc123";

  new CfnStreamPrivatelinkEndpoint(stack, "stream-privatelink-msk-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    providerName: PROVIDER_NAME,
    vendor: "MSK",
    arn: ARN,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    ProviderName: PROVIDER_NAME,
    Vendor: "MSK",
    Arn: ARN,
  });
});

test("CfnStreamPrivatelinkEndpoint construct should support CONFLUENT vendor", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  const SERVICE_ENDPOINT_ID = "com.amazonaws.vpce.us-east-1.vpce-svc-0abc123";
  const DNS_DOMAIN = "abc123.us-east-1.aws.confluent.cloud";
  const DNS_SUB_DOMAIN = ["az1.abc123.us-east-1.aws.confluent.cloud"];

  new CfnStreamPrivatelinkEndpoint(
    stack,
    "stream-privatelink-confluent-stack",
    {
      profile: PROFILE,
      projectId: PROJECT_ID,
      providerName: PROVIDER_NAME,
      vendor: "CONFLUENT",
      region: REGION,
      serviceEndpointId: SERVICE_ENDPOINT_ID,
      dnsDomain: DNS_DOMAIN,
      dnsSubDomain: DNS_SUB_DOMAIN,
    }
  );

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    ProviderName: PROVIDER_NAME,
    Vendor: "CONFLUENT",
    Region: REGION,
    ServiceEndpointId: SERVICE_ENDPOINT_ID,
    DnsDomain: DNS_DOMAIN,
    DnsSubDomain: DNS_SUB_DOMAIN,
  });
});

test("CfnStreamPrivatelinkEndpoint construct should support S3 vendor", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  const SERVICE_ENDPOINT_ID = "com.amazonaws.us-east-1.s3";

  new CfnStreamPrivatelinkEndpoint(stack, "stream-privatelink-s3-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    providerName: PROVIDER_NAME,
    vendor: "S3",
    region: REGION,
    serviceEndpointId: SERVICE_ENDPOINT_ID,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    ProviderName: PROVIDER_NAME,
    Vendor: "S3",
    Region: REGION,
    ServiceEndpointId: SERVICE_ENDPOINT_ID,
  });
});

test("CfnStreamPrivatelinkEndpoint construct should work without optional properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnStreamPrivatelinkEndpoint(stack, "stream-privatelink-minimal-stack", {
    projectId: PROJECT_ID,
    providerName: PROVIDER_NAME,
    vendor: "MSK",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    ProviderName: PROVIDER_NAME,
    Vendor: "MSK",
  });
});
