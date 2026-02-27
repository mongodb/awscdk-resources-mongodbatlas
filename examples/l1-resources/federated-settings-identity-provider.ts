// This example creates SAML and OIDC identity providers for MongoDB Atlas Federated Authentication.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  CfnFederatedSettingsIdentityProvider,
  CfnFederatedSettingsIdentityProviderPropsProtocol,
} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly federationSettingsId: string;
  readonly issuerUri: string;
  readonly ssoUrl: string;
  readonly associatedDomains: string[];
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    // SAML identity provider
    new CfnFederatedSettingsIdentityProvider(this, 'SamlIdentityProvider', {
      profile: atlasProps.profile,
      federationSettingsId: atlasProps.federationSettingsId,
      name: 'CorporateSAMLIdP',
      issuerUri: atlasProps.issuerUri,
      protocol: CfnFederatedSettingsIdentityProviderPropsProtocol.SAML,
      ssoUrl: atlasProps.ssoUrl,
      requestBinding: 'HTTP-POST',
      responseSignatureAlgorithm: 'SHA-256',
      associatedDomains: atlasProps.associatedDomains,
      ssoDebugEnabled: false,
      status: 'ACTIVE',
    });

    // OIDC identity provider
    new CfnFederatedSettingsIdentityProvider(this, 'OidcIdentityProvider', {
      profile: atlasProps.profile,
      federationSettingsId: atlasProps.federationSettingsId,
      name: 'CorporateOIDCIdP',
      issuerUri: atlasProps.issuerUri,
      protocol: CfnFederatedSettingsIdentityProviderPropsProtocol.OIDC,
      clientId: 'oidcClientId123',
      audience: atlasProps.issuerUri,
      groupsClaim: 'groups',
      userClaim: 'sub',
      requestedScopes: ['openid', 'profile', 'email'],
      authorizationType: 'GROUP',
      idpType: 'WORKFORCE',
    });
  }

  getContextProps(): AtlasStackProps {
    const profile = this.node.tryGetContext('profile') ?? 'default';

    const federationSettingsId = this.node.tryGetContext('federationSettingsId');
    if (!federationSettingsId) {
      throw "No context value specified for federationSettingsId. Please specify via the cdk context.";
    }

    const issuerUri = this.node.tryGetContext('issuerUri');
    if (!issuerUri) {
      throw "No context value specified for issuerUri. Please specify via the cdk context.";
    }

    const ssoUrl = this.node.tryGetContext('ssoUrl');
    if (!ssoUrl) {
      throw "No context value specified for ssoUrl. Please specify via the cdk context.";
    }

    const domainsRaw = this.node.tryGetContext('associatedDomains') ?? 'example.com';
    const associatedDomains: string[] = domainsRaw.split(',');

    return {
      profile,
      federationSettingsId,
      issuerUri,
      ssoUrl,
      associatedDomains,
    };
  }
}
