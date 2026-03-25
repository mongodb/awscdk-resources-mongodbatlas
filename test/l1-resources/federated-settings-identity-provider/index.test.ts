// Copyright 2026 MongoDB Inc
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
import {
  CfnFederatedSettingsIdentityProvider,
  CfnFederatedSettingsIdentityProviderPropsProtocol,
} from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::FederatedSettingsIdentityProvider";
const PROFILE = "default";
const FEDERATION_SETTINGS_ID = "fedSettingsId12345678901";
const IDP_NAME = "MyIdentityProvider";
const ISSUER_URI = "https://idp.example.com";

test("CfnFederatedSettingsIdentityProvider construct should support SAML identity provider", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnFederatedSettingsIdentityProvider(stack, "idp-saml-stack", {
    profile: PROFILE,
    federationSettingsId: FEDERATION_SETTINGS_ID,
    name: IDP_NAME,
    issuerUri: ISSUER_URI,
    protocol: CfnFederatedSettingsIdentityProviderPropsProtocol.SAML,
    ssoUrl: "https://idp.example.com/sso/saml",
    requestBinding: "HTTP-POST",
    responseSignatureAlgorithm: "SHA-256",
    ssoDebugEnabled: false,
    status: "ACTIVE",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    FederationSettingsId: FEDERATION_SETTINGS_ID,
    Name: IDP_NAME,
    IssuerUri: ISSUER_URI,
    Protocol: CfnFederatedSettingsIdentityProviderPropsProtocol.SAML,
    SsoUrl: "https://idp.example.com/sso/saml",
    RequestBinding: "HTTP-POST",
    ResponseSignatureAlgorithm: "SHA-256",
    SsoDebugEnabled: false,
    Status: "ACTIVE",
  });
});

test("CfnFederatedSettingsIdentityProvider construct should support OIDC identity provider", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnFederatedSettingsIdentityProvider(stack, "idp-oidc-stack", {
    federationSettingsId: FEDERATION_SETTINGS_ID,
    name: IDP_NAME,
    issuerUri: ISSUER_URI,
    protocol: CfnFederatedSettingsIdentityProviderPropsProtocol.OIDC,
    clientId: "oidcClientId123",
    audience: "https://audience.example.com",
    groupsClaim: "groups",
    userClaim: "sub",
    requestedScopes: ["openid", "profile", "email"],
    authorizationType: "GROUP",
    idpType: "WORKFORCE",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Protocol: CfnFederatedSettingsIdentityProviderPropsProtocol.OIDC,
    ClientId: "oidcClientId123",
    Audience: "https://audience.example.com",
    GroupsClaim: "groups",
    UserClaim: "sub",
    RequestedScopes: ["openid", "profile", "email"],
    AuthorizationType: "GROUP",
    IdpType: "WORKFORCE",
  });
});

test("CfnFederatedSettingsIdentityProvider construct should support associatedDomains and description", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnFederatedSettingsIdentityProvider(stack, "idp-domains-stack", {
    federationSettingsId: FEDERATION_SETTINGS_ID,
    name: IDP_NAME,
    issuerUri: ISSUER_URI,
    associatedDomains: ["example.com", "corp.example.com"],
    description: "Corporate SSO identity provider",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    AssociatedDomains: ["example.com", "corp.example.com"],
    Description: "Corporate SSO identity provider",
  });
});

test("CfnFederatedSettingsIdentityProvider construct should work with only required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnFederatedSettingsIdentityProvider(stack, "idp-minimal-stack", {
    federationSettingsId: FEDERATION_SETTINGS_ID,
    name: IDP_NAME,
    issuerUri: ISSUER_URI,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    FederationSettingsId: FEDERATION_SETTINGS_ID,
    Name: IDP_NAME,
    IssuerUri: ISSUER_URI,
  });
});
