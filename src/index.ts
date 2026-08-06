// Copyright 2023 MongoDB Inc
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

// L1 Constructors

export { CfnAccessListApiKey } from "./l1-resources/access-list-api-key";

export type { CfnAccessListApiKeyProps } from "./l1-resources/access-list-api-key";

export {
  CfnAlertConfiguration,
  IntegerThresholdViewOperator,
  MatcherFieldName,
  MatcherOperator,
  MetricThresholdViewMode,
  MetricThresholdViewOperator,
  NotificationViewDatadogRegion,
  NotificationViewTypeName,
  NotificationViewOpsGenieRegion,
  NotificationViewRoles,
  NotificationViewSeverity,
} from "./l1-resources/alert-configuration";

export type {
  CfnAlertConfigurationProps,
  IntegerThresholdView,
  Matcher,
  MetricThresholdView,
  NotificationView,
} from "./l1-resources/alert-configuration";

export { CfnApiKey } from "./l1-resources/api-key";

export type { CfnApiKeyProps, ProjectAssignment } from "./l1-resources/api-key";

export { CfnAuditing } from "./l1-resources/auditing";

export type { CfnAuditingProps } from "./l1-resources/auditing";

export {
  CfnBackupCompliancePolicy,
  OnDemandPolicyItemRetentionUnit,
  ScheduledPolicyItemRetentionUnit,
} from "./l1-resources/backup-compliance-policy";

export type {
  CfnBackupCompliancePolicyProps,
  OnDemandPolicyItem,
  ScheduledPolicyItem,
} from "./l1-resources/backup-compliance-policy";

export {
  CfnCloudBackUpRestoreJobs,
  CfnCloudBackUpRestoreJobsPropsDeliveryType,
  CfnCloudBackUpRestoreJobsPropsInstanceType,
} from "./l1-resources/cloud-backup-restore-jobs";

export type {
  CfnCloudBackUpRestoreJobsProps,
  CfnCloudBackUpRestoreJobsPropsLinks,
  SynchronousCreationOptions,
} from "./l1-resources/cloud-backup-restore-jobs";

export { CfnCloudBackupSchedule } from "./l1-resources/cloud-backup-schedule";

export type {
  ApiAtlasDiskBackupCopySettingView,
  ApiDeleteCopiedBackupsView,
  ApiPolicyItemView,
  ApiPolicyView,
  CfnCloudBackupScheduleProps,
  Export,
  Link,
} from "./l1-resources/cloud-backup-schedule";

export {
  ApiAtlasDiskBackupShardedClusterSnapshotMemberViewCloudProvider,
  ApiAtlasDiskBackupShardedClusterSnapshotViewFrequencyType,
  ApiAtlasDiskBackupShardedClusterSnapshotViewSnapshotType,
  ApiAtlasDiskBackupShardedClusterSnapshotViewStatus,
  ApiAtlasDiskBackupShardedClusterSnapshotViewType,
  CfnCloudBackupSnapshot,
  CfnCloudBackupSnapshotPropsFrequencyType,
  CfnCloudBackupSnapshotPropsSnapshotType,
  CfnCloudBackupSnapshotPropsInstanceType,
} from "./l1-resources/cloud-backup-snapshot";

export type {
  ApiAtlasDiskBackupShardedClusterSnapshotMemberView,
  ApiAtlasDiskBackupShardedClusterSnapshotView,
  CfnCloudBackupSnapshotProps,
} from "./l1-resources/cloud-backup-snapshot";

export { CfnCloudBackupSnapshotExportBucket } from "./l1-resources/cloud-backup-snapshot-export-bucket";

export type { CfnCloudBackupSnapshotExportBucketProps } from "./l1-resources/cloud-backup-snapshot-export-bucket";

export {
  CfnClusterOutageSimulation,
  FilterCloudProvider,
} from "./l1-resources/cluster-outage-simulation";

export type {
  CfnClusterOutageSimulationProps,
  Filter,
} from "./l1-resources/cluster-outage-simulation";

export {
  CfnCluster,
  CfnClusterPropsEncryptionAtRestProvider,
  AdvancedRegionConfigProviderName,
} from "./l1-resources/cluster";

