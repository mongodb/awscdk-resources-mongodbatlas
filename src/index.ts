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
export {
  CfnAlertConfiguration,
  CfnAlertConfigurationProps,
  IntegerThresholdView,
  IntegerThresholdViewOperator,
  Matcher,
  MatcherFieldName,
  MatcherOperator,
  MetricThresholdView,
  MetricThresholdViewMode,
  MetricThresholdViewOperator,
  NotificationView,
  NotificationViewDatadogRegion,
  NotificationViewTypeName,
  NotificationViewOpsGenieRegion,
  NotificationViewRoles,
  NotificationViewSeverity,
} from "./l1-resources/alert-configuration";

export { CfnAuditing, CfnAuditingProps } from "./l1-resources/auditing";

export {
  CfnFederatedQueryLimit,
  CfnFederatedQueryLimitProps,
  CfnFederatedQueryLimitPropsLimitName,
} from "./l1-resources/federated-query-limit";

export {
  CfnFederatedDatabaseInstance,
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
  CfnPrivatelinkEndpointServiceDataFederationOnlineArchive,
  CfnPrivatelinkEndpointServiceDataFederationOnlineArchiveProps,
} from "./l1-resources/privatelink-endpoint-service-data-federation-online-archive";

export {
  CfnCloudBackUpRestoreJobs,
  CfnCloudBackUpRestoreJobsProps,
  CfnCloudBackUpRestoreJobsPropsDeliveryType,
} from "./l1-resources/cloud-backup-restore-jobs";

export {
  ApiAtlasDiskBackupCopySettingView,
  ApiDeleteCopiedBackupsView,
  ApiPolicyItemView,
  ApiPolicyView,
  CfnCloudBackupSchedule,
  CfnCloudBackupScheduleProps,
  Export,
  Link,
} from "./l1-resources/cloud-backup-schedule";

export {
  ApiAtlasDiskBackupShardedClusterSnapshotMemberView,
  ApiAtlasDiskBackupShardedClusterSnapshotMemberViewCloudProvider,
  ApiAtlasDiskBackupShardedClusterSnapshotView,
  ApiAtlasDiskBackupShardedClusterSnapshotViewFrequencyType,
  ApiAtlasDiskBackupShardedClusterSnapshotViewSnapshotType,
  ApiAtlasDiskBackupShardedClusterSnapshotViewStatus,
  ApiAtlasDiskBackupShardedClusterSnapshotViewType,
  CfnCloudBackupSnapshot,
  CfnCloudBackupSnapshotProps,
  CfnCloudBackupSnapshotPropsFrequencyType,
  CfnCloudBackupSnapshotPropsSnapshotType,
} from "./l1-resources/cloud-backup-snapshot";

export {
  CfnCloudBackupSnapshotExportBucket,
  CfnCloudBackupSnapshotExportBucketProps,
} from "./l1-resources/cloud-backup-snapshot-export-bucket";

export {
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
  CfnCluster,
  CfnClusterPropsEncryptionAtRestProvider,
  AdvancedRegionConfigProviderName,
  Tag,
} from "./l1-resources/clusters";

export {
  Action,
  CfnCustomDbRole,
  CfnCustomDbRoleProps,
  InheritedRole,
  Resource,
} from "./l1-resources/custom-db-role";

export {
  CfnCustomDnsConfigurationClusterAws,
  CfnCustomDnsConfigurationClusterAwsProps,
} from "./l1-resources/custom-dns-configuration-cluster-aws";

export {
  CfnDatabaseUser,
  CfnDatabaseUserProps,
  LabelDefinition,
  RoleDefinition,
  ScopeDefinition,
  CfnDatabaseUserPropsX509Type,
  CfnDatabaseUserPropsAwsiamType,
  CfnDatabaseUserPropsLdapAuthType,
  ScopeDefinitionType,
} from "./l1-resources/database-user";

export {
  CfnDataLakes,
  CfnDataLakesProps,
  DataLakeAwsCloudProviderConfigView,
  DataLakeCloudProviderConfigView,
  DataLakeDataProcessRegionView,
  DataLakeDataProcessRegionViewCloudProvider,
  DataLakeDataProcessRegionViewRegion,
  DataLakeDatabaseCollectionView,
  DataLakeDatabaseDataSourceView,
  DataLakeDatabaseDataSourceViewDefaultFormat,
  DataLakeDatabaseView,
  DataLakeStorageView,
  DataLakeViewView,
  StoreDetail,
} from "./l1-resources/datalakes";

export {
  AwsKmsConfiguration,
  CfnEncryptionAtRest,
  CfnEncryptionAtRestProps,
} from "./l1-resources/encryption-at-rest";

export {
  CfnFederatedSettingsOrgRoleMapping,
  CfnFederatedSettingsOrgRoleMappingProps,
  RoleAssignment,
} from "./l1-resources/federated-settings-org-role-mapping";

