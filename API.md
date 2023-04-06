# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AtlasBasic <a name="AtlasBasic" id="awscdk-resources-mongodbatlas.AtlasBasic"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.AtlasBasic.Initializer"></a>

```typescript
import { AtlasBasic } from 'awscdk-resources-mongodbatlas'

new AtlasBasic(scope: Construct, id: string, props: AtlasBasicProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicProps">AtlasBasicProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.AtlasBasic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.AtlasBasic.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.AtlasBasic.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.AtlasBasicProps">AtlasBasicProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.AtlasBasic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.AtlasBasic.isConstruct"></a>

```typescript
import { AtlasBasic } from 'awscdk-resources-mongodbatlas'

AtlasBasic.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.AtlasBasic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic.property.ipAccessList">ipAccessList</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList">CfnProjectIpAccessList</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic.property.mCluster">mCluster</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnCluster">CfnCluster</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic.property.mDBUser">mDBUser</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser">CfnDatabaseUser</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic.property.mProject">mProject</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnProject">CfnProject</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.AtlasBasic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ipAccessList`<sup>Required</sup> <a name="ipAccessList" id="awscdk-resources-mongodbatlas.AtlasBasic.property.ipAccessList"></a>

```typescript
public readonly ipAccessList: CfnProjectIpAccessList;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList">CfnProjectIpAccessList</a>

---

##### `mCluster`<sup>Required</sup> <a name="mCluster" id="awscdk-resources-mongodbatlas.AtlasBasic.property.mCluster"></a>

```typescript
public readonly mCluster: CfnCluster;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnCluster">CfnCluster</a>

---

##### `mDBUser`<sup>Required</sup> <a name="mDBUser" id="awscdk-resources-mongodbatlas.AtlasBasic.property.mDBUser"></a>

```typescript
public readonly mDBUser: CfnDatabaseUser;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser">CfnDatabaseUser</a>

---

##### `mProject`<sup>Required</sup> <a name="mProject" id="awscdk-resources-mongodbatlas.AtlasBasic.property.mProject"></a>