export type {
  CfnClusterProps,
  ProcessArgs,
  CfnClusterPropsBiConnector,
  CfnClusterPropsLabels,
  ConnectionStrings,
  AdvancedReplicationSpec,
  AdvancedAutoScaling,
  Specs,
  DiskGb,
  Compute,
  AdvancedRegionConfig,
  Tag,
} from "./l1-resources/cluster";

export { CfnCustomDbRole } from "./l1-resources/custom-db-role";

export type {
  Action,
  CfnCustomDbRoleProps,
  InheritedRole,
  Resource,
} from "./l1-resources/custom-db-role";

export { CfnCustomDnsConfigurationClusterAws } from "./l1-resources/custom-dns-configuration-cluster-aws";

export type { CfnCustomDnsConfigurationClusterAwsProps } from "./l1-resources/custom-dns-configuration-cluster-aws";

export {
  CfnDatabaseUser,
  CfnDatabaseUserPropsX509Type,
  CfnDatabaseUserPropsAwsiamType,
  CfnDatabaseUserPropsLdapAuthType,
  CfnDatabaseUserPropsOidcAuthType,
  ScopeDefinitionType,
} from "./l1-resources/database-user";

export type {
  CfnDatabaseUserProps,
  LabelDefinition,
  RoleDefinition,
  ScopeDefinition,
} from "./l1-resources/database-user";

export { CfnEncryptionAtRest } from "./l1-resources/encryption-at-rest";

export type {
  AwsKmsConfig,
  CfnEncryptionAtRestProps,
} from "./l1-resources/encryption-at-rest";

export { CfnFederatedDatabaseInstance } from "./l1-resources/federated-database-instance";

export type {
  CfnFederatedDatabaseInstanceProps,
  CloudProviderConfig,
  DataProcessRegion,
  Storage,
  Database,
  Store,
  Collection,
  DataSource,
  ReadPreference,
  TagSet,
  View,
} from "./l1-resources/federated-database-instance";

export {
  CfnFederatedQueryLimit,
  CfnFederatedQueryLimitPropsLimitName,
} from "./l1-resources/federated-query-limit";

export type { CfnFederatedQueryLimitProps } from "./l1-resources/federated-query-limit";

export {
  CfnFederatedSettingsIdentityProvider,
  CfnFederatedSettingsIdentityProviderPropsProtocol,
} from "./l1-resources/federated-settings-identity-provider";

export type { CfnFederatedSettingsIdentityProviderProps } from "./l1-resources/federated-settings-identity-provider";

export { CfnFederatedSettingsOrgRoleMapping } from "./l1-resources/federated-settings-org-role-mapping";

export type {
  CfnFederatedSettingsOrgRoleMappingProps,
  RoleAssignment,
} from "./l1-resources/federated-settings-org-role-mapping";

export { CfnFlexCluster } from "./l1-resources/flex-cluster";

export type {
  CfnFlexClusterProps,
  ProviderSettings,
  BackupSettings,
  ConnectionStrings as FlexConnectionStrings, // Conflicts with cluster
  Tag as FlexTag, // Conflicts with cluster
} from "./l1-resources/flex-cluster";

export { CfnGlobalClusterConfig } from "./l1-resources/global-cluster-config";

export type {
  CfnGlobalClusterConfigProps,
  ManagedNamespace,
  ZoneMapping,
} from "./l1-resources/global-cluster-config";

export { CfnLdapConfiguration } from "./l1-resources/ldap-configuration";

export type {
  ApiAtlasNdsUserToDnMappingView,
  CfnLdapConfigurationProps,
} from "./l1-resources/ldap-configuration";

export { CfnLdapVerify } from "./l1-resources/ldap-verify";

export type {
  CfnLdapVerifyProps,
  Validation,
} from "./l1-resources/ldap-verify";

export { CfnLogIntegration } from "./l1-resources/log-integration";

export type { CfnLogIntegrationProps } from "./l1-resources/log-integration";

export { CfnMaintenanceWindow } from "./l1-resources/maintenance-window";

export type {
  CfnMaintenanceWindowProps,
  CfnMaintenanceWindowPropsProtectedHours,
} from "./l1-resources/maintenance-window";

export { CfnMongoDbEmployeeAccessGrant } from "./l1-resources/mongodb-employee-access-grant";

export type { CfnMongoDbEmployeeAccessGrantProps } from "./l1-resources/mongodb-employee-access-grant";