export {
  CfnGlobalClusterConfig,
  CfnGlobalClusterConfigProps,
  ManagedNamespace,
  ZoneMapping,
} from "./l1-resources/global-cluster-config";

export {
  ApiAtlasNdsUserToDnMappingView,
  CfnLdapConfiguration,
  CfnLdapConfigurationProps,
} from "./l1-resources/ldap-configuration";

export {
  CfnLdapVerify,
  CfnLdapVerifyProps,
  Validation,
} from "./l1-resources/ldap-verify";

export {
  CfnMaintenanceWindow,
  CfnMaintenanceWindowProps,
} from "./l1-resources/maintenance-window";

export {
  CfnNetworkContainer,
  CfnNetworkContainerProps,
} from "./l1-resources/network-container";

export {
  CfnNetworkPeering,
  CfnNetworkPeeringProps,
} from "./l1-resources/network-peering";

export {
  CfnOrgInvitation,
  CfnOrgInvitationProps,
  CfnOrgInvitationPropsRoles,
} from "./l1-resources/org-invitation";

export {
  CfnPrivateEndpointProps,
  CfnPrivateEndpoint,
  PrivateEndpoint,
} from "./l1-resources/private-endpoint";

export {
  CfnServerlessPrivateEndpointProps,
  CfnServerlessPrivateEndpoint,
  ServerlessPrivateEndpoint,
} from "./l1-resources/serverless-private-endpoint";

export {
  CfnPrivateEndpointAdl,
  CfnPrivateEndpointAdlProps,
} from "./l1-resources/private-endpoint-adl";

export {
  CfnPrivateEndPointRegionalMode,
  CfnPrivateEndPointRegionalModeProps,
} from "./l1-resources/private-endpoint-regional-mode";

export {
  CfnProject,
  CfnProjectProps,
  ProjectApiKey,
  ProjectSettings,
  ProjectTeam,
} from "./l1-resources/project";

export {
  CfnProjectInvitation,
  CfnProjectInvitationProps,
  CfnProjectInvitationPropsRoles,
} from "./l1-resources/project-invitation";

export {
  AccessListDefinition,
  CfnProjectIpAccessList,
  CfnProjectIpAccessListProps,
  ListOptions,
} from "./l1-resources/project-ip-access-list";

export {
  ApiAtlasFtsAnalyzersViewManual,
  ApiAtlasFtsMappingsViewManual,
  ApiAtlasFtsSynonymMappingDefinitionView,
  CfnSearchIndex,
  CfnSearchIndexProps,
  SynonymSource,
} from "./l1-resources/search-index";

export {
  CfnServerlessInstance,
  CfnServerlessInstanceProps,
  ServerlessInstanceConnectionStrings,
  ServerlessInstancePrivateEndpoint,
  ServerlessInstancePrivateEndpointEndpoint,
  ServerlessInstancePrivateEndpointType,
  ServerlessInstanceProviderSettings,
  ServerlessInstanceProviderSettingsProviderName,
} from "./l1-resources/serverless-instance";

export {
  CfnTeams,
  CfnTeamsProps,
  CfnTeamsPropsRoleNames,
  AtlasRoleRoleName,
  AtlasRole,
  AtlasUser,
} from "./l1-resources/teams";

export {
  AuthConfig,
  AuthConfigOperationType,
  AuthConfigProviders,
  CfnTrigger,
  CfnTriggerProps,
  DatabaseConfig,
  DatabaseConfigOperationTypes,
  Event,
  EventAwseventbridge,
  EventAwseventbridgeAwsConfig,
  EventFunction,
  EventFunctionFuncConfig,
  ScheduleConfig,
} from "./l1-resources/trigger";

export {
  CfnThirdPartyIntegration,
  CfnThirdPartyIntegrationProps,
  CfnThirdPartyIntegrationPropsScheme,
  CfnThirdPartyIntegrationPropsServiceDiscovery,
  CfnThirdPartyIntegrationPropsType,
} from "./l1-resources/third-party-integration";

export {
  CfnX509AuthenticationDatabaseUser,
  CfnX509AuthenticationDatabaseUserProps,
  CustomerX509,
} from "./l1-resources/x509-authentication-database-user";

export {
  CfnOnlineArchive,
  CfnOnlineArchiveProps,
  CfnOnlineArchivePropsCollectionType,
  CriteriaView,
  CriteriaViewDateFormat,
  CriteriaViewType,
  PartitionFieldView,
  PartitionFieldViewFieldType,
  ScheduleView,
  ScheduleViewType,
} from "./l1-resources/online-archive";

// L2 Constructors
export * from "./l2-resources/encryption-at-rest";
export * from "./l2-resources/third-party-integration";

// L3 Constructors
export * from "./l3-resources/atlas-basic";
export * from "./l3-resources/atlas-serverless-basic";
export * from "./l3-resources/atlas-basic-private-endpoint";
export * from "./l3-resources/encryption-at-rest-express";

export * from "./l3-resources/common/props";