```typescript
public readonly mProject: CfnProject;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnProject">CfnProject</a>

---


### AtlasBasicPrivateEndpoint <a name="AtlasBasicPrivateEndpoint" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.Initializer"></a>

```typescript
import { AtlasBasicPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

new AtlasBasicPrivateEndpoint(scope: Construct, id: string, props: AtlasBasicPrivateEndpointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps">AtlasBasicPrivateEndpointProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps">AtlasBasicPrivateEndpointProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.isConstruct"></a>

```typescript
import { AtlasBasicPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

AtlasBasicPrivateEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.property.atlasBasic">atlasBasic</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AtlasBasic">AtlasBasic</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint">CfnPrivateEndpoint</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `atlasBasic`<sup>Required</sup> <a name="atlasBasic" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.property.atlasBasic"></a>

```typescript
public readonly atlasBasic: AtlasBasic;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.AtlasBasic">AtlasBasic</a>

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpoint.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: CfnPrivateEndpoint;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint">CfnPrivateEndpoint</a>

---


### AtlasEncryptionAtRest <a name="AtlasEncryptionAtRest" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRest"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.Initializer"></a>

```typescript
import { AtlasEncryptionAtRest } from 'awscdk-resources-mongodbatlas'

new AtlasEncryptionAtRest(scope: Construct, id: string, props: AtlasEncryptionAtRestProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps">AtlasEncryptionAtRestProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps">AtlasEncryptionAtRestProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.isConstruct"></a>

```typescript
import { AtlasEncryptionAtRest } from 'awscdk-resources-mongodbatlas'

AtlasEncryptionAtRest.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.property.cfnEncryptionAtRest">cfnEncryptionAtRest</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest">CfnEncryptionAtRest</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnEncryptionAtRest`<sup>Required</sup> <a name="cfnEncryptionAtRest" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRest.property.cfnEncryptionAtRest"></a>

```typescript
public readonly cfnEncryptionAtRest: CfnEncryptionAtRest;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest">CfnEncryptionAtRest</a>

---


### AtlasEncryptionAtRestExpress <a name="AtlasEncryptionAtRestExpress" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.Initializer"></a>

```typescript
import { AtlasEncryptionAtRestExpress } from 'awscdk-resources-mongodbatlas'

new AtlasEncryptionAtRestExpress(scope: Construct, id: string, props: AtlasEncryptionAtRestExpressProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps">AtlasEncryptionAtRestExpressProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps">AtlasEncryptionAtRestExpressProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.isConstruct"></a>

```typescript
import { AtlasEncryptionAtRestExpress } from 'awscdk-resources-mongodbatlas'

AtlasEncryptionAtRestExpress.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.property.encryptionAtRest">encryptionAtRest</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest">CfnEncryptionAtRest</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.property.accessList">accessList</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList">CfnProjectIpAccessList</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.property.cluster">cluster</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnCluster">CfnCluster</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.property.databaseUser">databaseUser</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser">CfnDatabaseUser</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `encryptionAtRest`<sup>Required</sup> <a name="encryptionAtRest" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.property.encryptionAtRest"></a>

```typescript
public readonly encryptionAtRest: CfnEncryptionAtRest;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest">CfnEncryptionAtRest</a>

---

##### `accessList`<sup>Optional</sup> <a name="accessList" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.property.accessList"></a>

```typescript
public readonly accessList: CfnProjectIpAccessList;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList">CfnProjectIpAccessList</a>

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.property.cluster"></a>

```typescript
public readonly cluster: CfnCluster;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnCluster">CfnCluster</a>

---

##### `databaseUser`<sup>Optional</sup> <a name="databaseUser" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpress.property.databaseUser"></a>

```typescript
public readonly databaseUser: CfnDatabaseUser;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser">CfnDatabaseUser</a>

---


### CfnCluster <a name="CfnCluster" id="awscdk-resources-mongodbatlas.CfnCluster"></a>

A CloudFormation `MongoDB::Atlas::Cluster`.

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.CfnCluster.Initializer"></a>

```typescript
import { CfnCluster } from 'awscdk-resources-mongodbatlas'

new CfnCluster(scope: Construct, id: string, props: CfnClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - scope in which this resource is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | - scoped id of the resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps">CfnClusterProps</a></code> | - resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.CfnCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.CfnCluster.Initializer.parameter.id"></a>

- *Type:* string

scoped id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnCluster.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnClusterProps">CfnClusterProps</a>

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.CfnCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="awscdk-resources-mongodbatlas.CfnCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="awscdk-resources-mongodbatlas.CfnCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="awscdk-resources-mongodbatlas.CfnCluster.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnCluster.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="awscdk-resources-mongodbatlas.CfnCluster.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnCluster.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="awscdk-resources-mongodbatlas.CfnCluster.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnCluster.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="awscdk-resources-mongodbatlas.CfnCluster.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnCluster.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnCluster.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="awscdk-resources-mongodbatlas.CfnCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnCluster.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnCluster.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="awscdk-resources-mongodbatlas.CfnCluster.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnCluster.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="awscdk-resources-mongodbatlas.CfnCluster.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnCluster.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnCluster.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="awscdk-resources-mongodbatlas.CfnCluster.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="awscdk-resources-mongodbatlas.CfnCluster.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-resources-mongodbatlas.CfnCluster.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="awscdk-resources-mongodbatlas.CfnCluster.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="awscdk-resources-mongodbatlas.CfnCluster.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="awscdk-resources-mongodbatlas.CfnCluster.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="awscdk-resources-mongodbatlas.CfnCluster.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnCluster.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="awscdk-resources-mongodbatlas.CfnCluster.obtainDependencies"></a>

```typescript
public obtainDependencies(): CfnResource | Stack[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="awscdk-resources-mongodbatlas.CfnCluster.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="awscdk-resources-mongodbatlas.CfnCluster.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnCluster.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="awscdk-resources-mongodbatlas.CfnCluster.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnCluster.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="awscdk-resources-mongodbatlas.CfnCluster.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.CfnCluster.isConstruct"></a>

```typescript
import { CfnCluster } from 'awscdk-resources-mongodbatlas'

CfnCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="awscdk-resources-mongodbatlas.CfnCluster.isCfnElement"></a>

```typescript
import { CfnCluster } from 'awscdk-resources-mongodbatlas'

CfnCluster.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnCluster.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="awscdk-resources-mongodbatlas.CfnCluster.isCfnResource"></a>

```typescript
import { CfnCluster } from 'awscdk-resources-mongodbatlas'

CfnCluster.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="awscdk-resources-mongodbatlas.CfnCluster.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.attrCreatedDate">attrCreatedDate</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Cluster.CreatedDate`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.attrId">attrId</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Cluster.Id`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.attrMongoDBVersion">attrMongoDBVersion</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Cluster.MongoDBVersion`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.attrStateName">attrStateName</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Cluster.StateName`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps">CfnClusterProps</a></code> | Resource props. |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.CfnCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="awscdk-resources-mongodbatlas.CfnCluster.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="awscdk-resources-mongodbatlas.CfnCluster.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="awscdk-resources-mongodbatlas.CfnCluster.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="awscdk-resources-mongodbatlas.CfnCluster.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="awscdk-resources-mongodbatlas.CfnCluster.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="awscdk-resources-mongodbatlas.CfnCluster.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrCreatedDate`<sup>Required</sup> <a name="attrCreatedDate" id="awscdk-resources-mongodbatlas.CfnCluster.property.attrCreatedDate"></a>

```typescript
public readonly attrCreatedDate: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Cluster.CreatedDate`.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="awscdk-resources-mongodbatlas.CfnCluster.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Cluster.Id`.

---

##### `attrMongoDBVersion`<sup>Required</sup> <a name="attrMongoDBVersion" id="awscdk-resources-mongodbatlas.CfnCluster.property.attrMongoDBVersion"></a>

```typescript
public readonly attrMongoDBVersion: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Cluster.MongoDBVersion`.

---

##### `attrStateName`<sup>Required</sup> <a name="attrStateName" id="awscdk-resources-mongodbatlas.CfnCluster.property.attrStateName"></a>

```typescript
public readonly attrStateName: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Cluster.StateName`.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnCluster.property.props"></a>

```typescript
public readonly props: CfnClusterProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnClusterProps">CfnClusterProps</a>

Resource props.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnCluster.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="awscdk-resources-mongodbatlas.CfnCluster.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### CfnDatabaseUser <a name="CfnDatabaseUser" id="awscdk-resources-mongodbatlas.CfnDatabaseUser"></a>

A CloudFormation `MongoDB::Atlas::DatabaseUser`.

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.Initializer"></a>

```typescript
import { CfnDatabaseUser } from 'awscdk-resources-mongodbatlas'

new CfnDatabaseUser(scope: Construct, id: string, props: CfnDatabaseUserProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - scope in which this resource is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.Initializer.parameter.id">id</a></code> | <code>string</code> | - scoped id of the resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps">CfnDatabaseUserProps</a></code> | - resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.Initializer.parameter.id"></a>

- *Type:* string

scoped id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps">CfnDatabaseUserProps</a>

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.obtainDependencies"></a>

```typescript
public obtainDependencies(): CfnResource | Stack[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.isConstruct"></a>

```typescript
import { CfnDatabaseUser } from 'awscdk-resources-mongodbatlas'

CfnDatabaseUser.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.isCfnElement"></a>

```typescript
import { CfnDatabaseUser } from 'awscdk-resources-mongodbatlas'

CfnDatabaseUser.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.isCfnResource"></a>

```typescript
import { CfnDatabaseUser } from 'awscdk-resources-mongodbatlas'

CfnDatabaseUser.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.property.attrUserCFNIdentifier">attrUserCFNIdentifier</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::DatabaseUser.UserCFNIdentifier`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.property.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps">CfnDatabaseUserProps</a></code> | Resource props. |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrUserCFNIdentifier`<sup>Required</sup> <a name="attrUserCFNIdentifier" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.property.attrUserCFNIdentifier"></a>

```typescript
public readonly attrUserCFNIdentifier: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::DatabaseUser.UserCFNIdentifier`.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.property.props"></a>

```typescript
public readonly props: CfnDatabaseUserProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps">CfnDatabaseUserProps</a>

Resource props.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUser.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="awscdk-resources-mongodbatlas.CfnDatabaseUser.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### CfnEncryptionAtRest <a name="CfnEncryptionAtRest" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest"></a>

A CloudFormation `MongoDB::Atlas::EncryptionAtRest`.

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.Initializer"></a>

```typescript
import { CfnEncryptionAtRest } from 'awscdk-resources-mongodbatlas'

new CfnEncryptionAtRest(scope: Construct, id: string, props: CfnEncryptionAtRestProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - scope in which this resource is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.Initializer.parameter.id">id</a></code> | <code>string</code> | - scoped id of the resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps">CfnEncryptionAtRestProps</a></code> | - resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.Initializer.parameter.id"></a>

- *Type:* string

scoped id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps">CfnEncryptionAtRestProps</a>

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.obtainDependencies"></a>

```typescript
public obtainDependencies(): CfnResource | Stack[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.isConstruct"></a>

```typescript
import { CfnEncryptionAtRest } from 'awscdk-resources-mongodbatlas'

CfnEncryptionAtRest.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.isCfnElement"></a>

```typescript
import { CfnEncryptionAtRest } from 'awscdk-resources-mongodbatlas'

CfnEncryptionAtRest.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.isCfnResource"></a>

```typescript
import { CfnEncryptionAtRest } from 'awscdk-resources-mongodbatlas'

CfnEncryptionAtRest.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.attrId">attrId</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::EncryptionAtRest.Id`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps">CfnEncryptionAtRestProps</a></code> | Resource props. |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::EncryptionAtRest.Id`.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.props"></a>

```typescript
public readonly props: CfnEncryptionAtRestProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps">CfnEncryptionAtRestProps</a>

Resource props.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRest.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### CfnPrivateEndpoint <a name="CfnPrivateEndpoint" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint"></a>

A CloudFormation `MongoDB::Atlas::PrivateEndpoint`.

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.Initializer"></a>

```typescript
import { CfnPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

new CfnPrivateEndpoint(scope: Construct, id: string, props: CfnPrivateEndpointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - scope in which this resource is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | - scoped id of the resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps">CfnPrivateEndpointProps</a></code> | - resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

scoped id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps">CfnPrivateEndpointProps</a>

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.obtainDependencies"></a>

```typescript
public obtainDependencies(): CfnResource | Stack[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.isConstruct"></a>

```typescript
import { CfnPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

CfnPrivateEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.isCfnElement"></a>

```typescript
import { CfnPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

CfnPrivateEndpoint.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.isCfnResource"></a>

```typescript
import { CfnPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

CfnPrivateEndpoint.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.attrId">attrId</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::PrivateEndpoint.Id`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.attrInterfaceEndpoints">attrInterfaceEndpoints</a></code> | <code>string[]</code> | Attribute `MongoDB::Atlas::PrivateEndpoint.InterfaceEndpoints`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps">CfnPrivateEndpointProps</a></code> | Resource props. |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::PrivateEndpoint.Id`.

---

##### `attrInterfaceEndpoints`<sup>Required</sup> <a name="attrInterfaceEndpoints" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.attrInterfaceEndpoints"></a>

```typescript
public readonly attrInterfaceEndpoints: string[];
```

- *Type:* string[]

Attribute `MongoDB::Atlas::PrivateEndpoint.InterfaceEndpoints`.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.props"></a>

```typescript
public readonly props: CfnPrivateEndpointProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps">CfnPrivateEndpointProps</a>

Resource props.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="awscdk-resources-mongodbatlas.CfnPrivateEndpoint.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### CfnProject <a name="CfnProject" id="awscdk-resources-mongodbatlas.CfnProject"></a>

A CloudFormation `MongoDB::Atlas::Project`.

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.CfnProject.Initializer"></a>

```typescript
import { CfnProject } from 'awscdk-resources-mongodbatlas'

new CfnProject(scope: Construct, id: string, props: CfnProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - scope in which this resource is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.Initializer.parameter.id">id</a></code> | <code>string</code> | - scoped id of the resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnProjectProps">CfnProjectProps</a></code> | - resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.CfnProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.CfnProject.Initializer.parameter.id"></a>

- *Type:* string

scoped id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnProject.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnProjectProps">CfnProjectProps</a>

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.CfnProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="awscdk-resources-mongodbatlas.CfnProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="awscdk-resources-mongodbatlas.CfnProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="awscdk-resources-mongodbatlas.CfnProject.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnProject.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="awscdk-resources-mongodbatlas.CfnProject.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnProject.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="awscdk-resources-mongodbatlas.CfnProject.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnProject.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="awscdk-resources-mongodbatlas.CfnProject.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnProject.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnProject.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="awscdk-resources-mongodbatlas.CfnProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnProject.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnProject.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="awscdk-resources-mongodbatlas.CfnProject.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnProject.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="awscdk-resources-mongodbatlas.CfnProject.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnProject.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnProject.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="awscdk-resources-mongodbatlas.CfnProject.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="awscdk-resources-mongodbatlas.CfnProject.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-resources-mongodbatlas.CfnProject.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="awscdk-resources-mongodbatlas.CfnProject.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="awscdk-resources-mongodbatlas.CfnProject.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="awscdk-resources-mongodbatlas.CfnProject.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="awscdk-resources-mongodbatlas.CfnProject.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnProject.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="awscdk-resources-mongodbatlas.CfnProject.obtainDependencies"></a>

```typescript
public obtainDependencies(): CfnResource | Stack[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="awscdk-resources-mongodbatlas.CfnProject.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="awscdk-resources-mongodbatlas.CfnProject.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnProject.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="awscdk-resources-mongodbatlas.CfnProject.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnProject.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="awscdk-resources-mongodbatlas.CfnProject.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.CfnProject.isConstruct"></a>

```typescript
import { CfnProject } from 'awscdk-resources-mongodbatlas'

CfnProject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="awscdk-resources-mongodbatlas.CfnProject.isCfnElement"></a>

```typescript
import { CfnProject } from 'awscdk-resources-mongodbatlas'

CfnProject.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnProject.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="awscdk-resources-mongodbatlas.CfnProject.isCfnResource"></a>

```typescript
import { CfnProject } from 'awscdk-resources-mongodbatlas'

CfnProject.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="awscdk-resources-mongodbatlas.CfnProject.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.attrClusterCount">attrClusterCount</a></code> | <code>number</code> | Attribute `MongoDB::Atlas::Project.ClusterCount`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.attrCreated">attrCreated</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Project.Created`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.attrId">attrId</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Project.Id`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.attrProjectOwnerId">attrProjectOwnerId</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Project.ProjectOwnerId`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnProjectProps">CfnProjectProps</a></code> | Resource props. |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.CfnProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="awscdk-resources-mongodbatlas.CfnProject.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="awscdk-resources-mongodbatlas.CfnProject.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="awscdk-resources-mongodbatlas.CfnProject.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="awscdk-resources-mongodbatlas.CfnProject.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="awscdk-resources-mongodbatlas.CfnProject.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="awscdk-resources-mongodbatlas.CfnProject.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrClusterCount`<sup>Required</sup> <a name="attrClusterCount" id="awscdk-resources-mongodbatlas.CfnProject.property.attrClusterCount"></a>

```typescript
public readonly attrClusterCount: number;
```

- *Type:* number

Attribute `MongoDB::Atlas::Project.ClusterCount`.

---

##### `attrCreated`<sup>Required</sup> <a name="attrCreated" id="awscdk-resources-mongodbatlas.CfnProject.property.attrCreated"></a>

```typescript
public readonly attrCreated: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Project.Created`.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="awscdk-resources-mongodbatlas.CfnProject.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Project.Id`.

---

##### `attrProjectOwnerId`<sup>Required</sup> <a name="attrProjectOwnerId" id="awscdk-resources-mongodbatlas.CfnProject.property.attrProjectOwnerId"></a>

```typescript
public readonly attrProjectOwnerId: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Project.ProjectOwnerId`.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnProject.property.props"></a>

```typescript
public readonly props: CfnProjectProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnProjectProps">CfnProjectProps</a>

Resource props.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProject.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="awscdk-resources-mongodbatlas.CfnProject.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### CfnProjectIpAccessList <a name="CfnProjectIpAccessList" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList"></a>

A CloudFormation `MongoDB::Atlas::ProjectIpAccessList`.

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.Initializer"></a>

```typescript
import { CfnProjectIpAccessList } from 'awscdk-resources-mongodbatlas'

new CfnProjectIpAccessList(scope: Construct, id: string, props: CfnProjectIpAccessListProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - scope in which this resource is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.Initializer.parameter.id">id</a></code> | <code>string</code> | - scoped id of the resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps">CfnProjectIpAccessListProps</a></code> | - resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.Initializer.parameter.id"></a>

- *Type:* string

scoped id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps">CfnProjectIpAccessListProps</a>

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.obtainDependencies"></a>

```typescript
public obtainDependencies(): CfnResource | Stack[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.isConstruct"></a>

```typescript
import { CfnProjectIpAccessList } from 'awscdk-resources-mongodbatlas'

CfnProjectIpAccessList.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.isCfnElement"></a>

```typescript
import { CfnProjectIpAccessList } from 'awscdk-resources-mongodbatlas'

CfnProjectIpAccessList.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.isCfnResource"></a>

```typescript
import { CfnProjectIpAccessList } from 'awscdk-resources-mongodbatlas'

CfnProjectIpAccessList.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps">CfnProjectIpAccessListProps</a></code> | Resource props. |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.props"></a>

```typescript
public readonly props: CfnProjectIpAccessListProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps">CfnProjectIpAccessListProps</a>

Resource props.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessList.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### CfnThirdPartyIntegration <a name="CfnThirdPartyIntegration" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration"></a>

A CloudFormation `MongoDB::Atlas::ThirdPartyIntegration`.

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.Initializer"></a>

```typescript
import { CfnThirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

new CfnThirdPartyIntegration(scope: Construct, id: string, props: CfnThirdPartyIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - scope in which this resource is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | - scoped id of the resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps">CfnThirdPartyIntegrationProps</a></code> | - resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.Initializer.parameter.id"></a>

- *Type:* string

scoped id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps">CfnThirdPartyIntegrationProps</a>

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.obtainDependencies"></a>

```typescript
public obtainDependencies(): CfnResource | Stack[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.isConstruct"></a>

```typescript
import { CfnThirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

CfnThirdPartyIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.isCfnElement"></a>

```typescript
import { CfnThirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

CfnThirdPartyIntegration.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.isCfnResource"></a>

```typescript
import { CfnThirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

CfnThirdPartyIntegration.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps">CfnThirdPartyIntegrationProps</a></code> | Resource props. |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.props"></a>

```typescript
public readonly props: CfnThirdPartyIntegrationProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps">CfnThirdPartyIntegrationProps</a>

Resource props.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegration.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### DatadogIntegration <a name="DatadogIntegration" id="awscdk-resources-mongodbatlas.DatadogIntegration"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.DatadogIntegration.Initializer"></a>

```typescript
import { DatadogIntegration } from 'awscdk-resources-mongodbatlas'

new DatadogIntegration(scope: Construct, id: string, props: DatadogIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegration.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegrationProps">DatadogIntegrationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.DatadogIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.DatadogIntegration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.DatadogIntegration.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.DatadogIntegrationProps">DatadogIntegrationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.DatadogIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.DatadogIntegration.isConstruct"></a>

```typescript
import { DatadogIntegration } from 'awscdk-resources-mongodbatlas'

DatadogIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.DatadogIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegration.property.cfnThirdPartyIntegration">cfnThirdPartyIntegration</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration">CfnThirdPartyIntegration</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.DatadogIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnThirdPartyIntegration`<sup>Required</sup> <a name="cfnThirdPartyIntegration" id="awscdk-resources-mongodbatlas.DatadogIntegration.property.cfnThirdPartyIntegration"></a>

```typescript
public readonly cfnThirdPartyIntegration: CfnThirdPartyIntegration;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration">CfnThirdPartyIntegration</a>

---


### MicrosoftTeamsIntegration <a name="MicrosoftTeamsIntegration" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.Initializer"></a>

```typescript
import { MicrosoftTeamsIntegration } from 'awscdk-resources-mongodbatlas'

new MicrosoftTeamsIntegration(scope: Construct, id: string, props: MicrosoftTeamsIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegrationProps">MicrosoftTeamsIntegrationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegrationProps">MicrosoftTeamsIntegrationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.isConstruct"></a>

```typescript
import { MicrosoftTeamsIntegration } from 'awscdk-resources-mongodbatlas'

MicrosoftTeamsIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.property.cfnThirdPartyIntegration">cfnThirdPartyIntegration</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration">CfnThirdPartyIntegration</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnThirdPartyIntegration`<sup>Required</sup> <a name="cfnThirdPartyIntegration" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegration.property.cfnThirdPartyIntegration"></a>

```typescript
public readonly cfnThirdPartyIntegration: CfnThirdPartyIntegration;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration">CfnThirdPartyIntegration</a>

---


### PagerDutyIntegration <a name="PagerDutyIntegration" id="awscdk-resources-mongodbatlas.PagerDutyIntegration"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.PagerDutyIntegration.Initializer"></a>

```typescript
import { PagerDutyIntegration } from 'awscdk-resources-mongodbatlas'

new PagerDutyIntegration(scope: Construct, id: string, props: PagerDutyIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegration.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegrationProps">PagerDutyIntegrationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.PagerDutyIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.PagerDutyIntegration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.PagerDutyIntegration.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-resources-mongodbatlas.PagerDutyIntegrationProps">PagerDutyIntegrationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.PagerDutyIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.PagerDutyIntegration.isConstruct"></a>

```typescript
import { PagerDutyIntegration } from 'awscdk-resources-mongodbatlas'

PagerDutyIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.PagerDutyIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegration.property.cfnThirdPartyIntegration">cfnThirdPartyIntegration</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration">CfnThirdPartyIntegration</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.PagerDutyIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnThirdPartyIntegration`<sup>Required</sup> <a name="cfnThirdPartyIntegration" id="awscdk-resources-mongodbatlas.PagerDutyIntegration.property.cfnThirdPartyIntegration"></a>

```typescript
public readonly cfnThirdPartyIntegration: CfnThirdPartyIntegration;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegration">CfnThirdPartyIntegration</a>

---


## Structs <a name="Structs" id="Structs"></a>

### AccessListDefinition <a name="AccessListDefinition" id="awscdk-resources-mongodbatlas.AccessListDefinition"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.AccessListDefinition.Initializer"></a>

```typescript
import { AccessListDefinition } from 'awscdk-resources-mongodbatlas'

const accessListDefinition: AccessListDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AccessListDefinition.property.awsSecurityGroup">awsSecurityGroup</a></code> | <code>string</code> | Unique string of the Amazon Web Services (AWS) security group that you want to add to the project's IP access list. |
| <code><a href="#awscdk-resources-mongodbatlas.AccessListDefinition.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Range of IP addresses in Classless Inter-Domain Routing (CIDR) notation that you want to add to the project's IP access list. |
| <code><a href="#awscdk-resources-mongodbatlas.AccessListDefinition.property.comment">comment</a></code> | <code>string</code> | Remark that explains the purpose or scope of this IP access list entry. |
| <code><a href="#awscdk-resources-mongodbatlas.AccessListDefinition.property.deleteAfterDate">deleteAfterDate</a></code> | <code>string</code> | Date and time after which MongoDB Cloud deletes the temporary access list entry. |
| <code><a href="#awscdk-resources-mongodbatlas.AccessListDefinition.property.ipAddress">ipAddress</a></code> | <code>string</code> | IP address that you want to add to the project's IP access list. |
| <code><a href="#awscdk-resources-mongodbatlas.AccessListDefinition.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `awsSecurityGroup`<sup>Optional</sup> <a name="awsSecurityGroup" id="awscdk-resources-mongodbatlas.AccessListDefinition.property.awsSecurityGroup"></a>

```typescript
public readonly awsSecurityGroup: string;
```

- *Type:* string

Unique string of the Amazon Web Services (AWS) security group that you want to add to the project's IP access list.

Your IP access list entry can be one awsSecurityGroup, one cidrBlock, or one ipAddress. You must configure Virtual Private Connection (VPC) peering for your project before you can add an AWS security group to an IP access list. You cannot set AWS security groups as temporary access list entries. Don't set this parameter if you set cidrBlock or ipAddress.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="awscdk-resources-mongodbatlas.AccessListDefinition.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Range of IP addresses in Classless Inter-Domain Routing (CIDR) notation that you want to add to the project's IP access list.

Your IP access list entry can be one awsSecurityGroup, one cidrBlock, or one ipAddress. Don't set this parameter if you set awsSecurityGroup or ipAddress

---

##### `comment`<sup>Optional</sup> <a name="comment" id="awscdk-resources-mongodbatlas.AccessListDefinition.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Remark that explains the purpose or scope of this IP access list entry.

---

##### `deleteAfterDate`<sup>Optional</sup> <a name="deleteAfterDate" id="awscdk-resources-mongodbatlas.AccessListDefinition.property.deleteAfterDate"></a>

```typescript
public readonly deleteAfterDate: string;
```

- *Type:* string

Date and time after which MongoDB Cloud deletes the temporary access list entry.

This parameter expresses its value in the ISO 8601 timestamp format in UTC and can include the time zone designation. The date must be later than the current date but no later than one week after you submit this request. The resource returns this parameter if you specified an expiration date when creating this IP access list entry.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="awscdk-resources-mongodbatlas.AccessListDefinition.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

IP address that you want to add to the project's IP access list.

Your IP access list entry can be one awsSecurityGroup, one cidrBlock, or one ipAddress. Don't set this parameter if you set awsSecurityGroup or cidrBlock.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.AccessListDefinition.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

### AdvancedAutoScaling <a name="AdvancedAutoScaling" id="awscdk-resources-mongodbatlas.AdvancedAutoScaling"></a>

AWS Automatic Cluster Scaling.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.AdvancedAutoScaling.Initializer"></a>

```typescript
import { AdvancedAutoScaling } from 'awscdk-resources-mongodbatlas'

const advancedAutoScaling: AdvancedAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedAutoScaling.property.compute">compute</a></code> | <code><a href="#awscdk-resources-mongodbatlas.Compute">Compute</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedAutoScaling.property.diskGb">diskGb</a></code> | <code><a href="#awscdk-resources-mongodbatlas.DiskGb">DiskGb</a></code> | *No description.* |

---

##### `compute`<sup>Optional</sup> <a name="compute" id="awscdk-resources-mongodbatlas.AdvancedAutoScaling.property.compute"></a>

```typescript
public readonly compute: Compute;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.Compute">Compute</a>

---

##### `diskGb`<sup>Optional</sup> <a name="diskGb" id="awscdk-resources-mongodbatlas.AdvancedAutoScaling.property.diskGb"></a>

```typescript
public readonly diskGb: DiskGb;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.DiskGb">DiskGb</a>

---

### AdvancedRegionConfig <a name="AdvancedRegionConfig" id="awscdk-resources-mongodbatlas.AdvancedRegionConfig"></a>

Hardware specifications for nodes set for a given region.

Each regionConfigs object describes the region's priority in elections and the number and type of MongoDB nodes that MongoDB Cloud deploys to the region. Each regionConfigs object must have either an analyticsSpecs object, electableSpecs object, or readOnlySpecs object. Tenant clusters only require electableSpecs. Dedicated clusters can specify any of these specifications, but must have at least one electableSpecs object within a replicationSpec. Every hardware specification must use the same instanceSize.

Example:

If you set "replicationSpecs[n].regionConfigs[m].analyticsSpecs.instanceSize" : "M30", set "replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M30"if you have electable nodes and"replicationSpecs[n].regionConfigs[m].readOnlySpecs.instanceSize" : "M30" if you have read-only nodes.",

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.AdvancedRegionConfig.Initializer"></a>

```typescript
import { AdvancedRegionConfig } from 'awscdk-resources-mongodbatlas'

const advancedRegionConfig: AdvancedRegionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.analyticsAutoScaling">analyticsAutoScaling</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AdvancedAutoScaling">AdvancedAutoScaling</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.analyticsSpecs">analyticsSpecs</a></code> | <code><a href="#awscdk-resources-mongodbatlas.Specs">Specs</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.autoScaling">autoScaling</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AdvancedAutoScaling">AdvancedAutoScaling</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.electableSpecs">electableSpecs</a></code> | <code><a href="#awscdk-resources-mongodbatlas.Specs">Specs</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.readOnlySpecs">readOnlySpecs</a></code> | <code><a href="#awscdk-resources-mongodbatlas.Specs">Specs</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |

---

##### `analyticsAutoScaling`<sup>Optional</sup> <a name="analyticsAutoScaling" id="awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.analyticsAutoScaling"></a>

```typescript
public readonly analyticsAutoScaling: AdvancedAutoScaling;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.AdvancedAutoScaling">AdvancedAutoScaling</a>

---

##### `analyticsSpecs`<sup>Optional</sup> <a name="analyticsSpecs" id="awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.analyticsSpecs"></a>

```typescript
public readonly analyticsSpecs: Specs;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.Specs">Specs</a>

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.autoScaling"></a>

```typescript
public readonly autoScaling: AdvancedAutoScaling;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.AdvancedAutoScaling">AdvancedAutoScaling</a>

---

##### `electableSpecs`<sup>Optional</sup> <a name="electableSpecs" id="awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.electableSpecs"></a>

```typescript
public readonly electableSpecs: Specs;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.Specs">Specs</a>

---

##### `priority`<sup>Optional</sup> <a name="priority" id="awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `readOnlySpecs`<sup>Optional</sup> <a name="readOnlySpecs" id="awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.readOnlySpecs"></a>

```typescript
public readonly readOnlySpecs: Specs;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.Specs">Specs</a>

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="awscdk-resources-mongodbatlas.AdvancedRegionConfig.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

### AdvancedReplicationSpec <a name="AdvancedReplicationSpec" id="awscdk-resources-mongodbatlas.AdvancedReplicationSpec"></a>

List of settings that configure your cluster regions.

For Global Clusters, each object in the array represents a zone where your clusters nodes deploy. For non-Global replica sets and sharded clusters, this array has one object representing where your clusters nodes deploy.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.AdvancedReplicationSpec.Initializer"></a>

```typescript
import { AdvancedReplicationSpec } from 'awscdk-resources-mongodbatlas'

const advancedReplicationSpec: AdvancedReplicationSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedReplicationSpec.property.advancedRegionConfigs">advancedRegionConfigs</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AdvancedRegionConfig">AdvancedRegionConfig</a>[]</code> | Hardware specifications for nodes set for a given region. |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedReplicationSpec.property.id">id</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies the replication object for a zone in a Multi-Cloud Cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedReplicationSpec.property.numShards">numShards</a></code> | <code>number</code> | Positive integer that specifies the number of shards to deploy in each specified zone. |
| <code><a href="#awscdk-resources-mongodbatlas.AdvancedReplicationSpec.property.zoneName">zoneName</a></code> | <code>string</code> | Human-readable label that identifies the zone in a Global Cluster. |

---

##### `advancedRegionConfigs`<sup>Optional</sup> <a name="advancedRegionConfigs" id="awscdk-resources-mongodbatlas.AdvancedReplicationSpec.property.advancedRegionConfigs"></a>

```typescript
public readonly advancedRegionConfigs: AdvancedRegionConfig[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.AdvancedRegionConfig">AdvancedRegionConfig</a>[]

Hardware specifications for nodes set for a given region.

Each regionConfigs object describes the region's priority in elections and the number and type of MongoDB nodes that MongoDB Cloud deploys to the region. Each regionConfigs object must have either an analyticsSpecs object, electableSpecs object, or readOnlySpecs object. Tenant clusters only require electableSpecs. Dedicated clusters can specify any of these specifications, but must have at least one electableSpecs object within a replicationSpec. Every hardware specification must use the same instanceSize.

Example:

If you set "replicationSpecs[n].regionConfigs[m].analyticsSpecs.instanceSize" : "M30", set "replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M30"if you have electable nodes and"replicationSpecs[n].regionConfigs[m].readOnlySpecs.instanceSize" : "M30" if you have read-only nodes.",

---

##### `id`<sup>Optional</sup> <a name="id" id="awscdk-resources-mongodbatlas.AdvancedReplicationSpec.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies the replication object for a zone in a Multi-Cloud Cluster.

If you include existing zones in the request, you must specify this parameter. If you add a new zone to an existing Multi-Cloud Cluster, you may specify this parameter. The request deletes any existing zones in the Multi-Cloud Cluster that you exclude from the request.

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="awscdk-resources-mongodbatlas.AdvancedReplicationSpec.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

Positive integer that specifies the number of shards to deploy in each specified zone.

If you set this value to 1 and "clusterType" : "SHARDED", MongoDB Cloud deploys a single-shard sharded cluster. Don't create a sharded cluster with a single shard for production environments. Single-shard sharded clusters don't provide the same benefits as multi-shard configurations.

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="awscdk-resources-mongodbatlas.AdvancedReplicationSpec.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Human-readable label that identifies the zone in a Global Cluster.

Provide this value only if "clusterType" : "GEOSHARDED".

---

### AtlasBasicPrivateEndpointProps <a name="AtlasBasicPrivateEndpointProps" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps.Initializer"></a>

```typescript
import { AtlasBasicPrivateEndpointProps } from 'awscdk-resources-mongodbatlas'

const atlasBasicPrivateEndpointProps: AtlasBasicPrivateEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps.property.atlasBasicProps">atlasBasicProps</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicProps">AtlasBasicProps</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps.property.privateEndpointProps">privateEndpointProps</a></code> | <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpointProps">PrivateEndpointProps</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `atlasBasicProps`<sup>Required</sup> <a name="atlasBasicProps" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps.property.atlasBasicProps"></a>

```typescript
public readonly atlasBasicProps: AtlasBasicProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.AtlasBasicProps">AtlasBasicProps</a>

---

##### `privateEndpointProps`<sup>Required</sup> <a name="privateEndpointProps" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps.property.privateEndpointProps"></a>

```typescript
public readonly privateEndpointProps: PrivateEndpointProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.PrivateEndpointProps">PrivateEndpointProps</a>

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.AtlasBasicPrivateEndpointProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* us-east-1

---

### AtlasBasicProps <a name="AtlasBasicProps" id="awscdk-resources-mongodbatlas.AtlasBasicProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.AtlasBasicProps.Initializer"></a>

```typescript
import { AtlasBasicProps } from 'awscdk-resources-mongodbatlas'

const atlasBasicProps: AtlasBasicProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicProps.property.clusterProps">clusterProps</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ClusterProps">ClusterProps</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicProps.property.projectProps">projectProps</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ProjectProps">ProjectProps</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicProps.property.dbUserProps">dbUserProps</a></code> | <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps">DatabaseUserProps</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicProps.property.ipAccessListProps">ipAccessListProps</a></code> | <code><a href="#awscdk-resources-mongodbatlas.IpAccessListProps">IpAccessListProps</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasBasicProps.property.profile">profile</a></code> | <code>string</code> | *No description.* |

---

##### `clusterProps`<sup>Required</sup> <a name="clusterProps" id="awscdk-resources-mongodbatlas.AtlasBasicProps.property.clusterProps"></a>

```typescript
public readonly clusterProps: ClusterProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ClusterProps">ClusterProps</a>

---

##### `projectProps`<sup>Required</sup> <a name="projectProps" id="awscdk-resources-mongodbatlas.AtlasBasicProps.property.projectProps"></a>

```typescript
public readonly projectProps: ProjectProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ProjectProps">ProjectProps</a>

---

##### `dbUserProps`<sup>Optional</sup> <a name="dbUserProps" id="awscdk-resources-mongodbatlas.AtlasBasicProps.property.dbUserProps"></a>

```typescript
public readonly dbUserProps: DatabaseUserProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.DatabaseUserProps">DatabaseUserProps</a>

---

##### `ipAccessListProps`<sup>Optional</sup> <a name="ipAccessListProps" id="awscdk-resources-mongodbatlas.AtlasBasicProps.property.ipAccessListProps"></a>

```typescript
public readonly ipAccessListProps: IpAccessListProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.IpAccessListProps">IpAccessListProps</a>

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.AtlasBasicProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

### AtlasEncryptionAtRestExpressProps <a name="AtlasEncryptionAtRestExpressProps" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.Initializer"></a>

```typescript
import { AtlasEncryptionAtRestExpressProps } from 'awscdk-resources-mongodbatlas'

const atlasEncryptionAtRestExpressProps: AtlasEncryptionAtRestExpressProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.encryptionAtRest">encryptionAtRest</a></code> | <code><a href="#awscdk-resources-mongodbatlas.EncryptionAtRestProps">EncryptionAtRestProps</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.accessList">accessList</a></code> | <code><a href="#awscdk-resources-mongodbatlas.IpAccessListProps">IpAccessListProps</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.cluster">cluster</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ClusterProps">ClusterProps</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.databaseUser">databaseUser</a></code> | <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps">DatabaseUserProps</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.profile">profile</a></code> | <code>string</code> | *No description.* |

---

##### `encryptionAtRest`<sup>Required</sup> <a name="encryptionAtRest" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.encryptionAtRest"></a>

```typescript
public readonly encryptionAtRest: EncryptionAtRestProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.EncryptionAtRestProps">EncryptionAtRestProps</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `accessList`<sup>Optional</sup> <a name="accessList" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.accessList"></a>

```typescript
public readonly accessList: IpAccessListProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.IpAccessListProps">IpAccessListProps</a>

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.cluster"></a>

```typescript
public readonly cluster: ClusterProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ClusterProps">ClusterProps</a>

---

##### `databaseUser`<sup>Optional</sup> <a name="databaseUser" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.databaseUser"></a>

```typescript
public readonly databaseUser: DatabaseUserProps;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.DatabaseUserProps">DatabaseUserProps</a>

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestExpressProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

### AtlasEncryptionAtRestProps <a name="AtlasEncryptionAtRestProps" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.Initializer"></a>

```typescript
import { AtlasEncryptionAtRestProps } from 'awscdk-resources-mongodbatlas'

const atlasEncryptionAtRestProps: AtlasEncryptionAtRestProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.customerMasterKeyId">customerMasterKeyId</a></code> | <code>string</code> | The AWS customer master key used to encrypt and decrypt the MongoDB master keys. |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier of the Atlas project to which the user belongs. |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.roleId">roleId</a></code> | <code>string</code> | ID of an AWS IAM role authorized to manage an AWS customer master key. |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.enabled">enabled</a></code> | <code>boolean</code> | Specifies whether Encryption at Rest is enabled for an Atlas project. |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.profile">profile</a></code> | <code>string</code> | The profile is defined in AWS Secret manager. |
| <code><a href="#awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.region">region</a></code> | <code>string</code> | The AWS region in which the AWS customer master key exists. |

---

##### `customerMasterKeyId`<sup>Required</sup> <a name="customerMasterKeyId" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.customerMasterKeyId"></a>

```typescript
public readonly customerMasterKeyId: string;
```

- *Type:* string

The AWS customer master key used to encrypt and decrypt the MongoDB master keys.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique identifier of the Atlas project to which the user belongs.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

ID of an AWS IAM role authorized to manage an AWS customer master key.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Specifies whether Encryption at Rest is enabled for an Atlas project.

To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
Default Value: true

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The profile is defined in AWS Secret manager.

See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.AtlasEncryptionAtRestProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region in which the AWS customer master key exists.

Default Value: US_EAST_1

---

### AwsKmsConfiguration <a name="AwsKmsConfiguration" id="awscdk-resources-mongodbatlas.AwsKmsConfiguration"></a>

Specifies AWS KMS configuration details and whether Encryption at Rest is enabled for an Atlas project.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.AwsKmsConfiguration.Initializer"></a>

```typescript
import { AwsKmsConfiguration } from 'awscdk-resources-mongodbatlas'

const awsKmsConfiguration: AwsKmsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.AwsKmsConfiguration.property.customerMasterKeyId">customerMasterKeyId</a></code> | <code>string</code> | The AWS customer master key used to encrypt and decrypt the MongoDB master keys. |
| <code><a href="#awscdk-resources-mongodbatlas.AwsKmsConfiguration.property.enabled">enabled</a></code> | <code>boolean</code> | Specifies whether Encryption at Rest is enabled for an Atlas project. |
| <code><a href="#awscdk-resources-mongodbatlas.AwsKmsConfiguration.property.region">region</a></code> | <code>string</code> | The AWS region in which the AWS customer master key exists. |
| <code><a href="#awscdk-resources-mongodbatlas.AwsKmsConfiguration.property.roleId">roleId</a></code> | <code>string</code> | ID of an AWS IAM role authorized to manage an AWS customer master key. |

---

##### `customerMasterKeyId`<sup>Optional</sup> <a name="customerMasterKeyId" id="awscdk-resources-mongodbatlas.AwsKmsConfiguration.property.customerMasterKeyId"></a>

```typescript
public readonly customerMasterKeyId: string;
```

- *Type:* string

The AWS customer master key used to encrypt and decrypt the MongoDB master keys.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="awscdk-resources-mongodbatlas.AwsKmsConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Specifies whether Encryption at Rest is enabled for an Atlas project.

To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.AwsKmsConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region in which the AWS customer master key exists.

---

##### `roleId`<sup>Optional</sup> <a name="roleId" id="awscdk-resources-mongodbatlas.AwsKmsConfiguration.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

ID of an AWS IAM role authorized to manage an AWS customer master key.

---

### CfnClusterProps <a name="CfnClusterProps" id="awscdk-resources-mongodbatlas.CfnClusterProps"></a>

The cluster resource provides access to your cluster configurations.

The resource lets you create, edit and delete clusters. The resource requires your Project ID.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.CfnClusterProps.Initializer"></a>

```typescript
import { CfnClusterProps } from 'awscdk-resources-mongodbatlas'

const cfnClusterProps: CfnClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.name">name</a></code> | <code>string</code> | Human-readable label that identifies the advanced cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier of the project the cluster belongs to. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.advancedSettings">advancedSettings</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs">ProcessArgs</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.backupEnabled">backupEnabled</a></code> | <code>boolean</code> | Flag that indicates whether the cluster can perform backups. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.biConnector">biConnector</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsBiConnector">CfnClusterPropsBiConnector</a></code> | Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.clusterType">clusterType</a></code> | <code>string</code> | Configuration of nodes that comprise the cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.connectionStrings">connectionStrings</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ConnectionStrings">ConnectionStrings</a></code> | Set of connection strings that your applications use to connect to this cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Storage capacity that the host's root volume possesses expressed in gigabytes. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider">CfnClusterPropsEncryptionAtRestProvider</a></code> | Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.labels">labels</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsLabels">CfnClusterPropsLabels</a>[]</code> | Collection of key-value pairs between 1 to 255 characters in length that tag and categorize the cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>string</code> | Major MongoDB version of the cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.paused">paused</a></code> | <code>boolean</code> | Flag that indicates whether the cluster is paused or not. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.pitEnabled">pitEnabled</a></code> | <code>boolean</code> | Flag that indicates whether the cluster uses continuous cloud backups. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.profile">profile</a></code> | <code>string</code> | Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.replicationSpecs">replicationSpecs</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AdvancedReplicationSpec">AdvancedReplicationSpec</a>[]</code> | List of settings that configure your cluster regions. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.rootCertType">rootCertType</a></code> | <code>string</code> | Root Certificate Authority that MongoDB Cloud cluster uses. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean</code> | Flag that indicates whether termination protection is enabled on the cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterProps.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | Method by which the cluster maintains the MongoDB versions. |

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable label that identifies the advanced cluster.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique identifier of the project the cluster belongs to.

---

##### `advancedSettings`<sup>Optional</sup> <a name="advancedSettings" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.advancedSettings"></a>

```typescript
public readonly advancedSettings: ProcessArgs;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ProcessArgs">ProcessArgs</a>

---

##### `backupEnabled`<sup>Optional</sup> <a name="backupEnabled" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.backupEnabled"></a>

```typescript
public readonly backupEnabled: boolean;
```

- *Type:* boolean

Flag that indicates whether the cluster can perform backups.

If set to true, the cluster can perform backups. You must set this value to true for NVMe clusters. Backup uses Cloud Backups for dedicated clusters and Shared Cluster Backups for tenant clusters. If set to false, the cluster doesn't use backups.

---

##### `biConnector`<sup>Optional</sup> <a name="biConnector" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.biConnector"></a>

```typescript
public readonly biConnector: CfnClusterPropsBiConnector;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnClusterPropsBiConnector">CfnClusterPropsBiConnector</a>

Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

Configuration of nodes that comprise the cluster.

---

##### `connectionStrings`<sup>Optional</sup> <a name="connectionStrings" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: ConnectionStrings;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ConnectionStrings">ConnectionStrings</a>

Set of connection strings that your applications use to connect to this cluster.

Use the parameters in this object to connect your applications to this cluster. See the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/) reference for further details.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Storage capacity that the host's root volume possesses expressed in gigabytes.

Increase this number to add capacity. MongoDB Cloud requires this parameter if you set replicationSpecs. If you specify a disk size below the minimum (10 GB), this parameter defaults to the minimum disk size value. Storage charge calculations depend on whether you choose the default value or a custom value. The maximum value for disk storage cannot exceed 50 times the maximum RAM for the selected cluster. If you require more storage space, consider upgrading your cluster to a higher tier.

---

##### `encryptionAtRestProvider`<sup>Optional</sup> <a name="encryptionAtRestProvider" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.encryptionAtRestProvider"></a>

```typescript
public readonly encryptionAtRestProvider: CfnClusterPropsEncryptionAtRestProvider;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider">CfnClusterPropsEncryptionAtRestProvider</a>

Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster.

To enable customer key management for encryption at rest, the cluster replicationSpecs[n].regionConfigs[m].{type}Specs.instanceSize setting must be M10 or higher and "backupEnabled" : false or omitted entirely.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.labels"></a>

```typescript
public readonly labels: CfnClusterPropsLabels[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnClusterPropsLabels">CfnClusterPropsLabels</a>[]

Collection of key-value pairs between 1 to 255 characters in length that tag and categorize the cluster.

The MongoDB Cloud console doesn't display your labels.

---

##### `mongoDbMajorVersion`<sup>Optional</sup> <a name="mongoDbMajorVersion" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.mongoDbMajorVersion"></a>

```typescript
public readonly mongoDbMajorVersion: string;
```

- *Type:* string

Major MongoDB version of the cluster.

MongoDB Cloud deploys the cluster with the latest stable release of the specified version.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.paused"></a>

```typescript
public readonly paused: boolean;
```

- *Type:* boolean

Flag that indicates whether the cluster is paused or not.

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean;
```

- *Type:* boolean

Flag that indicates whether the cluster uses continuous cloud backups.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used.

---

##### `replicationSpecs`<sup>Optional</sup> <a name="replicationSpecs" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.replicationSpecs"></a>

```typescript
public readonly replicationSpecs: AdvancedReplicationSpec[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.AdvancedReplicationSpec">AdvancedReplicationSpec</a>[]

List of settings that configure your cluster regions.

For Global Clusters, each object in the array represents a zone where your clusters nodes deploy. For non-Global replica sets and sharded clusters, this array has one object representing where your clusters nodes deploy.

---

##### `rootCertType`<sup>Optional</sup> <a name="rootCertType" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.rootCertType"></a>

```typescript
public readonly rootCertType: string;
```

- *Type:* string

Root Certificate Authority that MongoDB Cloud cluster uses.

MongoDB Cloud supports Internet Security Research Group.

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean;
```

- *Type:* boolean

Flag that indicates whether termination protection is enabled on the cluster.

If set to true, MongoDB Cloud won't delete the cluster. If set to false, MongoDB Cloud will delete the cluster.

---

##### `versionReleaseSystem`<sup>Optional</sup> <a name="versionReleaseSystem" id="awscdk-resources-mongodbatlas.CfnClusterProps.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

Method by which the cluster maintains the MongoDB versions.

If value is CONTINUOUS, you must not specify mongoDBMajorVersion

---

### CfnClusterPropsBiConnector <a name="CfnClusterPropsBiConnector" id="awscdk-resources-mongodbatlas.CfnClusterPropsBiConnector"></a>

Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.CfnClusterPropsBiConnector.Initializer"></a>

```typescript
import { CfnClusterPropsBiConnector } from 'awscdk-resources-mongodbatlas'

const cfnClusterPropsBiConnector: CfnClusterPropsBiConnector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsBiConnector.property.enabled">enabled</a></code> | <code>boolean</code> | Flag that indicates whether MongoDB Connector for Business Intelligence is enabled on the specified cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsBiConnector.property.readPreference">readPreference</a></code> | <code>string</code> | Data source node designated for the MongoDB Connector for Business Intelligence on MongoDB Cloud. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="awscdk-resources-mongodbatlas.CfnClusterPropsBiConnector.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Flag that indicates whether MongoDB Connector for Business Intelligence is enabled on the specified cluster.

---

##### `readPreference`<sup>Optional</sup> <a name="readPreference" id="awscdk-resources-mongodbatlas.CfnClusterPropsBiConnector.property.readPreference"></a>

```typescript
public readonly readPreference: string;
```

- *Type:* string
- *Default:* ANALYTICS node, or SECONDARY if there are no ANALYTICS nodes.

Data source node designated for the MongoDB Connector for Business Intelligence on MongoDB Cloud.

The MongoDB Connector for Business Intelligence on MongoDB Cloud reads data from the primary, secondary, or analytics node based on your read preferences. Defaults to ANALYTICS node, or SECONDARY if there are no ANALYTICS nodes.

---

### CfnClusterPropsLabels <a name="CfnClusterPropsLabels" id="awscdk-resources-mongodbatlas.CfnClusterPropsLabels"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.CfnClusterPropsLabels.Initializer"></a>

```typescript
import { CfnClusterPropsLabels } from 'awscdk-resources-mongodbatlas'

const cfnClusterPropsLabels: CfnClusterPropsLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsLabels.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsLabels.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="awscdk-resources-mongodbatlas.CfnClusterPropsLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Optional</sup> <a name="value" id="awscdk-resources-mongodbatlas.CfnClusterPropsLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### CfnDatabaseUserProps <a name="CfnDatabaseUserProps" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps"></a>

Returns, adds, edits, and removes database users.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.Initializer"></a>

```typescript
import { CfnDatabaseUserProps } from 'awscdk-resources-mongodbatlas'

const cfnDatabaseUserProps: CfnDatabaseUserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.databaseName">databaseName</a></code> | <code>string</code> | MongoDB database against which the MongoDB database user authenticates. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier of the Atlas project to which the user belongs. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.roles">roles</a></code> | <code><a href="#awscdk-resources-mongodbatlas.RoleDefinition">RoleDefinition</a>[]</code> | List that provides the pairings of one role with one applicable database. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.username">username</a></code> | <code>string</code> | Human-readable label that represents the user that authenticates to MongoDB. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.awsiamType">awsiamType</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType">CfnDatabaseUserPropsAwsiamType</a></code> | Human-readable label that indicates whether the new database user authenticates with the Amazon Web Services (AWS) Identity and Access Management (IAM) credentials associated with the user or the user's role. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.deleteAfterDate">deleteAfterDate</a></code> | <code>string</code> | Date and time when MongoDB Cloud deletes the user. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.labels">labels</a></code> | <code><a href="#awscdk-resources-mongodbatlas.LabelDefinition">LabelDefinition</a>[]</code> | List that contains the key-value pairs for tagging and categorizing the MongoDB database user. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.ldapAuthType">ldapAuthType</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType">CfnDatabaseUserPropsLdapAuthType</a></code> | Method by which the provided username is authenticated. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.password">password</a></code> | <code>string</code> | The user’s password. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.profile">profile</a></code> | <code>string</code> | Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.scopes">scopes</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ScopeDefinition">ScopeDefinition</a>[]</code> | List that contains clusters and MongoDB Atlas Data Lakes that this database user can access. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.x509Type">x509Type</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type">CfnDatabaseUserPropsX509Type</a></code> | Method that briefs who owns the certificate provided. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

MongoDB database against which the MongoDB database user authenticates.

MongoDB database users must provide both a username and authentication database to log into MongoDB.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique identifier of the Atlas project to which the user belongs.

---

##### `roles`<sup>Required</sup> <a name="roles" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.roles"></a>

```typescript
public readonly roles: RoleDefinition[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.RoleDefinition">RoleDefinition</a>[]

List that provides the pairings of one role with one applicable database.

---

##### `username`<sup>Required</sup> <a name="username" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Human-readable label that represents the user that authenticates to MongoDB.

---

##### `awsiamType`<sup>Optional</sup> <a name="awsiamType" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.awsiamType"></a>

```typescript
public readonly awsiamType: CfnDatabaseUserPropsAwsiamType;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType">CfnDatabaseUserPropsAwsiamType</a>

Human-readable label that indicates whether the new database user authenticates with the Amazon Web Services (AWS) Identity and Access Management (IAM) credentials associated with the user or the user's role.

---

##### `deleteAfterDate`<sup>Optional</sup> <a name="deleteAfterDate" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.deleteAfterDate"></a>

```typescript
public readonly deleteAfterDate: string;
```

- *Type:* string

Date and time when MongoDB Cloud deletes the user.

This parameter expresses its value in the ISO 8601 timestamp format in UTC and can include the time zone designation. You must specify a future date that falls within one week of making the Application Programming Interface (API) request.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.labels"></a>

```typescript
public readonly labels: LabelDefinition[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.LabelDefinition">LabelDefinition</a>[]

List that contains the key-value pairs for tagging and categorizing the MongoDB database user.

The labels that you define do not appear in the console.

---

##### `ldapAuthType`<sup>Optional</sup> <a name="ldapAuthType" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.ldapAuthType"></a>

```typescript
public readonly ldapAuthType: CfnDatabaseUserPropsLdapAuthType;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType">CfnDatabaseUserPropsLdapAuthType</a>

Method by which the provided username is authenticated.

If no value is given, Atlas uses the default value of NONE.

---

##### `password`<sup>Optional</sup> <a name="password" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The user’s password.

This field is not included in the entity returned from the server.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.scopes"></a>

```typescript
public readonly scopes: ScopeDefinition[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ScopeDefinition">ScopeDefinition</a>[]

List that contains clusters and MongoDB Atlas Data Lakes that this database user can access.

If omitted, MongoDB Cloud grants the database user access to all the clusters and MongoDB Atlas Data Lakes in the project.

---

##### `x509Type`<sup>Optional</sup> <a name="x509Type" id="awscdk-resources-mongodbatlas.CfnDatabaseUserProps.property.x509Type"></a>

```typescript
public readonly x509Type: CfnDatabaseUserPropsX509Type;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type">CfnDatabaseUserPropsX509Type</a>

Method that briefs who owns the certificate provided.

If no value is given while using X509Type, Atlas uses the default value of MANAGED.

---

### CfnEncryptionAtRestProps <a name="CfnEncryptionAtRestProps" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps"></a>

Returns and edits the Encryption at Rest using Customer Key Management configuration.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps.Initializer"></a>

```typescript
import { CfnEncryptionAtRestProps } from 'awscdk-resources-mongodbatlas'

const cfnEncryptionAtRestProps: CfnEncryptionAtRestProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps.property.awsKms">awsKms</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AwsKmsConfiguration">AwsKmsConfiguration</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier of the Atlas project to which the user belongs. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps.property.profile">profile</a></code> | <code>string</code> | The profile is defined in AWS Secret manager. |

---

##### `awsKms`<sup>Required</sup> <a name="awsKms" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps.property.awsKms"></a>

```typescript
public readonly awsKms: AwsKmsConfiguration;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.AwsKmsConfiguration">AwsKmsConfiguration</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique identifier of the Atlas project to which the user belongs.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.CfnEncryptionAtRestProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The profile is defined in AWS Secret manager.

See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).

---

### CfnPrivateEndpointProps <a name="CfnPrivateEndpointProps" id="awscdk-resources-mongodbatlas.CfnPrivateEndpointProps"></a>

The Private Endpoint creation flow consists of the creation of three related resources in the next order: 1.

Atlas Private Endpoint Service 2. Aws VPC private Endpoint 3. Atlas Private Endpoint

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.Initializer"></a>

```typescript
import { CfnPrivateEndpointProps } from 'awscdk-resources-mongodbatlas'

const cfnPrivateEndpointProps: CfnPrivateEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.groupId">groupId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.region">region</a></code> | <code>string</code> | Aws Region. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.endpointServiceName">endpointServiceName</a></code> | <code>string</code> | Name of the AWS PrivateLink endpoint service. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.errorMessage">errorMessage</a></code> | <code>string</code> | Error message pertaining to the AWS PrivateLink connection. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.privateEndpoints">privateEndpoints</a></code> | <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpoint">PrivateEndpoint</a>[]</code> | List of private endpoint associated to the service. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.profile">profile</a></code> | <code>string</code> | The profile is defined in AWS Secret manager. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.status">status</a></code> | <code>string</code> | Status of the Atlas PrivateEndpoint service connection. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `region`<sup>Required</sup> <a name="region" id="awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Aws Region.

---

##### `endpointServiceName`<sup>Optional</sup> <a name="endpointServiceName" id="awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.endpointServiceName"></a>

```typescript
public readonly endpointServiceName: string;
```

- *Type:* string

Name of the AWS PrivateLink endpoint service.

Atlas returns null while it is creating the endpoint service.

---

##### `errorMessage`<sup>Optional</sup> <a name="errorMessage" id="awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

Error message pertaining to the AWS PrivateLink connection.

Returns null if there are no errors.

---

##### `privateEndpoints`<sup>Optional</sup> <a name="privateEndpoints" id="awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.privateEndpoints"></a>

```typescript
public readonly privateEndpoints: PrivateEndpoint[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.PrivateEndpoint">PrivateEndpoint</a>[]

List of private endpoint associated to the service.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The profile is defined in AWS Secret manager.

See [Secret Manager Profile setup (../../../examples/profile-secret.yaml)

---

##### `status`<sup>Optional</sup> <a name="status" id="awscdk-resources-mongodbatlas.CfnPrivateEndpointProps.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of the Atlas PrivateEndpoint service connection.

---

### CfnProjectIpAccessListProps <a name="CfnProjectIpAccessListProps" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps"></a>

Returns, adds, edits, and removes network access limits to database deployments in MongoDB Cloud.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.Initializer"></a>

```typescript
import { CfnProjectIpAccessListProps } from 'awscdk-resources-mongodbatlas'

const cfnProjectIpAccessListProps: CfnProjectIpAccessListProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.property.accessList">accessList</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AccessListDefinition">AccessListDefinition</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.property.listOptions">listOptions</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ListOptions">ListOptions</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.property.profile">profile</a></code> | <code>string</code> | Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.property.totalCount">totalCount</a></code> | <code>number</code> | Number of documents returned in this response. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `accessList`<sup>Optional</sup> <a name="accessList" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.property.accessList"></a>

```typescript
public readonly accessList: AccessListDefinition[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.AccessListDefinition">AccessListDefinition</a>[]

---

##### `listOptions`<sup>Optional</sup> <a name="listOptions" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.property.listOptions"></a>

```typescript
public readonly listOptions: ListOptions;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ListOptions">ListOptions</a>

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used.

---

##### `totalCount`<sup>Optional</sup> <a name="totalCount" id="awscdk-resources-mongodbatlas.CfnProjectIpAccessListProps.property.totalCount"></a>

```typescript
public readonly totalCount: number;
```

- *Type:* number

Number of documents returned in this response.

---

### CfnProjectProps <a name="CfnProjectProps" id="awscdk-resources-mongodbatlas.CfnProjectProps"></a>

Retrieves or creates projects in any given Atlas organization.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.CfnProjectProps.Initializer"></a>

```typescript
import { CfnProjectProps } from 'awscdk-resources-mongodbatlas'

const cfnProjectProps: CfnProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectProps.property.name">name</a></code> | <code>string</code> | Name of the project to create. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectProps.property.orgId">orgId</a></code> | <code>string</code> | Unique identifier of the organization within which to create the project. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectProps.property.profile">profile</a></code> | <code>string</code> | Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectProps.property.projectApiKeys">projectApiKeys</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ProjectApiKey">ProjectApiKey</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectProps.property.projectSettings">projectSettings</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ProjectSettings">ProjectSettings</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectProps.property.projectTeams">projectTeams</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ProjectTeam">ProjectTeam</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.CfnProjectProps.property.withDefaultAlertsSettings">withDefaultAlertsSettings</a></code> | <code>boolean</code> | Flag that indicates whether to create the project with default alert settings. |

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-resources-mongodbatlas.CfnProjectProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the project to create.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="awscdk-resources-mongodbatlas.CfnProjectProps.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Unique identifier of the organization within which to create the project.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.CfnProjectProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used.

---

##### `projectApiKeys`<sup>Optional</sup> <a name="projectApiKeys" id="awscdk-resources-mongodbatlas.CfnProjectProps.property.projectApiKeys"></a>

```typescript
public readonly projectApiKeys: ProjectApiKey[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ProjectApiKey">ProjectApiKey</a>[]

---

##### `projectSettings`<sup>Optional</sup> <a name="projectSettings" id="awscdk-resources-mongodbatlas.CfnProjectProps.property.projectSettings"></a>

```typescript
public readonly projectSettings: ProjectSettings;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ProjectSettings">ProjectSettings</a>

---

##### `projectTeams`<sup>Optional</sup> <a name="projectTeams" id="awscdk-resources-mongodbatlas.CfnProjectProps.property.projectTeams"></a>

```typescript
public readonly projectTeams: ProjectTeam[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ProjectTeam">ProjectTeam</a>[]

---

##### `withDefaultAlertsSettings`<sup>Optional</sup> <a name="withDefaultAlertsSettings" id="awscdk-resources-mongodbatlas.CfnProjectProps.property.withDefaultAlertsSettings"></a>

```typescript
public readonly withDefaultAlertsSettings: boolean;
```

- *Type:* boolean

Flag that indicates whether to create the project with default alert settings.

---

### CfnThirdPartyIntegrationProps <a name="CfnThirdPartyIntegrationProps" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps"></a>

Returns, adds, edits, and removes third-party service integration configurations.

MongoDB Cloud sends alerts to each third-party service that you configure.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.Initializer"></a>

```typescript
import { CfnThirdPartyIntegrationProps } from 'awscdk-resources-mongodbatlas'

const cfnThirdPartyIntegrationProps: CfnThirdPartyIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.apiKey">apiKey</a></code> | <code>string</code> | Key that allows MongoDB Cloud to access your Opsgenie/Datadog account. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.apiToken">apiToken</a></code> | <code>string</code> | Key that allows MongoDB Cloud to access your Slack account. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.channelName">channelName</a></code> | <code>string</code> | Name of the Slack channel to which MongoDB Cloud sends alert notifications. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.enabled">enabled</a></code> | <code>boolean</code> | Flag that indicates whether someone has activated the Prometheus integration. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.listenAddress">listenAddress</a></code> | <code>string</code> | Combination of IPv4 address and Internet Assigned Numbers Authority (IANA) port or the IANA port alone to which Prometheus binds to ingest MongoDB metrics. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>string</code> | Endpoint web address of the Microsoft Teams webhook to which MongoDB Cloud sends notifications. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.password">password</a></code> | <code>string</code> | Password required for your integration with Prometheus. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.profile">profile</a></code> | <code>string</code> | The profile is defined in AWS Secret manager. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.region">region</a></code> | <code>string</code> | Two-letter code that indicates which regional URL MongoDB uses to access the Opsgenie/Datadog API. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.routingKey">routingKey</a></code> | <code>string</code> | Routing key associated with your Splunk On-Call account. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.scheme">scheme</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsScheme">CfnThirdPartyIntegrationPropsScheme</a></code> | Security Scheme to apply to HyperText Transfer Protocol (HTTP) traffic between Prometheus and MongoDB Cloud. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.secret">secret</a></code> | <code>string</code> | Parameter returned if someone configure this webhook with a secret. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.serviceDiscovery">serviceDiscovery</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsServiceDiscovery">CfnThirdPartyIntegrationPropsServiceDiscovery</a></code> | Desired method to discover the Prometheus service. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.serviceKey">serviceKey</a></code> | <code>string</code> | Service key associated with your PagerDuty account. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.teamName">teamName</a></code> | <code>string</code> | Human-readable label that identifies your Slack team. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.tlsPemPath">tlsPemPath</a></code> | <code>string</code> | Root-relative path to the Transport Layer Security (TLS) Privacy Enhanced Mail (PEM) key and certificate file on the host. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.type">type</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType">CfnThirdPartyIntegrationPropsType</a></code> | Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.url">url</a></code> | <code>string</code> | Endpoint web address to which MongoDB Cloud sends notifications. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.userName">userName</a></code> | <code>string</code> | Human-readable label that identifies your Prometheus incoming webhook. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Key that allows MongoDB Cloud to access your Opsgenie/Datadog account.

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

Key that allows MongoDB Cloud to access your Slack account.

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Name of the Slack channel to which MongoDB Cloud sends alert notifications.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Flag that indicates whether someone has activated the Prometheus integration.

---

##### `listenAddress`<sup>Optional</sup> <a name="listenAddress" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.listenAddress"></a>

```typescript
public readonly listenAddress: string;
```

- *Type:* string

Combination of IPv4 address and Internet Assigned Numbers Authority (IANA) port or the IANA port alone to which Prometheus binds to ingest MongoDB metrics.

---

##### `microsoftTeamsWebhookUrl`<sup>Optional</sup> <a name="microsoftTeamsWebhookUrl" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.microsoftTeamsWebhookUrl"></a>

```typescript
public readonly microsoftTeamsWebhookUrl: string;
```

- *Type:* string

Endpoint web address of the Microsoft Teams webhook to which MongoDB Cloud sends notifications.

---

##### `password`<sup>Optional</sup> <a name="password" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password required for your integration with Prometheus.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The profile is defined in AWS Secret manager.

See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Two-letter code that indicates which regional URL MongoDB uses to access the Opsgenie/Datadog API.

---

##### `routingKey`<sup>Optional</sup> <a name="routingKey" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.routingKey"></a>

```typescript
public readonly routingKey: string;
```

- *Type:* string

Routing key associated with your Splunk On-Call account.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.scheme"></a>

```typescript
public readonly scheme: CfnThirdPartyIntegrationPropsScheme;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsScheme">CfnThirdPartyIntegrationPropsScheme</a>

Security Scheme to apply to HyperText Transfer Protocol (HTTP) traffic between Prometheus and MongoDB Cloud.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Parameter returned if someone configure this webhook with a secret.

---

##### `serviceDiscovery`<sup>Optional</sup> <a name="serviceDiscovery" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.serviceDiscovery"></a>

```typescript
public readonly serviceDiscovery: CfnThirdPartyIntegrationPropsServiceDiscovery;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsServiceDiscovery">CfnThirdPartyIntegrationPropsServiceDiscovery</a>

Desired method to discover the Prometheus service.

---

##### `serviceKey`<sup>Optional</sup> <a name="serviceKey" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

Service key associated with your PagerDuty account.

---

##### `teamName`<sup>Optional</sup> <a name="teamName" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

Human-readable label that identifies your Slack team.

Set this parameter when you configure a legacy Slack integration.

---

##### `tlsPemPath`<sup>Optional</sup> <a name="tlsPemPath" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.tlsPemPath"></a>

```typescript
public readonly tlsPemPath: string;
```

- *Type:* string

Root-relative path to the Transport Layer Security (TLS) Privacy Enhanced Mail (PEM) key and certificate file on the host.

---

##### `type`<sup>Optional</sup> <a name="type" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.type"></a>

```typescript
public readonly type: CfnThirdPartyIntegrationPropsType;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType">CfnThirdPartyIntegrationPropsType</a>

Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud.

The value must match the third-party service integration type.

---

##### `url`<sup>Optional</sup> <a name="url" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Endpoint web address to which MongoDB Cloud sends notifications.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Human-readable label that identifies your Prometheus incoming webhook.

---

### ClusterProps <a name="ClusterProps" id="awscdk-resources-mongodbatlas.ClusterProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.ClusterProps.Initializer"></a>

```typescript
import { ClusterProps } from 'awscdk-resources-mongodbatlas'

const clusterProps: ClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.advancedSettings">advancedSettings</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs">ProcessArgs</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.backupEnabled">backupEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.biConnector">biConnector</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsBiConnector">CfnClusterPropsBiConnector</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.connectionStrings">connectionStrings</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ConnectionStrings">ConnectionStrings</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider">CfnClusterPropsEncryptionAtRestProvider</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.labels">labels</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsLabels">CfnClusterPropsLabels</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.paused">paused</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.pitEnabled">pitEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.replicationSpecs">replicationSpecs</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AdvancedReplicationSpec">AdvancedReplicationSpec</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.rootCertType">rootCertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ClusterProps.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | *No description.* |

---

##### `advancedSettings`<sup>Optional</sup> <a name="advancedSettings" id="awscdk-resources-mongodbatlas.ClusterProps.property.advancedSettings"></a>

```typescript
public readonly advancedSettings: ProcessArgs;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ProcessArgs">ProcessArgs</a>

---

##### `backupEnabled`<sup>Optional</sup> <a name="backupEnabled" id="awscdk-resources-mongodbatlas.ClusterProps.property.backupEnabled"></a>

```typescript
public readonly backupEnabled: boolean;
```

- *Type:* boolean

---

##### `biConnector`<sup>Optional</sup> <a name="biConnector" id="awscdk-resources-mongodbatlas.ClusterProps.property.biConnector"></a>

```typescript
public readonly biConnector: CfnClusterPropsBiConnector;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnClusterPropsBiConnector">CfnClusterPropsBiConnector</a>

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="awscdk-resources-mongodbatlas.ClusterProps.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Optional</sup> <a name="connectionStrings" id="awscdk-resources-mongodbatlas.ClusterProps.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: ConnectionStrings;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ConnectionStrings">ConnectionStrings</a>
- *Default:* REPLICASET

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="awscdk-resources-mongodbatlas.ClusterProps.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `encryptionAtRestProvider`<sup>Optional</sup> <a name="encryptionAtRestProvider" id="awscdk-resources-mongodbatlas.ClusterProps.property.encryptionAtRestProvider"></a>

```typescript
public readonly encryptionAtRestProvider: CfnClusterPropsEncryptionAtRestProvider;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider">CfnClusterPropsEncryptionAtRestProvider</a>

---

##### `labels`<sup>Optional</sup> <a name="labels" id="awscdk-resources-mongodbatlas.ClusterProps.property.labels"></a>

```typescript
public readonly labels: CfnClusterPropsLabels[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnClusterPropsLabels">CfnClusterPropsLabels</a>[]

---

##### `mongoDbMajorVersion`<sup>Optional</sup> <a name="mongoDbMajorVersion" id="awscdk-resources-mongodbatlas.ClusterProps.property.mongoDbMajorVersion"></a>

```typescript
public readonly mongoDbMajorVersion: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="awscdk-resources-mongodbatlas.ClusterProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `paused`<sup>Optional</sup> <a name="paused" id="awscdk-resources-mongodbatlas.ClusterProps.property.paused"></a>

```typescript
public readonly paused: boolean;
```

- *Type:* boolean
- *Default:* auto-generated

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="awscdk-resources-mongodbatlas.ClusterProps.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean;
```

- *Type:* boolean

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.ClusterProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `replicationSpecs`<sup>Optional</sup> <a name="replicationSpecs" id="awscdk-resources-mongodbatlas.ClusterProps.property.replicationSpecs"></a>

```typescript
public readonly replicationSpecs: AdvancedReplicationSpec[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.AdvancedReplicationSpec">AdvancedReplicationSpec</a>[]

---

##### `rootCertType`<sup>Optional</sup> <a name="rootCertType" id="awscdk-resources-mongodbatlas.ClusterProps.property.rootCertType"></a>

```typescript
public readonly rootCertType: string;
```

- *Type:* string

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="awscdk-resources-mongodbatlas.ClusterProps.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean;
```

- *Type:* boolean

---

##### `versionReleaseSystem`<sup>Optional</sup> <a name="versionReleaseSystem" id="awscdk-resources-mongodbatlas.ClusterProps.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

---

### Compute <a name="Compute" id="awscdk-resources-mongodbatlas.Compute"></a>

Automatic Compute Scaling.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.Compute.Initializer"></a>

```typescript
import { Compute } from 'awscdk-resources-mongodbatlas'

const compute: Compute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.Compute.property.enabled">enabled</a></code> | <code>boolean</code> | Flag that indicates whether someone enabled instance size auto-scaling. |
| <code><a href="#awscdk-resources-mongodbatlas.Compute.property.maxInstanceSize">maxInstanceSize</a></code> | <code>string</code> | Maximum instance size to which your cluster can automatically scale. |
| <code><a href="#awscdk-resources-mongodbatlas.Compute.property.minInstanceSize">minInstanceSize</a></code> | <code>string</code> | Minimum instance size to which your cluster can automatically scale. |
| <code><a href="#awscdk-resources-mongodbatlas.Compute.property.scaleDownEnabled">scaleDownEnabled</a></code> | <code>boolean</code> | Flag that indicates whether the instance size may scale down. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="awscdk-resources-mongodbatlas.Compute.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Flag that indicates whether someone enabled instance size auto-scaling.

Set to true to enable instance size auto-scaling. If enabled, you must specify a value for replicationSpecs[n].regionConfigs[m].autoScaling.compute.maxInstanceSize.
Set to false to disable instance size automatic scaling.

---

##### `maxInstanceSize`<sup>Optional</sup> <a name="maxInstanceSize" id="awscdk-resources-mongodbatlas.Compute.property.maxInstanceSize"></a>

```typescript
public readonly maxInstanceSize: string;
```

- *Type:* string

Maximum instance size to which your cluster can automatically scale.

MongoDB Cloud requires this parameter if "replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true.

---

##### `minInstanceSize`<sup>Optional</sup> <a name="minInstanceSize" id="awscdk-resources-mongodbatlas.Compute.property.minInstanceSize"></a>

```typescript
public readonly minInstanceSize: string;
```

- *Type:* string

Minimum instance size to which your cluster can automatically scale.

MongoDB Cloud requires this parameter if "replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true.

---

##### `scaleDownEnabled`<sup>Optional</sup> <a name="scaleDownEnabled" id="awscdk-resources-mongodbatlas.Compute.property.scaleDownEnabled"></a>

```typescript
public readonly scaleDownEnabled: boolean;
```

- *Type:* boolean

Flag that indicates whether the instance size may scale down.

MongoDB Cloud requires this parameter if "replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true. If you enable this option, specify a value for replicationSpecs[n].regionConfigs[m].autoScaling.compute.minInstanceSize.

---

### ConnectionStrings <a name="ConnectionStrings" id="awscdk-resources-mongodbatlas.ConnectionStrings"></a>

Collection of Uniform Resource Locators that point to the MongoDB database.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.ConnectionStrings.Initializer"></a>

```typescript
import { ConnectionStrings } from 'awscdk-resources-mongodbatlas'

const connectionStrings: ConnectionStrings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ConnectionStrings.property.awsPrivateLink">awsPrivateLink</a></code> | <code>string</code> | Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink. |
| <code><a href="#awscdk-resources-mongodbatlas.ConnectionStrings.property.awsPrivateLinkSrv">awsPrivateLinkSrv</a></code> | <code>string</code> | Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink. |
| <code><a href="#awscdk-resources-mongodbatlas.ConnectionStrings.property.private">private</a></code> | <code>string</code> | Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.ConnectionStrings.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpoint">PrivateEndpoint</a>[]</code> | List of private endpoint connection strings that you can use to connect to this cluster through a private endpoint. |
| <code><a href="#awscdk-resources-mongodbatlas.ConnectionStrings.property.privateSrv">privateSrv</a></code> | <code>string</code> | Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.ConnectionStrings.property.standard">standard</a></code> | <code>string</code> | Public connection string that you can use to connect to this cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.ConnectionStrings.property.standardSrv">standardSrv</a></code> | <code>string</code> | Public connection string that you can use to connect to this cluster. |

---

##### `awsPrivateLink`<sup>Optional</sup> <a name="awsPrivateLink" id="awscdk-resources-mongodbatlas.ConnectionStrings.property.awsPrivateLink"></a>

```typescript
public readonly awsPrivateLink: string;
```

- *Type:* string

Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink.

Each key identifies an Amazon Web Services (AWS) interface endpoint. Each value identifies the related mongodb:// connection string that you use to connect to MongoDB Cloud through the interface endpoint that the key names.

---

##### `awsPrivateLinkSrv`<sup>Optional</sup> <a name="awsPrivateLinkSrv" id="awscdk-resources-mongodbatlas.ConnectionStrings.property.awsPrivateLinkSrv"></a>

```typescript
public readonly awsPrivateLinkSrv: string;
```

- *Type:* string

Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink.

Each key identifies an Amazon Web Services (AWS) interface endpoint. Each value identifies the related mongodb:// connection string that you use to connect to Atlas through the interface endpoint that the key names.

---

##### `private`<sup>Optional</sup> <a name="private" id="awscdk-resources-mongodbatlas.ConnectionStrings.property.private"></a>

```typescript
public readonly private: string;
```

- *Type:* string

Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster.

This connection string uses the mongodb+srv:// protocol. The resource returns this parameter once someone creates a network peering connection to this cluster. This protocol tells the application to look up the host seed list in the Domain Name System (DNS). This list synchronizes with the nodes in a cluster. If the connection string uses this Uniform Resource Identifier (URI) format, you don't need to append the seed list or change the URI if the nodes change. Use this URI format if your driver supports it. If it doesn't, use connectionStrings.private. For Amazon Web Services (AWS) clusters, this resource returns this parameter only if you enable custom DNS.

---

##### `privateEndpoint`<sup>Optional</sup> <a name="privateEndpoint" id="awscdk-resources-mongodbatlas.ConnectionStrings.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: PrivateEndpoint[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.PrivateEndpoint">PrivateEndpoint</a>[]

List of private endpoint connection strings that you can use to connect to this cluster through a private endpoint.

This parameter returns only if you deployed a private endpoint to all regions to which you deployed this clusters' nodes.

---

##### `privateSrv`<sup>Optional</sup> <a name="privateSrv" id="awscdk-resources-mongodbatlas.ConnectionStrings.property.privateSrv"></a>

```typescript
public readonly privateSrv: string;
```

- *Type:* string

Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster.

This connection string uses the mongodb+srv:// protocol. The resource returns this parameter when someone creates a network peering connection to this cluster. This protocol tells the application to look up the host seed list in the Domain Name System (DNS). This list synchronizes with the nodes in a cluster. If the connection string uses this Uniform Resource Identifier (URI) format, you don't need to append the seed list or change the Uniform Resource Identifier (URI) if the nodes change. Use this Uniform Resource Identifier (URI) format if your driver supports it. If it doesn't, use connectionStrings.private. For Amazon Web Services (AWS) clusters, this parameter returns only if you enable custom DNS.

---

##### `standard`<sup>Optional</sup> <a name="standard" id="awscdk-resources-mongodbatlas.ConnectionStrings.property.standard"></a>

```typescript
public readonly standard: string;
```

- *Type:* string

Public connection string that you can use to connect to this cluster.

This connection string uses the mongodb:// protocol.

---

##### `standardSrv`<sup>Optional</sup> <a name="standardSrv" id="awscdk-resources-mongodbatlas.ConnectionStrings.property.standardSrv"></a>

```typescript
public readonly standardSrv: string;
```

- *Type:* string

Public connection string that you can use to connect to this cluster.

This connection string uses the mongodb+srv:// protocol.

---

### DatabaseUserProps <a name="DatabaseUserProps" id="awscdk-resources-mongodbatlas.DatabaseUserProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.DatabaseUserProps.Initializer"></a>

```typescript
import { DatabaseUserProps } from 'awscdk-resources-mongodbatlas'

const databaseUserProps: DatabaseUserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.awsiamType">awsiamType</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType">CfnDatabaseUserPropsAwsiamType</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.deleteAfterDate">deleteAfterDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.labels">labels</a></code> | <code><a href="#awscdk-resources-mongodbatlas.LabelDefinition">LabelDefinition</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.ldapAuthType">ldapAuthType</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType">CfnDatabaseUserPropsLdapAuthType</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.roles">roles</a></code> | <code><a href="#awscdk-resources-mongodbatlas.RoleDefinition">RoleDefinition</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.scopes">scopes</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ScopeDefinition">ScopeDefinition</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatabaseUserProps.property.x509Type">x509Type</a></code> | <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type">CfnDatabaseUserPropsX509Type</a></code> | *No description.* |

---

##### `awsiamType`<sup>Optional</sup> <a name="awsiamType" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.awsiamType"></a>

```typescript
public readonly awsiamType: CfnDatabaseUserPropsAwsiamType;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType">CfnDatabaseUserPropsAwsiamType</a>

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `deleteAfterDate`<sup>Optional</sup> <a name="deleteAfterDate" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.deleteAfterDate"></a>

```typescript
public readonly deleteAfterDate: string;
```

- *Type:* string

---

##### `labels`<sup>Optional</sup> <a name="labels" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.labels"></a>

```typescript
public readonly labels: LabelDefinition[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.LabelDefinition">LabelDefinition</a>[]
- *Default:* admin

---

##### `ldapAuthType`<sup>Optional</sup> <a name="ldapAuthType" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.ldapAuthType"></a>

```typescript
public readonly ldapAuthType: CfnDatabaseUserPropsLdapAuthType;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType">CfnDatabaseUserPropsLdapAuthType</a>

---

##### `password`<sup>Optional</sup> <a name="password" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string
- *Default:* cdk-pwd

---

##### `roles`<sup>Optional</sup> <a name="roles" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.roles"></a>

```typescript
public readonly roles: RoleDefinition[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.RoleDefinition">RoleDefinition</a>[]

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.scopes"></a>

```typescript
public readonly scopes: ScopeDefinition[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ScopeDefinition">ScopeDefinition</a>[]

---

##### `username`<sup>Optional</sup> <a name="username" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string
- *Default:* cdk-user

---

##### `x509Type`<sup>Optional</sup> <a name="x509Type" id="awscdk-resources-mongodbatlas.DatabaseUserProps.property.x509Type"></a>

```typescript
public readonly x509Type: CfnDatabaseUserPropsX509Type;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type">CfnDatabaseUserPropsX509Type</a>

---

### DatadogIntegrationProps <a name="DatadogIntegrationProps" id="awscdk-resources-mongodbatlas.DatadogIntegrationProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.DatadogIntegrationProps.Initializer"></a>

```typescript
import { DatadogIntegrationProps } from 'awscdk-resources-mongodbatlas'

const datadogIntegrationProps: DatadogIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegrationProps.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegrationProps.property.profile">profile</a></code> | <code>string</code> | Atlas API keys. |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegrationProps.property.apiKey">apiKey</a></code> | <code>string</code> | Key that allows MongoDB Cloud to access your Datadog account. |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogIntegrationProps.property.region">region</a></code> | <code><a href="#awscdk-resources-mongodbatlas.DatadogRegion">DatadogRegion</a></code> | Two-letter code that indicates which regional URL MongoDB uses to access the Datadog API. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.DatadogIntegrationProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.DatadogIntegrationProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Atlas API keys.

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="awscdk-resources-mongodbatlas.DatadogIntegrationProps.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Key that allows MongoDB Cloud to access your Datadog account.

---

##### `region`<sup>Required</sup> <a name="region" id="awscdk-resources-mongodbatlas.DatadogIntegrationProps.property.region"></a>

```typescript
public readonly region: DatadogRegion;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.DatadogRegion">DatadogRegion</a>

Two-letter code that indicates which regional URL MongoDB uses to access the Datadog API.

---

### DiskGb <a name="DiskGb" id="awscdk-resources-mongodbatlas.DiskGb"></a>

Automatic cluster storage settings that apply to this cluster.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.DiskGb.Initializer"></a>

```typescript
import { DiskGb } from 'awscdk-resources-mongodbatlas'

const diskGb: DiskGb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.DiskGb.property.enabled">enabled</a></code> | <code>boolean</code> | Flag that indicates whether this cluster enables disk auto-scaling. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="awscdk-resources-mongodbatlas.DiskGb.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Flag that indicates whether this cluster enables disk auto-scaling.

The maximum memory allowed for the selected cluster tier and the oplog size can limit storage auto-scaling.

---

### EncryptionAtRestProps <a name="EncryptionAtRestProps" id="awscdk-resources-mongodbatlas.EncryptionAtRestProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.EncryptionAtRestProps.Initializer"></a>

```typescript
import { EncryptionAtRestProps } from 'awscdk-resources-mongodbatlas'

const encryptionAtRestProps: EncryptionAtRestProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.EncryptionAtRestProps.property.customerMasterKeyId">customerMasterKeyId</a></code> | <code>string</code> | The AWS customer master key used to encrypt and decrypt the MongoDB master keys. |
| <code><a href="#awscdk-resources-mongodbatlas.EncryptionAtRestProps.property.roleId">roleId</a></code> | <code>string</code> | ID of an AWS IAM role authorized to manage an AWS customer master key. |
| <code><a href="#awscdk-resources-mongodbatlas.EncryptionAtRestProps.property.enabledEncryptionAtRest">enabledEncryptionAtRest</a></code> | <code>boolean</code> | Specifies whether Encryption at Rest is enabled for an Atlas project. |
| <code><a href="#awscdk-resources-mongodbatlas.EncryptionAtRestProps.property.region">region</a></code> | <code>string</code> | The AWS region in which the AWS customer master key exists. |

---

##### `customerMasterKeyId`<sup>Required</sup> <a name="customerMasterKeyId" id="awscdk-resources-mongodbatlas.EncryptionAtRestProps.property.customerMasterKeyId"></a>

```typescript
public readonly customerMasterKeyId: string;
```

- *Type:* string

The AWS customer master key used to encrypt and decrypt the MongoDB master keys.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="awscdk-resources-mongodbatlas.EncryptionAtRestProps.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

ID of an AWS IAM role authorized to manage an AWS customer master key.

---

##### `enabledEncryptionAtRest`<sup>Optional</sup> <a name="enabledEncryptionAtRest" id="awscdk-resources-mongodbatlas.EncryptionAtRestProps.property.enabledEncryptionAtRest"></a>

```typescript
public readonly enabledEncryptionAtRest: boolean;
```

- *Type:* boolean

Specifies whether Encryption at Rest is enabled for an Atlas project.

To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
Default Value: true

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.EncryptionAtRestProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region in which the AWS customer master key exists.

---

### Endpoint <a name="Endpoint" id="awscdk-resources-mongodbatlas.Endpoint"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.Endpoint.Initializer"></a>

```typescript
import { Endpoint } from 'awscdk-resources-mongodbatlas'

const endpoint: Endpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.Endpoint.property.endpointId">endpointId</a></code> | <code>string</code> | Unique string that the cloud provider uses to identify the private endpoint. |
| <code><a href="#awscdk-resources-mongodbatlas.Endpoint.property.providerName">providerName</a></code> | <code>string</code> | Cloud provider in which MongoDB Cloud deploys the private endpoint. |
| <code><a href="#awscdk-resources-mongodbatlas.Endpoint.property.region">region</a></code> | <code>string</code> | Region in which MongoDB Cloud deploys the private endpoint. |

---

##### `endpointId`<sup>Optional</sup> <a name="endpointId" id="awscdk-resources-mongodbatlas.Endpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Unique string that the cloud provider uses to identify the private endpoint.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="awscdk-resources-mongodbatlas.Endpoint.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Cloud provider in which MongoDB Cloud deploys the private endpoint.

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.Endpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region in which MongoDB Cloud deploys the private endpoint.

---

### IpAccessListProps <a name="IpAccessListProps" id="awscdk-resources-mongodbatlas.IpAccessListProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.IpAccessListProps.Initializer"></a>

```typescript
import { IpAccessListProps } from 'awscdk-resources-mongodbatlas'

const ipAccessListProps: IpAccessListProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.IpAccessListProps.property.accessList">accessList</a></code> | <code><a href="#awscdk-resources-mongodbatlas.AccessListDefinition">AccessListDefinition</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.IpAccessListProps.property.listOptions">listOptions</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ListOptions">ListOptions</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.IpAccessListProps.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.IpAccessListProps.property.totalCount">totalCount</a></code> | <code>number</code> | *No description.* |

---

##### `accessList`<sup>Required</sup> <a name="accessList" id="awscdk-resources-mongodbatlas.IpAccessListProps.property.accessList"></a>

```typescript
public readonly accessList: AccessListDefinition[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.AccessListDefinition">AccessListDefinition</a>[]

---

##### `listOptions`<sup>Optional</sup> <a name="listOptions" id="awscdk-resources-mongodbatlas.IpAccessListProps.property.listOptions"></a>

```typescript
public readonly listOptions: ListOptions;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ListOptions">ListOptions</a>

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.IpAccessListProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string
- *Default:* allow-all

---

##### `totalCount`<sup>Optional</sup> <a name="totalCount" id="awscdk-resources-mongodbatlas.IpAccessListProps.property.totalCount"></a>

```typescript
public readonly totalCount: number;
```

- *Type:* number

---

### LabelDefinition <a name="LabelDefinition" id="awscdk-resources-mongodbatlas.LabelDefinition"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.LabelDefinition.Initializer"></a>

```typescript
import { LabelDefinition } from 'awscdk-resources-mongodbatlas'

const labelDefinition: LabelDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.LabelDefinition.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.LabelDefinition.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="awscdk-resources-mongodbatlas.LabelDefinition.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Optional</sup> <a name="value" id="awscdk-resources-mongodbatlas.LabelDefinition.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### ListOptions <a name="ListOptions" id="awscdk-resources-mongodbatlas.ListOptions"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.ListOptions.Initializer"></a>

```typescript
import { ListOptions } from 'awscdk-resources-mongodbatlas'

const listOptions: ListOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ListOptions.property.includeCount">includeCount</a></code> | <code>boolean</code> | Flag that indicates whether the response returns the total number of items (totalCount) in the response. |
| <code><a href="#awscdk-resources-mongodbatlas.ListOptions.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | Number of items that the response returns per page. |
| <code><a href="#awscdk-resources-mongodbatlas.ListOptions.property.pageNum">pageNum</a></code> | <code>number</code> | Number of the page that displays the current set of the total objects that the response returns. |

---

##### `includeCount`<sup>Optional</sup> <a name="includeCount" id="awscdk-resources-mongodbatlas.ListOptions.property.includeCount"></a>

```typescript
public readonly includeCount: boolean;
```

- *Type:* boolean

Flag that indicates whether the response returns the total number of items (totalCount) in the response.

---

##### `itemsPerPage`<sup>Optional</sup> <a name="itemsPerPage" id="awscdk-resources-mongodbatlas.ListOptions.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

Number of items that the response returns per page.

---

##### `pageNum`<sup>Optional</sup> <a name="pageNum" id="awscdk-resources-mongodbatlas.ListOptions.property.pageNum"></a>

```typescript
public readonly pageNum: number;
```

- *Type:* number

Number of the page that displays the current set of the total objects that the response returns.

---

### MicrosoftTeamsIntegrationProps <a name="MicrosoftTeamsIntegrationProps" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegrationProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegrationProps.Initializer"></a>

```typescript
import { MicrosoftTeamsIntegrationProps } from 'awscdk-resources-mongodbatlas'

const microsoftTeamsIntegrationProps: MicrosoftTeamsIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegrationProps.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegrationProps.property.profile">profile</a></code> | <code>string</code> | Atlas API keys. |
| <code><a href="#awscdk-resources-mongodbatlas.MicrosoftTeamsIntegrationProps.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>string</code> | Endpoint web address of the Microsoft Teams webhook to which MongoDB Cloud sends notifications. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegrationProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegrationProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Atlas API keys.

---

##### `microsoftTeamsWebhookUrl`<sup>Required</sup> <a name="microsoftTeamsWebhookUrl" id="awscdk-resources-mongodbatlas.MicrosoftTeamsIntegrationProps.property.microsoftTeamsWebhookUrl"></a>

```typescript
public readonly microsoftTeamsWebhookUrl: string;
```

- *Type:* string

Endpoint web address of the Microsoft Teams webhook to which MongoDB Cloud sends notifications.

---

### PagerDutyIntegrationProps <a name="PagerDutyIntegrationProps" id="awscdk-resources-mongodbatlas.PagerDutyIntegrationProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.PagerDutyIntegrationProps.Initializer"></a>

```typescript
import { PagerDutyIntegrationProps } from 'awscdk-resources-mongodbatlas'

const pagerDutyIntegrationProps: PagerDutyIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegrationProps.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegrationProps.property.profile">profile</a></code> | <code>string</code> | Atlas API keys. |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegrationProps.property.region">region</a></code> | <code><a href="#awscdk-resources-mongodbatlas.PagerDutyRegion">PagerDutyRegion</a></code> | PagerDuty region that indicates the API Uniform Resource Locator (URL) to use. |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyIntegrationProps.property.serviceKey">serviceKey</a></code> | <code>string</code> | Service key associated with your PagerDuty account. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.PagerDutyIntegrationProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.PagerDutyIntegrationProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Atlas API keys.

---

##### `region`<sup>Required</sup> <a name="region" id="awscdk-resources-mongodbatlas.PagerDutyIntegrationProps.property.region"></a>

```typescript
public readonly region: PagerDutyRegion;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.PagerDutyRegion">PagerDutyRegion</a>

PagerDuty region that indicates the API Uniform Resource Locator (URL) to use.

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="awscdk-resources-mongodbatlas.PagerDutyIntegrationProps.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

Service key associated with your PagerDuty account.

---

### PrivateEndpoint <a name="PrivateEndpoint" id="awscdk-resources-mongodbatlas.PrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.PrivateEndpoint.Initializer"></a>

```typescript
import { PrivateEndpoint } from 'awscdk-resources-mongodbatlas'

const privateEndpoint: PrivateEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpoint.property.atlasPrivateEndpointStatus">atlasPrivateEndpointStatus</a></code> | <code>string</code> | Status of the Atlas PrivateEndpoint connection. |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpoint.property.awsPrivateEndpointStatus">awsPrivateEndpointStatus</a></code> | <code>string</code> | Status of the AWS PrivateEndpoint connection. |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpoint.property.interfaceEndpointId">interfaceEndpointId</a></code> | <code>string</code> | Unique identifiers of the interface endpoints in your VPC that you added to the AWS PrivateLink connection. |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpoint.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | List of string representing the AWS VPC Subnet ID (like: subnet-xxxxxxxxxxxxxxxxx) (Used For Creating the AWS VPC Endpoint). |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | String Representing the AWS VPC ID (like: vpc-xxxxxxxxxxxxxxxx) (Used For Creating the AWS VPC Endpoint). |

---

##### `atlasPrivateEndpointStatus`<sup>Optional</sup> <a name="atlasPrivateEndpointStatus" id="awscdk-resources-mongodbatlas.PrivateEndpoint.property.atlasPrivateEndpointStatus"></a>

```typescript
public readonly atlasPrivateEndpointStatus: string;
```

- *Type:* string

Status of the Atlas PrivateEndpoint connection.

---

##### `awsPrivateEndpointStatus`<sup>Optional</sup> <a name="awsPrivateEndpointStatus" id="awscdk-resources-mongodbatlas.PrivateEndpoint.property.awsPrivateEndpointStatus"></a>

```typescript
public readonly awsPrivateEndpointStatus: string;
```

- *Type:* string

Status of the AWS PrivateEndpoint connection.

---

##### `interfaceEndpointId`<sup>Optional</sup> <a name="interfaceEndpointId" id="awscdk-resources-mongodbatlas.PrivateEndpoint.property.interfaceEndpointId"></a>

```typescript
public readonly interfaceEndpointId: string;
```

- *Type:* string

Unique identifiers of the interface endpoints in your VPC that you added to the AWS PrivateLink connection.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="awscdk-resources-mongodbatlas.PrivateEndpoint.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

List of string representing the AWS VPC Subnet ID (like: subnet-xxxxxxxxxxxxxxxxx) (Used For Creating the AWS VPC Endpoint).

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="awscdk-resources-mongodbatlas.PrivateEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

String Representing the AWS VPC ID (like: vpc-xxxxxxxxxxxxxxxx) (Used For Creating the AWS VPC Endpoint).

---

### PrivateEndpointProps <a name="PrivateEndpointProps" id="awscdk-resources-mongodbatlas.PrivateEndpointProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.PrivateEndpointProps.Initializer"></a>

```typescript
import { PrivateEndpointProps } from 'awscdk-resources-mongodbatlas'

const privateEndpointProps: PrivateEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpointProps.property.endpointServiceName">endpointServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpointProps.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpointProps.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpointProps.property.privateEndpoints">privateEndpoints</a></code> | <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpoint">PrivateEndpoint</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpointProps.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.PrivateEndpointProps.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `endpointServiceName`<sup>Optional</sup> <a name="endpointServiceName" id="awscdk-resources-mongodbatlas.PrivateEndpointProps.property.endpointServiceName"></a>

```typescript
public readonly endpointServiceName: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Optional</sup> <a name="errorMessage" id="awscdk-resources-mongodbatlas.PrivateEndpointProps.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="awscdk-resources-mongodbatlas.PrivateEndpointProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `privateEndpoints`<sup>Optional</sup> <a name="privateEndpoints" id="awscdk-resources-mongodbatlas.PrivateEndpointProps.property.privateEndpoints"></a>

```typescript
public readonly privateEndpoints: PrivateEndpoint[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.PrivateEndpoint">PrivateEndpoint</a>[]

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.PrivateEndpointProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Optional</sup> <a name="status" id="awscdk-resources-mongodbatlas.PrivateEndpointProps.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

### ProcessArgs <a name="ProcessArgs" id="awscdk-resources-mongodbatlas.ProcessArgs"></a>

Advanced configuration details to add for one cluster in the specified project.

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.ProcessArgs.Initializer"></a>

```typescript
import { ProcessArgs } from 'awscdk-resources-mongodbatlas'

const processArgs: ProcessArgs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs.property.defaultReadConcern">defaultReadConcern</a></code> | <code>string</code> | Default level of acknowledgment requested from MongoDB for read operations set for this cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>string</code> | Default level of acknowledgment requested from MongoDB for write operations set for this cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>boolean</code> | Flag that indicates whether you can insert or update documents where all indexed entries don't exceed 1024 bytes. |
| <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs.property.javascriptEnabled">javascriptEnabled</a></code> | <code>boolean</code> | Flag that indicates whether the cluster allows execution of operations that perform server-side executions of JavaScript. |
| <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>string</code> | Minimum Transport Layer Security (TLS) version that the cluster accepts for incoming connections. |
| <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs.property.noTableScan">noTableScan</a></code> | <code>boolean</code> | Flag that indicates whether the cluster disables executing any query that requires a collection scan to return results. |
| <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs.property.oplogSizeMb">oplogSizeMb</a></code> | <code>number</code> | Storage limit of cluster's oplog expressed in megabytes. |
| <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>number</code> | Number of documents per database to sample when gathering schema information. |
| <code><a href="#awscdk-resources-mongodbatlas.ProcessArgs.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>number</code> | Interval in seconds at which the mongosqld process re-samples data to create its relational schema. |

---

##### `defaultReadConcern`<sup>Optional</sup> <a name="defaultReadConcern" id="awscdk-resources-mongodbatlas.ProcessArgs.property.defaultReadConcern"></a>

```typescript
public readonly defaultReadConcern: string;
```

- *Type:* string

Default level of acknowledgment requested from MongoDB for read operations set for this cluster.

---

##### `defaultWriteConcern`<sup>Optional</sup> <a name="defaultWriteConcern" id="awscdk-resources-mongodbatlas.ProcessArgs.property.defaultWriteConcern"></a>

```typescript
public readonly defaultWriteConcern: string;
```

- *Type:* string

Default level of acknowledgment requested from MongoDB for write operations set for this cluster.

---

##### `failIndexKeyTooLong`<sup>Optional</sup> <a name="failIndexKeyTooLong" id="awscdk-resources-mongodbatlas.ProcessArgs.property.failIndexKeyTooLong"></a>

```typescript
public readonly failIndexKeyTooLong: boolean;
```

- *Type:* boolean

Flag that indicates whether you can insert or update documents where all indexed entries don't exceed 1024 bytes.

If you set this to false, mongod writes documents that exceed this limit but doesn't index them.

---

##### `javascriptEnabled`<sup>Optional</sup> <a name="javascriptEnabled" id="awscdk-resources-mongodbatlas.ProcessArgs.property.javascriptEnabled"></a>

```typescript
public readonly javascriptEnabled: boolean;
```

- *Type:* boolean

Flag that indicates whether the cluster allows execution of operations that perform server-side executions of JavaScript.

---

##### `minimumEnabledTlsProtocol`<sup>Optional</sup> <a name="minimumEnabledTlsProtocol" id="awscdk-resources-mongodbatlas.ProcessArgs.property.minimumEnabledTlsProtocol"></a>

```typescript
public readonly minimumEnabledTlsProtocol: string;
```

- *Type:* string

Minimum Transport Layer Security (TLS) version that the cluster accepts for incoming connections.

Clusters using TLS 1.0 or 1.1 should consider setting TLS 1.2 as the minimum TLS protocol version.

---

##### `noTableScan`<sup>Optional</sup> <a name="noTableScan" id="awscdk-resources-mongodbatlas.ProcessArgs.property.noTableScan"></a>

```typescript
public readonly noTableScan: boolean;
```

- *Type:* boolean

Flag that indicates whether the cluster disables executing any query that requires a collection scan to return results.

---

##### `oplogSizeMb`<sup>Optional</sup> <a name="oplogSizeMb" id="awscdk-resources-mongodbatlas.ProcessArgs.property.oplogSizeMb"></a>

```typescript
public readonly oplogSizeMb: number;
```

- *Type:* number

Storage limit of cluster's oplog expressed in megabytes.

A value of null indicates that the cluster uses the default oplog size that MongoDB Cloud calculates.

---

##### `sampleRefreshIntervalBiConnector`<sup>Optional</sup> <a name="sampleRefreshIntervalBiConnector" id="awscdk-resources-mongodbatlas.ProcessArgs.property.sampleRefreshIntervalBiConnector"></a>

```typescript
public readonly sampleRefreshIntervalBiConnector: number;
```

- *Type:* number

Number of documents per database to sample when gathering schema information.

---

##### `sampleSizeBiConnector`<sup>Optional</sup> <a name="sampleSizeBiConnector" id="awscdk-resources-mongodbatlas.ProcessArgs.property.sampleSizeBiConnector"></a>

```typescript
public readonly sampleSizeBiConnector: number;
```

- *Type:* number

Interval in seconds at which the mongosqld process re-samples data to create its relational schema.

---

### ProjectApiKey <a name="ProjectApiKey" id="awscdk-resources-mongodbatlas.ProjectApiKey"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.ProjectApiKey.Initializer"></a>

```typescript
import { ProjectApiKey } from 'awscdk-resources-mongodbatlas'

const projectApiKey: ProjectApiKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectApiKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectApiKey.property.roleNames">roleNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="awscdk-resources-mongodbatlas.ProjectApiKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `roleNames`<sup>Optional</sup> <a name="roleNames" id="awscdk-resources-mongodbatlas.ProjectApiKey.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

---

### ProjectProps <a name="ProjectProps" id="awscdk-resources-mongodbatlas.ProjectProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.ProjectProps.Initializer"></a>

```typescript
import { ProjectProps } from 'awscdk-resources-mongodbatlas'

const projectProps: ProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectProps.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectProps.property.clusterCount">clusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectProps.property.projectApiKeys">projectApiKeys</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ProjectApiKey">ProjectApiKey</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectProps.property.projectOwnerId">projectOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectProps.property.projectSettings">projectSettings</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ProjectSettings">ProjectSettings</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectProps.property.projectTeams">projectTeams</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ProjectTeam">ProjectTeam</a>[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectProps.property.withDefaultAlertsSettings">withDefaultAlertsSettings</a></code> | <code>boolean</code> | *No description.* |

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="awscdk-resources-mongodbatlas.ProjectProps.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string
- *Default:* auto-generated

---

##### `clusterCount`<sup>Optional</sup> <a name="clusterCount" id="awscdk-resources-mongodbatlas.ProjectProps.property.clusterCount"></a>

```typescript
public readonly clusterCount: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="awscdk-resources-mongodbatlas.ProjectProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectApiKeys`<sup>Optional</sup> <a name="projectApiKeys" id="awscdk-resources-mongodbatlas.ProjectProps.property.projectApiKeys"></a>

```typescript
public readonly projectApiKeys: ProjectApiKey[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ProjectApiKey">ProjectApiKey</a>[]

---

##### `projectOwnerId`<sup>Optional</sup> <a name="projectOwnerId" id="awscdk-resources-mongodbatlas.ProjectProps.property.projectOwnerId"></a>

```typescript
public readonly projectOwnerId: string;
```

- *Type:* string

---

##### `projectSettings`<sup>Optional</sup> <a name="projectSettings" id="awscdk-resources-mongodbatlas.ProjectProps.property.projectSettings"></a>

```typescript
public readonly projectSettings: ProjectSettings;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ProjectSettings">ProjectSettings</a>

---

##### `projectTeams`<sup>Optional</sup> <a name="projectTeams" id="awscdk-resources-mongodbatlas.ProjectProps.property.projectTeams"></a>

```typescript
public readonly projectTeams: ProjectTeam[];
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ProjectTeam">ProjectTeam</a>[]

---

##### `withDefaultAlertsSettings`<sup>Optional</sup> <a name="withDefaultAlertsSettings" id="awscdk-resources-mongodbatlas.ProjectProps.property.withDefaultAlertsSettings"></a>

```typescript
public readonly withDefaultAlertsSettings: boolean;
```

- *Type:* boolean

---

### ProjectSettings <a name="ProjectSettings" id="awscdk-resources-mongodbatlas.ProjectSettings"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.ProjectSettings.Initializer"></a>

```typescript
import { ProjectSettings } from 'awscdk-resources-mongodbatlas'

const projectSettings: ProjectSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectSettings.property.isCollectDatabaseSpecificsStatisticsEnabled">isCollectDatabaseSpecificsStatisticsEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectSettings.property.isDataExplorerEnabled">isDataExplorerEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectSettings.property.isPerformanceAdvisorEnabled">isPerformanceAdvisorEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectSettings.property.isRealtimePerformancePanelEnabled">isRealtimePerformancePanelEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectSettings.property.isSchemaAdvisorEnabled">isSchemaAdvisorEnabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `isCollectDatabaseSpecificsStatisticsEnabled`<sup>Optional</sup> <a name="isCollectDatabaseSpecificsStatisticsEnabled" id="awscdk-resources-mongodbatlas.ProjectSettings.property.isCollectDatabaseSpecificsStatisticsEnabled"></a>

```typescript
public readonly isCollectDatabaseSpecificsStatisticsEnabled: boolean;
```

- *Type:* boolean

---

##### `isDataExplorerEnabled`<sup>Optional</sup> <a name="isDataExplorerEnabled" id="awscdk-resources-mongodbatlas.ProjectSettings.property.isDataExplorerEnabled"></a>

```typescript
public readonly isDataExplorerEnabled: boolean;
```

- *Type:* boolean

---

##### `isPerformanceAdvisorEnabled`<sup>Optional</sup> <a name="isPerformanceAdvisorEnabled" id="awscdk-resources-mongodbatlas.ProjectSettings.property.isPerformanceAdvisorEnabled"></a>

```typescript
public readonly isPerformanceAdvisorEnabled: boolean;
```

- *Type:* boolean

---

##### `isRealtimePerformancePanelEnabled`<sup>Optional</sup> <a name="isRealtimePerformancePanelEnabled" id="awscdk-resources-mongodbatlas.ProjectSettings.property.isRealtimePerformancePanelEnabled"></a>

```typescript
public readonly isRealtimePerformancePanelEnabled: boolean;
```

- *Type:* boolean

---

##### `isSchemaAdvisorEnabled`<sup>Optional</sup> <a name="isSchemaAdvisorEnabled" id="awscdk-resources-mongodbatlas.ProjectSettings.property.isSchemaAdvisorEnabled"></a>

```typescript
public readonly isSchemaAdvisorEnabled: boolean;
```

- *Type:* boolean

---

### ProjectTeam <a name="ProjectTeam" id="awscdk-resources-mongodbatlas.ProjectTeam"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.ProjectTeam.Initializer"></a>

```typescript
import { ProjectTeam } from 'awscdk-resources-mongodbatlas'

const projectTeam: ProjectTeam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectTeam.property.roleNames">roleNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ProjectTeam.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `roleNames`<sup>Optional</sup> <a name="roleNames" id="awscdk-resources-mongodbatlas.ProjectTeam.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="awscdk-resources-mongodbatlas.ProjectTeam.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

### RoleDefinition <a name="RoleDefinition" id="awscdk-resources-mongodbatlas.RoleDefinition"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.RoleDefinition.Initializer"></a>

```typescript
import { RoleDefinition } from 'awscdk-resources-mongodbatlas'

const roleDefinition: RoleDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.RoleDefinition.property.collectionName">collectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.RoleDefinition.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.RoleDefinition.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `collectionName`<sup>Optional</sup> <a name="collectionName" id="awscdk-resources-mongodbatlas.RoleDefinition.property.collectionName"></a>

```typescript
public readonly collectionName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="awscdk-resources-mongodbatlas.RoleDefinition.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="awscdk-resources-mongodbatlas.RoleDefinition.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

### ScopeDefinition <a name="ScopeDefinition" id="awscdk-resources-mongodbatlas.ScopeDefinition"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.ScopeDefinition.Initializer"></a>

```typescript
import { ScopeDefinition } from 'awscdk-resources-mongodbatlas'

const scopeDefinition: ScopeDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ScopeDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.ScopeDefinition.property.type">type</a></code> | <code><a href="#awscdk-resources-mongodbatlas.ScopeDefinitionType">ScopeDefinitionType</a></code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="awscdk-resources-mongodbatlas.ScopeDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Optional</sup> <a name="type" id="awscdk-resources-mongodbatlas.ScopeDefinition.property.type"></a>

```typescript
public readonly type: ScopeDefinitionType;
```

- *Type:* <a href="#awscdk-resources-mongodbatlas.ScopeDefinitionType">ScopeDefinitionType</a>

---

### Specs <a name="Specs" id="awscdk-resources-mongodbatlas.Specs"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.Specs.Initializer"></a>

```typescript
import { Specs } from 'awscdk-resources-mongodbatlas'

const specs: Specs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.Specs.property.diskIops">diskIops</a></code> | <code>string</code> | Target throughput desired for storage attached to your AWS-provisioned cluster. Only change this parameter if you:. |
| <code><a href="#awscdk-resources-mongodbatlas.Specs.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | Type of storage you want to attach to your AWS-provisioned cluster. |
| <code><a href="#awscdk-resources-mongodbatlas.Specs.property.instanceSize">instanceSize</a></code> | <code>string</code> | Hardware specification for the instance sizes in this region. |
| <code><a href="#awscdk-resources-mongodbatlas.Specs.property.nodeCount">nodeCount</a></code> | <code>number</code> | Number of read-only nodes for MongoDB Cloud deploys to the region. |

---

##### `diskIops`<sup>Optional</sup> <a name="diskIops" id="awscdk-resources-mongodbatlas.Specs.property.diskIops"></a>

```typescript
public readonly diskIops: string;
```

- *Type:* string

Target throughput desired for storage attached to your AWS-provisioned cluster. Only change this parameter if you:.

set "replicationSpecs[n].regionConfigs[m].providerName" : "AWS".
set "replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M30" or greater not including Mxx_NVME tiers.
The maximum input/output operations per second (IOPS) depend on the selected .instanceSize and .diskSizeGB. This parameter defaults to the cluster tier's standard IOPS value. Changing this value impacts cluster cost. MongoDB Cloud enforces minimum ratios of storage capacity to system memory for given cluster tiers. This keeps cluster performance consistent with large datasets.

Instance sizes M10 to M40 have a ratio of disk capacity to system memory of 60:1.
Instance sizes greater than M40 have a ratio of 120:1.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="awscdk-resources-mongodbatlas.Specs.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

Type of storage you want to attach to your AWS-provisioned cluster.

STANDARD volume types can't exceed the default input/output operations per second (IOPS) rate for the selected volume size.

PROVISIONED volume types must fall within the allowable IOPS range for the selected volume size."

---

##### `instanceSize`<sup>Optional</sup> <a name="instanceSize" id="awscdk-resources-mongodbatlas.Specs.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

Hardware specification for the instance sizes in this region.

Each instance size has a default storage and memory capacity. The instance size you select applies to all the data-bearing hosts in your instance size. If you deploy a Global Cluster, you must choose a instance size of M30 or greater.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="awscdk-resources-mongodbatlas.Specs.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Number of read-only nodes for MongoDB Cloud deploys to the region.

Read-only nodes can never become the primary, but can enable local reads.

---

### ThirdPartyIntegrationProps <a name="ThirdPartyIntegrationProps" id="awscdk-resources-mongodbatlas.ThirdPartyIntegrationProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.ThirdPartyIntegrationProps.Initializer"></a>

```typescript
import { ThirdPartyIntegrationProps } from 'awscdk-resources-mongodbatlas'

const thirdPartyIntegrationProps: ThirdPartyIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ThirdPartyIntegrationProps.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.ThirdPartyIntegrationProps.property.profile">profile</a></code> | <code>string</code> | Atlas API keys. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.ThirdPartyIntegrationProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.ThirdPartyIntegrationProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Atlas API keys.

---



## Enums <a name="Enums" id="Enums"></a>

### CfnClusterPropsEncryptionAtRestProvider <a name="CfnClusterPropsEncryptionAtRestProvider" id="awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider"></a>

Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster.

To enable customer key management for encryption at rest, the cluster replicationSpecs[n].regionConfigs[m].{type}Specs.instanceSize setting must be M10 or higher and "backupEnabled" : false or omitted entirely.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider.AWS">AWS</a></code> | AWS. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider.GCP">GCP</a></code> | GCP. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider.AZURE">AZURE</a></code> | AZURE. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider.NONE">NONE</a></code> | NONE. |

---

##### `AWS` <a name="AWS" id="awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider.AWS"></a>

AWS.

---


##### `GCP` <a name="GCP" id="awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider.GCP"></a>

GCP.

---


##### `AZURE` <a name="AZURE" id="awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider.AZURE"></a>

AZURE.

---


##### `NONE` <a name="NONE" id="awscdk-resources-mongodbatlas.CfnClusterPropsEncryptionAtRestProvider.NONE"></a>

NONE.

---


### CfnDatabaseUserPropsAwsiamType <a name="CfnDatabaseUserPropsAwsiamType" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType"></a>

Human-readable label that indicates whether the new database user authenticates with the Amazon Web Services (AWS) Identity and Access Management (IAM) credentials associated with the user or the user's role.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType.NONE">NONE</a></code> | NONE. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType.USER">USER</a></code> | USER. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType.ROLE">ROLE</a></code> | ROLE. |

---

##### `NONE` <a name="NONE" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType.NONE"></a>

NONE.

---


##### `USER` <a name="USER" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType.USER"></a>

USER.

---


##### `ROLE` <a name="ROLE" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsAwsiamType.ROLE"></a>

ROLE.

---


### CfnDatabaseUserPropsLdapAuthType <a name="CfnDatabaseUserPropsLdapAuthType" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType"></a>

Method by which the provided username is authenticated.

If no value is given, Atlas uses the default value of NONE.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType.NONE">NONE</a></code> | NONE. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType.USER">USER</a></code> | USER. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType.GROUP">GROUP</a></code> | GROUP. |

---

##### `NONE` <a name="NONE" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType.NONE"></a>

NONE.

---


##### `USER` <a name="USER" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType.USER"></a>

USER.

---


##### `GROUP` <a name="GROUP" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsLdapAuthType.GROUP"></a>

GROUP.

---


### CfnDatabaseUserPropsX509Type <a name="CfnDatabaseUserPropsX509Type" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type"></a>

Method that briefs who owns the certificate provided.

If no value is given while using X509Type, Atlas uses the default value of MANAGED.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type.NONE">NONE</a></code> | NONE. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type.MANAGED">MANAGED</a></code> | MANAGED. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type.CUSTOMER">CUSTOMER</a></code> | CUSTOMER. |

---

##### `NONE` <a name="NONE" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type.NONE"></a>

NONE.

---


##### `MANAGED` <a name="MANAGED" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type.MANAGED"></a>

MANAGED.

---


##### `CUSTOMER` <a name="CUSTOMER" id="awscdk-resources-mongodbatlas.CfnDatabaseUserPropsX509Type.CUSTOMER"></a>

CUSTOMER.

---


### CfnThirdPartyIntegrationPropsScheme <a name="CfnThirdPartyIntegrationPropsScheme" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsScheme"></a>

Security Scheme to apply to HyperText Transfer Protocol (HTTP) traffic between Prometheus and MongoDB Cloud.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsScheme.HTTP">HTTP</a></code> | http. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsScheme.HTTPS">HTTPS</a></code> | https. |

---

##### `HTTP` <a name="HTTP" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsScheme.HTTP"></a>

http.

---


##### `HTTPS` <a name="HTTPS" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsScheme.HTTPS"></a>

https.

---


### CfnThirdPartyIntegrationPropsServiceDiscovery <a name="CfnThirdPartyIntegrationPropsServiceDiscovery" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsServiceDiscovery"></a>

Desired method to discover the Prometheus service.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsServiceDiscovery.HTTP">HTTP</a></code> | http. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsServiceDiscovery.FILE">FILE</a></code> | file. |

---

##### `HTTP` <a name="HTTP" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsServiceDiscovery.HTTP"></a>

http.

---


##### `FILE` <a name="FILE" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsServiceDiscovery.FILE"></a>

file.

---


### CfnThirdPartyIntegrationPropsType <a name="CfnThirdPartyIntegrationPropsType" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType"></a>

Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud.

The value must match the third-party service integration type.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.PAGER_DUTY">PAGER_DUTY</a></code> | PAGER_DUTY. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.MICROSOFT_TEAMS">MICROSOFT_TEAMS</a></code> | MICROSOFT_TEAMS. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.SLACK">SLACK</a></code> | SLACK. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.DATADOG">DATADOG</a></code> | DATADOG. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.OPS_GENIE">OPS_GENIE</a></code> | OPS_GENIE. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.VICTOR_OPS">VICTOR_OPS</a></code> | VICTOR_OPS. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.WEBHOOK">WEBHOOK</a></code> | WEBHOOK. |
| <code><a href="#awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.PROMETHEUS">PROMETHEUS</a></code> | PROMETHEUS. |

---

##### `PAGER_DUTY` <a name="PAGER_DUTY" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.PAGER_DUTY"></a>

PAGER_DUTY.

---


##### `MICROSOFT_TEAMS` <a name="MICROSOFT_TEAMS" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.MICROSOFT_TEAMS"></a>

MICROSOFT_TEAMS.

---


##### `SLACK` <a name="SLACK" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.SLACK"></a>

SLACK.

---


##### `DATADOG` <a name="DATADOG" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.DATADOG"></a>

DATADOG.

---


##### `OPS_GENIE` <a name="OPS_GENIE" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.OPS_GENIE"></a>

OPS_GENIE.

---


##### `VICTOR_OPS` <a name="VICTOR_OPS" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.VICTOR_OPS"></a>

VICTOR_OPS.

---


##### `WEBHOOK` <a name="WEBHOOK" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.WEBHOOK"></a>

WEBHOOK.

---


##### `PROMETHEUS` <a name="PROMETHEUS" id="awscdk-resources-mongodbatlas.CfnThirdPartyIntegrationPropsType.PROMETHEUS"></a>

PROMETHEUS.

---


### DatadogRegion <a name="DatadogRegion" id="awscdk-resources-mongodbatlas.DatadogRegion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogRegion.US">US</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogRegion.EU">EU</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogRegion.US3">US3</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.DatadogRegion.US5">US5</a></code> | *No description.* |

---

##### `US` <a name="US" id="awscdk-resources-mongodbatlas.DatadogRegion.US"></a>

---


##### `EU` <a name="EU" id="awscdk-resources-mongodbatlas.DatadogRegion.EU"></a>

---


##### `US3` <a name="US3" id="awscdk-resources-mongodbatlas.DatadogRegion.US3"></a>

---


##### `US5` <a name="US5" id="awscdk-resources-mongodbatlas.DatadogRegion.US5"></a>

---


### PagerDutyRegion <a name="PagerDutyRegion" id="awscdk-resources-mongodbatlas.PagerDutyRegion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyRegion.US">US</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.PagerDutyRegion.EU">EU</a></code> | *No description.* |

---

##### `US` <a name="US" id="awscdk-resources-mongodbatlas.PagerDutyRegion.US"></a>

---


##### `EU` <a name="EU" id="awscdk-resources-mongodbatlas.PagerDutyRegion.EU"></a>

---


### ScopeDefinitionType <a name="ScopeDefinitionType" id="awscdk-resources-mongodbatlas.ScopeDefinitionType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.ScopeDefinitionType.CLUSTER">CLUSTER</a></code> | CLUSTER. |
| <code><a href="#awscdk-resources-mongodbatlas.ScopeDefinitionType.DATA_LAKE">DATA_LAKE</a></code> | DATA_LAKE. |

---

##### `CLUSTER` <a name="CLUSTER" id="awscdk-resources-mongodbatlas.ScopeDefinitionType.CLUSTER"></a>

CLUSTER.

---


##### `DATA_LAKE` <a name="DATA_LAKE" id="awscdk-resources-mongodbatlas.ScopeDefinitionType.DATA_LAKE"></a>

DATA_LAKE.

---