export { CfnNetworkContainer } from "./l1-resources/network-container";

export type { CfnNetworkContainerProps } from "./l1-resources/network-container";

export { CfnNetworkPeering } from "./l1-resources/network-peering";

export type { CfnNetworkPeeringProps } from "./l1-resources/network-peering";

export {
  CfnOnlineArchive,
  CfnOnlineArchivePropsCollectionType,
  CriteriaViewDateFormat,
  CriteriaViewType,
  ScheduleViewType,
} from "./l1-resources/online-archive";

export type {
  CfnOnlineArchiveProps,
  CriteriaView,
  PartitionFieldView,
  ScheduleView,
} from "./l1-resources/online-archive";

export {
  CfnOrgInvitation,
  CfnOrgInvitationPropsRoles,
} from "./l1-resources/org-invitation";

export type { CfnOrgInvitationProps } from "./l1-resources/org-invitation";

export { CfnOrganization } from "./l1-resources/organization";

export type { CfnOrganizationProps, ApiKey } from "./l1-resources/organization";

export { CfnPrivateEndpoint } from "./l1-resources/private-endpoint";

export type {
  CfnPrivateEndpointProps,
  PrivateEndpoint,
} from "./l1-resources/private-endpoint";

export { CfnPrivateEndpointAws } from "./l1-resources/private-endpoint-aws";

export type { CfnPrivateEndpointAwsProps } from "./l1-resources/private-endpoint-aws";

export { CfnPrivateEndPointRegionalMode } from "./l1-resources/private-endpoint-regional-mode";

export type { CfnPrivateEndPointRegionalModeProps } from "./l1-resources/private-endpoint-regional-mode";

export {
  CfnPrivateEndpointService,
  CfnPrivateEndpointServicePropsCloudProvider,
} from "./l1-resources/private-endpoint-service";

export type { CfnPrivateEndpointServiceProps } from "./l1-resources/private-endpoint-service";

export { CfnPrivatelinkEndpointServiceDataFederationOnlineArchive } from "./l1-resources/privatelink-endpoint-service-data-federation-online-archive";

export type { CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps } from "./l1-resources/privatelink-endpoint-service-data-federation-online-archive";

export { CfnProject } from "./l1-resources/project";

export type {
  CfnProjectProps,
  ProjectApiKey,
  ProjectSettings,
  ProjectTeam,
} from "./l1-resources/project";

export {
  CfnProjectInvitation,
  CfnProjectInvitationPropsRoles,
} from "./l1-resources/project-invitation";

export type { CfnProjectInvitationProps } from "./l1-resources/project-invitation";

export { CfnProjectIpAccessList } from "./l1-resources/project-ip-access-list";

export type {
  AccessListDefinition,
  CfnProjectIpAccessListProps,
  ListOptions,
} from "./l1-resources/project-ip-access-list";

export { CfnProjectServiceAccount } from "./l1-resources/project-service-account";

export type {
  CfnProjectServiceAccountProps,
  SecretDefinition,
} from "./l1-resources/project-service-account";

export { CfnProjectServiceAccountAccessListEntry } from "./l1-resources/project-service-account-access-list-entry";

export type { CfnProjectServiceAccountAccessListEntryProps } from "./l1-resources/project-service-account-access-list-entry";

export { CfnProjectServiceAccountSecret } from "./l1-resources/project-service-account-secret";

export type { CfnProjectServiceAccountSecretProps } from "./l1-resources/project-service-account-secret";

export { CfnResourcePolicy } from "./l1-resources/resource-policy";

export type {
  CfnResourcePolicyProps,
  ApiAtlasPolicy,
  ApiAtlasUserMetadata,
} from "./l1-resources/resource-policy";

export { CfnSearchDeployment } from "./l1-resources/search-deployment";

export type {
  CfnSearchDeploymentProps,
  ApiSearchDeploymentSpec,
} from "./l1-resources/search-deployment";

export { CfnSearchIndex } from "./l1-resources/search-index";

export type {
  ApiAtlasFtsAnalyzersTokenizer,
  ApiAtlasFtsAnalyzersViewManual,
  ApiAtlasFtsMappingsViewManual,
  ApiAtlasFtsSynonymMappingDefinitionView,
  CfnSearchIndexProps,
  SynonymSource,
  TypeSet,
} from "./l1-resources/search-index";

