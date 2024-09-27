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
import { AtlasBasicProps } from "../common/props";

/** @type {*} */
const projectDefaults = {
  projectName: "atlas-project-",
};
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
/** @type {*} */
const clusterDefaults = {
  clusterName: "atlas-cluster-",
  clusterType: "REPLICASET",
};

/**
 * @description
 * @export
 * @class AtlasBasic
 * @extends {Construct}
 */
export class AtlasBasic extends Construct {
  /**
   * @description
   * @type {project.CfnProject}
   * @memberof AtlasBasic
   */
  readonly mProject: atlas.CfnProject;
  /**
   * @description
   * @type {atlas.CfnCluster}
   * @memberof AtlasBasic
   */
  readonly mCluster: atlas.CfnCluster;
  /**
   * @description
   * @type {user.CfnDatabaseUser}
   * @memberof AtlasBasic
   */
  readonly mDBUser: atlas.CfnDatabaseUser;
  /**
   * @description
   * @type {ipAccessList.CfnProjectIpAccessList}
   * @memberof AtlasBasic
   */
  readonly ipAccessList: atlas.CfnProjectIpAccessList;

  /**
   * Creates an instance of AtlasBasic.
   * @param {Construct} scope
   * @param {string} id
   * @param {AtlasBasicProps} props
   * @memberof AtlasBasic
   */
  constructor(scope: Construct, id: string, props: AtlasBasicProps) {
    super(scope, id);
    //Create a new MongoDB Atlas Project
    this.mProject = new atlas.CfnProject(this, "project-".concat(id), {
      profile: props.profile,
      name:
        props.projectProps.name ||
        projectDefaults.projectName.concat(String(randomNumber())),
      projectOwnerId: props.projectProps.projectOwnerId,
      ...props.projectProps,
    });
    // Create a new MongoDB Atlas Cluster and pass project ID
    this.mCluster = new atlas.CfnCluster(this, "cluster-".concat(id), {
      profile: props.profile,
      name:
        props.clusterProps.name ||
        clusterDefaults.clusterName.concat(String(randomNumber())),
      projectId: this.mProject.attrId,
      clusterType: clusterDefaults.clusterType,
      ...props.clusterProps,
    });
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
    // Create a new MongoDB Atlas Project IP Access List
    this.ipAccessList = new atlas.CfnProjectIpAccessList(
      this,
      "ip-access-list-".concat(id),
      {
        profile: props.profile,
        projectId: this.mProject.attrId,
        ...props.ipAccessListProps,
      }
    );
  }
}

function randomNumber() {
  const min = 10;
  const max = 9999999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
