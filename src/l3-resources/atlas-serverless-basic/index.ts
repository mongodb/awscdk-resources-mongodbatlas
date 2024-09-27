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

import { Construct } from "constructs";
import * as atlas from "../../index";
import { AtlasServerlessBasicProps } from "../common/props";

/** @type {*} */
const dbDefaults = {
  dbName: "admin",
  username: "atlas-user",
  password: "atlas-pwd",
  roles: [
    {
      roleName: "atlasAdmin",
      databaseName: "admin",
    },
  ],
};

/**
 * @description
 * @export
 * @class AtlasBasic
 * @extends {Construct}
 */
export class AtlasServerlessBasic extends Construct {
  /**
   * @description
   * @type {project.CfnProject}
   * @memberof AtlasServerlessBasic
   */
  readonly mProject: atlas.CfnProject;
  /**
   * @description
   * @type {atlas.CfnCluster}
   * @memberof AtlasServerlessBasic
   */
  readonly mserverless: atlas.CfnServerlessInstance;
  /**
   * @description
   * @type {user.CfnDatabaseUser}
   * @memberof AtlasServerlessBasic
   */
  readonly mDBUser: atlas.CfnDatabaseUser;
  /**
   * @description
   * @type {ipAccessList.CfnProjectIpAccessList}
   * @memberof AtlasServerlessBasic
   */
  readonly ipAccessList: atlas.CfnProjectIpAccessList;

  /**
   * Creates an instance of AtlasServerlessBasic.
   * @param {Construct} scope
   * @param {string} id
   * @param {AtlasServerlessBasicProps} props
   * @memberof AtlasServerlessBasic
   */
  constructor(scope: Construct, id: string, props: AtlasServerlessBasicProps) {
    super(scope, id);
    //Create a new MongoDB Atlas Project
    this.mProject = new atlas.CfnProject(this, "project-".concat(id), {
      profile: props.profile,
      name: props.projectProps.name ?? `project-${id}`,
      projectOwnerId: props.projectProps.projectOwnerId,
      ...props.projectProps,
    });
    // Create a new serverless Instance and pass project ID
    this.mserverless = new atlas.CfnServerlessInstance(
      this,
      "serverless-".concat(id),
      {
        projectId: this.mProject.attrId,
        name: props.serverlessProps.name ?? `serverless-${id}`,
        providerSettings: props.serverlessProps.providerSettings,
        profile: props.profile,
        continuousBackupEnabled: props.serverlessProps.continuousBackupEnabled,
        ...props.serverlessProps,
      }
    );
    this.mserverless.addDependency(this.mProject);
    // Create a new MongoDB Atlas Database User
    this.mDBUser = new atlas.CfnDatabaseUser(this, "db-user-".concat(id), {
      profile: props.profile,
      databaseName: props.dbUserProps?.databaseName || dbDefaults.dbName,
      projectId: this.mProject.attrId,
      username: props.dbUserProps?.username || dbDefaults.username,
      roles: props.dbUserProps?.roles || dbDefaults.roles,
      password: props.dbUserProps?.password || dbDefaults.password,
      ...props.dbUserProps,
    });
    this.mDBUser.addDependency(this.mProject);
    // Create a new MongoDB Atlas Project IP Access List
    this.ipAccessList = new atlas.CfnProjectIpAccessList(
      this,
      "ip-access-list-".concat(id),
      {
        profile: props.profile,
        projectId: this.mProject.attrId,
        accessList: props.ipAccessListProps?.accessList || [],
        ...props.ipAccessListProps,
      }
    );
    this.ipAccessList.addDependency(this.mProject);
  }
}