export { CfnServiceAccount } from "./l1-resources/service-account";

export type {
  CfnServiceAccountProps,
  Secret,
} from "./l1-resources/service-account";

export { CfnServiceAccountAccessListEntry } from "./l1-resources/service-account-access-list-entry";

export type { CfnServiceAccountAccessListEntryProps } from "./l1-resources/service-account-access-list-entry";

export { CfnServiceAccountProjectAssignment } from "./l1-resources/service-account-project-assignment";

export type { CfnServiceAccountProjectAssignmentProps } from "./l1-resources/service-account-project-assignment";

export { CfnServiceAccountSecret } from "./l1-resources/service-account-secret";

export type { CfnServiceAccountSecretProps } from "./l1-resources/service-account-secret";

export {
  CfnStreamConnection,
  CfnStreamConnectionPropsType,
  DbRoleToExecuteType,
} from "./l1-resources/stream-connection";

export type {
  CfnStreamConnectionProps,
  DbRoleToExecute,
  StreamsKafkaAuthentication,
  StreamsKafkaSecurity,
  Networking,
  NetworkingAccess,
  SchemaRegistryAuthentication,
  Aws,
} from "./l1-resources/stream-connection";

export {
  CfnStreamInstance,
  StreamsDataProcessRegionCloudProvider,
  StreamsConnectionType,
} from "./l1-resources/stream-instance";

export type {
  CfnStreamInstanceProps,
  StreamsDataProcessRegion,
  StreamConfig,
  StreamsConnection,
} from "./l1-resources/stream-instance";

export { CfnStreamPrivatelinkEndpoint } from "./l1-resources/stream-privatelink-endpoint";

export type { CfnStreamPrivatelinkEndpointProps } from "./l1-resources/stream-privatelink-endpoint";

export {
  CfnStreamProcessor,
  CfnStreamProcessorPropsDesiredState,
} from "./l1-resources/stream-processor";

export type {
  CfnStreamProcessorProps,
  StreamsOptions,
  StreamsDlq,
  Timeouts,
} from "./l1-resources/stream-processor";

export {
  CfnStreamWorkspace,
  StreamsDataProcessRegionCloudProvider as StreamWorkspaceDataProcessRegionCloudProvider,
} from "./l1-resources/stream-workspace";

export type {
  CfnStreamWorkspaceProps,
  StreamsDataProcessRegion as StreamWorkspaceDataProcessRegion,
  StreamConfig as StreamWorkspaceStreamConfig,
} from "./l1-resources/stream-workspace";

export {
  CfnTeams,
  CfnTeamsPropsRoleNames,
  AtlasRoleRoleName,
} from "./l1-resources/teams";

export type { CfnTeamsProps, AtlasRole, AtlasUser } from "./l1-resources/teams";

export {
  CfnThirdPartyIntegration,
  CfnThirdPartyIntegrationPropsServiceDiscovery,
  CfnThirdPartyIntegrationPropsType,
} from "./l1-resources/third-party-integration";

export type { CfnThirdPartyIntegrationProps } from "./l1-resources/third-party-integration";

export {
  AuthConfigOperationType,
  AuthConfigProviders,
  CfnTrigger,
  DatabaseConfigOperationTypes,
} from "./l1-resources/trigger";

export type {
  AuthConfig,
  CfnTriggerProps,
  DatabaseConfig,
  Event,
  EventAwseventbridge,
  EventAwseventbridgeAwsConfig,
  EventFunction,
  EventFunctionFuncConfig,
  ScheduleConfig,
} from "./l1-resources/trigger";

export { CfnX509AuthenticationDatabaseUser } from "./l1-resources/x509-authentication-database-user";

export type {
  CfnX509AuthenticationDatabaseUserProps,
  CustomerX509,
} from "./l1-resources/x509-authentication-database-user";

// L2 Constructors

export * from "./l2-resources/encryption-at-rest";
export * from "./l2-resources/third-party-integration";

// L3 Constructors

export * from "./l3-resources/common/props";

export * from "./l3-resources/atlas-basic";
export * from "./l3-resources/atlas-basic-private-endpoint";
export * from "./l3-resources/encryption-at-rest-express";
export * from "./l3-resources/atlas-bootstrap";
