// This example creates IP access list entries for a MongoDB Atlas Project Service Account using the L1 resources.
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnProjectServiceAccount, CfnProjectServiceAccountAccessListEntry } from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly profile: string;
  readonly projectId: string;
  readonly ipAddress: string;
  readonly cidrBlock: string;
}

export class CdkTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();

    // Create a Project Service Account first
    const projectServiceAccount = new CfnProjectServiceAccount(this, 'ProjectServiceAccount', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      name: 'my-project-service-account',
      description: 'Service account for project automation',
      roles: ['GROUP_READ_ONLY'],
      secretExpiresAfterHours: 8760,
    });

    // Allow a single IP address
    new CfnProjectServiceAccountAccessListEntry(this, 'AccessListIpEntry', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      clientId: projectServiceAccount.attrClientId,
      ipAddress: atlasProps.ipAddress,
    });

    // Allow a CIDR block
    new CfnProjectServiceAccountAccessListEntry(this, 'AccessListCidrEntry', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      clientId: projectServiceAccount.attrClientId,
      cidrBlock: atlasProps.cidrBlock,
    });
  }

  getContextProps(): AtlasStackProps {
    const projectId = this.node.tryGetContext('projectId');
    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context.";
    }

    const profile = this.node.tryGetContext('profile') ?? 'default';
    const ipAddress = this.node.tryGetContext('ipAddress') ?? '192.168.1.10';
    const cidrBlock = this.node.tryGetContext('cidrBlock') ?? '10.0.0.0/24';

    return {
      profile,
      projectId,
      ipAddress,
      cidrBlock,
    };
  }
}
