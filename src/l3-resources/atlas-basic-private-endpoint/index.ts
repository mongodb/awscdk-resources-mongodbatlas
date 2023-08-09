// // Copyright 2023 MongoDB Inc
// //
// // Licensed under the Apache License, Version 2.0 (the "License");
// // you may not use this file except in compliance with the License.
// // You may obtain a copy of the License at
// //
// //      http://www.apache.org/licenses/LICENSE-2.0
// //
// // Unless required by applicable law or agreed to in writing, software
// // distributed under the License is distributed on an "AS IS" BASIS,
// // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// // See the License for the specific language governing permissions and
// // limitations under the License.

// import { Construct } from "constructs";
// import { CfnPrivateEndpoint, PrivateEndpoint } from "../../index";
// import { AtlasBasic } from "../atlas-basic";
// import { AtlasBasicProps } from "../common/props";

// /** @type {*} */
// const privateEndpointDefaults = {
//   region: "us-east-1",
// };

// /**
//  * @description
//  * @export
//  * @class AtlasBasicPrivateEndpoint
//  * @extends {Construct}
//  */
// export class AtlasBasicPrivateEndpoint extends Construct {
//   readonly atlasBasic: AtlasBasic;
//   readonly privateEndpoint: CfnPrivateEndpoint;

//   /**
//    * Creates an instance of AtlasBasicPrivateEndpoint.
//    * @param {Construct} scope
//    * @param {string} id
//    * @param {AtlasBasicPrivateEndpointProps} props
//    * @memberof AtlasBasicPrivateEndpoint
//    */
//   constructor(
//     scope: Construct,
//     id: string,
//     props: AtlasBasicPrivateEndpointProps
//   ) {
//     super(scope, id);
//     validate(props);
//     // Validation for atlas basic would be delegated to the library
//     this.atlasBasic = new AtlasBasic(this, "atlas-basic-".concat(id), {
//       ...props.atlasBasicProps,
//       profile: props.profile,
//     });
//     this.privateEndpoint = new CfnPrivateEndpoint(
//       this,
//       "private-endpoint-".concat(id),
//       {
//         profile: props.profile,
//         groupId: this.atlasBasic.mProject.attrId,
//         region: props.region || privateEndpointDefaults.region,
//         ...props.privateEndpointProps,
//       }
//     );
//   }
// }

// const validate = (props: AtlasBasicPrivateEndpointProps) => {
//   if (!props.atlasBasicProps.projectProps.orgId) {
//     throw Error("Validation error: orgId is not defined");
//   }
// };

// /**
//  * @description
//  * @export
//  * @interface AtlasBasicPrivateEndpointProps
//  */
// export interface AtlasBasicPrivateEndpointProps {
//   readonly profile?: string;

//   /**
//    * @description AWS Region
//    * @type {string}
//    * @default us-east-1
//    * @memberof AtlasPrivateEndpointProps
//    */
//   readonly region?: string;
//   /**
//    * @description
//    * @type {AtlasBasicProps}
//    * @memberof AtlasPrivateEndpointProps
//    */
//   readonly atlasBasicProps: AtlasBasicProps;
//   /**
//    * @description
//    * @type {CfnPrivateEndpointProps}
//    * @memberof AtlasPrivateEndpointProps
//    */
//   readonly privateEndpointProps: PrivateEndpointProps;
// }

// /**
//  * @description
//  * @export
//  * @interface PrivateEndpointProps
//  */
// export interface PrivateEndpointProps {
//   /**
//    * @description Name of the AWS PrivateLink endpoint service. Atlas returns null while it is creating the endpoint service.
//    * @type {string}
//    * @memberof PrivateEndpointProps
//    */
//   readonly endpointServiceName?: string;
//   /**
//    * @description Error message pertaining to the AWS PrivateLink connection. Returns null if there are no errors.
//    * @type {string}
//    * @memberof PrivateEndpointProps
//    */
//   readonly errorMessage?: string;
//   /**
//    * @description Status of the Atlas PrivateEndpoint service connection
//    * @type {string}
//    * @memberof PrivateEndpointProps
//    */
//   readonly status?: string;
//   /**
//    * @description Unique 24-hexadecimal digit string that identifies your project.
//    * @type {string}
//    * @memberof PrivateEndpointProps
//    */
//   readonly groupId?: string;
//   /**
//    * @description
//    * @type {string}
//    * @memberof PrivateEndpointProps
//    */
//   readonly region?: string;
//   /**
//    * @description
//    * @type {PrivateEndpoint[]}
//    * @memberof PrivateEndpointProps
//    */
//   readonly privateEndpoints?: PrivateEndpoint[];
// }
