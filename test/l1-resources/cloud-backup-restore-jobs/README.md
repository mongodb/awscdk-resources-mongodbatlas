# Cloud Backup Restore Jobs


## CFN resource type used
- MongoDB::Atlas::CloudBackUpRestoreJobs

This CFN resource must be active in your AWS account while using this constructor.


## Manual QA
- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [Cloud Backup Restore Jobs CFN resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/cloud-backup-restore-jobs/test/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Please, follows the steps in [TESTING.md](../../../TESTING.md).


### Success criteria when testing the resource
- Backup restore job for the Atlas Cluster should be shown in "Restores & Downloads" page:
![image](https://user-images.githubusercontent.com/5663078/227225795-0f1b6650-95fe-40ca-942d-99902b747aa2.png)


## Important Links
- [API Documentation](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-cloud-backups)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/restore-overview/)