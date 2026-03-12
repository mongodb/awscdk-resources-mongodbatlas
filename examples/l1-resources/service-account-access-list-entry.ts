// This example creates IP access list entries for a MongoDB Atlas Service Account using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnServiceAccount, CfnServiceAccountAccessListEntry } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly orgId: string;
  readonly ipAddress: string;
  readonly cidrBlock: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    // Create a Service Account first
    const serviceAccount = new CfnServiceAccount(this, 'ServiceAccount', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      name: 'my-service-account',
      description: 'Service account for automated access',
      roles: ['ORG_MEMBER'],
      secretExpiresAfterHours: 8760,
    });

    // Allow a single IP address
    new CfnServiceAccountAccessListEntry(this, 'AccessListIpEntry', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      clientId: serviceAccount.attrClientId,
      ipAddress: atlasProps.ipAddress,
    });

    // Allow a CIDR block
    new CfnServiceAccountAccessListEntry(this, 'AccessListCidrEntry', {
      profile: atlasProps.profile,
      orgId: atlasProps.orgId,
      clientId: serviceAccount.attrClientId,
      cidrBlock: atlasProps.cidrBlock,
    });
  }

  getContextProps(): AtlasStackProps {
    const orgId = this.node.tryGetContext('orgId');
    if (!orgId) {
      throw "No context value specified for orgId. Please specify via the cdk context.";
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const ipAddress = this.node.tryGetContext('ipAddress') ?? '192.168.1.10';
    const cidrBlock = this.node.tryGetContext('cidrBlock') ?? '10.0.0.0/24';

    return {
      profile,
      orgId,
      ipAddress,
      cidrBlock,
    };
  }
}
