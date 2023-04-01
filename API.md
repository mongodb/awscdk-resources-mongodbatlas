# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AtlasBasic <a name="AtlasBasic" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.Initializer"></a>

```typescript
import { atlasBasic } from 'awscdk-resources-mongodbatlas'

new atlasBasic.AtlasBasic(scope: Construct, id: string, props: AtlasBasicProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.Initializer.parameter.props">props</a></code> | <code>awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.Initializer.parameter.props"></a>

- *Type:* awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.isConstruct"></a>

```typescript
import { atlasBasic } from 'awscdk-resources-mongodbatlas'

atlasBasic.AtlasBasic.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.property.ipAccessList">ipAccessList</a></code> | <code>@mongodbatlas-awscdk/project-ip-access-list.CfnProjectIpAccessList</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.property.mCluster">mCluster</a></code> | <code>@mongodbatlas-awscdk/cluster.CfnCluster</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.property.mDBUser">mDBUser</a></code> | <code>@mongodbatlas-awscdk/database-user.CfnDatabaseUser</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.property.mProject">mProject</a></code> | <code>@mongodbatlas-awscdk/project.CfnProject</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ipAccessList`<sup>Required</sup> <a name="ipAccessList" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.property.ipAccessList"></a>

```typescript
public readonly ipAccessList: CfnProjectIpAccessList;
```

- *Type:* @mongodbatlas-awscdk/project-ip-access-list.CfnProjectIpAccessList

---

##### `mCluster`<sup>Required</sup> <a name="mCluster" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.property.mCluster"></a>

```typescript
public readonly mCluster: CfnCluster;
```

- *Type:* @mongodbatlas-awscdk/cluster.CfnCluster

---

##### `mDBUser`<sup>Required</sup> <a name="mDBUser" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.property.mDBUser"></a>

```typescript
public readonly mDBUser: CfnDatabaseUser;
```

- *Type:* @mongodbatlas-awscdk/database-user.CfnDatabaseUser

---

##### `mProject`<sup>Required</sup> <a name="mProject" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasic.property.mProject"></a>

```typescript
public readonly mProject: CfnProject;
```

- *Type:* @mongodbatlas-awscdk/project.CfnProject

---


### AtlasBasicPrivateEndpoint <a name="AtlasBasicPrivateEndpoint" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.Initializer"></a>

```typescript
import { atlasBasicPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

new atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint(scope: Construct, id: string, props: AtlasBasicPrivateEndpointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.Initializer.parameter.props">props</a></code> | <code>awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.Initializer.parameter.props"></a>

- *Type:* awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.isConstruct"></a>

```typescript
import { atlasBasicPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.property.atlasBasic">atlasBasic</a></code> | <code>@mongodbatlas-awscdk/atlas-basic.AtlasBasic</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.property.privateEndpoint">privateEndpoint</a></code> | <code>@mongodbatlas-awscdk/private-endpoint.CfnPrivateEndpoint</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `atlasBasic`<sup>Required</sup> <a name="atlasBasic" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.property.atlasBasic"></a>

```typescript
public readonly atlasBasic: AtlasBasic;
```

- *Type:* @mongodbatlas-awscdk/atlas-basic.AtlasBasic

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpoint.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: CfnPrivateEndpoint;
```

- *Type:* @mongodbatlas-awscdk/private-endpoint.CfnPrivateEndpoint

---


### AtlasEncryptionAtRest <a name="AtlasEncryptionAtRest" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.Initializer"></a>

```typescript
import { encryptionAtRest } from 'awscdk-resources-mongodbatlas'

new encryptionAtRest.AtlasEncryptionAtRest(scope: Construct, id: string, props: AtlasEncryptionAtRestProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.Initializer.parameter.props">props</a></code> | <code>awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.Initializer.parameter.props"></a>

- *Type:* awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.isConstruct"></a>

```typescript
import { encryptionAtRest } from 'awscdk-resources-mongodbatlas'

encryptionAtRest.AtlasEncryptionAtRest.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.property.cfnEncryptionAtRest">cfnEncryptionAtRest</a></code> | <code>@mongodbatlas-awscdk/encryption-at-rest.CfnEncryptionAtRest</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnEncryptionAtRest`<sup>Required</sup> <a name="cfnEncryptionAtRest" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRest.property.cfnEncryptionAtRest"></a>

```typescript
public readonly cfnEncryptionAtRest: CfnEncryptionAtRest;
```

- *Type:* @mongodbatlas-awscdk/encryption-at-rest.CfnEncryptionAtRest

---


### AtlasEncryptionAtRestExpress <a name="AtlasEncryptionAtRestExpress" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.Initializer"></a>

```typescript
import { atlasEncryptionAtRestExpress } from 'awscdk-resources-mongodbatlas'

new atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress(scope: Construct, id: string, props: AtlasEncryptionAtRestExpressProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.Initializer.parameter.props">props</a></code> | <code>awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.Initializer.parameter.props"></a>

- *Type:* awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.isConstruct"></a>

```typescript
import { atlasEncryptionAtRestExpress } from 'awscdk-resources-mongodbatlas'

atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.property.encryptionAtRest">encryptionAtRest</a></code> | <code>@mongodbatlas-awscdk/encryption-at-rest.CfnEncryptionAtRest</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.property.accessList">accessList</a></code> | <code>@mongodbatlas-awscdk/project-ip-access-list.CfnProjectIpAccessList</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.property.cluster">cluster</a></code> | <code>@mongodbatlas-awscdk/cluster.CfnCluster</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.property.databaseUser">databaseUser</a></code> | <code>@mongodbatlas-awscdk/database-user.CfnDatabaseUser</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `encryptionAtRest`<sup>Required</sup> <a name="encryptionAtRest" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.property.encryptionAtRest"></a>

```typescript
public readonly encryptionAtRest: CfnEncryptionAtRest;
```

- *Type:* @mongodbatlas-awscdk/encryption-at-rest.CfnEncryptionAtRest

---

##### `accessList`<sup>Optional</sup> <a name="accessList" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.property.accessList"></a>

```typescript
public readonly accessList: CfnProjectIpAccessList;
```

- *Type:* @mongodbatlas-awscdk/project-ip-access-list.CfnProjectIpAccessList

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.property.cluster"></a>

```typescript
public readonly cluster: CfnCluster;
```

- *Type:* @mongodbatlas-awscdk/cluster.CfnCluster

---

##### `databaseUser`<sup>Optional</sup> <a name="databaseUser" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpress.property.databaseUser"></a>

```typescript
public readonly databaseUser: CfnDatabaseUser;
```

- *Type:* @mongodbatlas-awscdk/database-user.CfnDatabaseUser

---


### DatadogIntegration <a name="DatadogIntegration" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.Initializer"></a>

```typescript
import { thirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

new thirdPartyIntegration.DatadogIntegration(scope: Construct, id: string, props: DatadogIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.Initializer.parameter.props">props</a></code> | <code>awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.Initializer.parameter.props"></a>

- *Type:* awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.isConstruct"></a>

```typescript
import { thirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

thirdPartyIntegration.DatadogIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.property.cfnThirdPartyIntegration">cfnThirdPartyIntegration</a></code> | <code>@mongodbatlas-awscdk/third-party-integration.CfnThirdPartyIntegration</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnThirdPartyIntegration`<sup>Required</sup> <a name="cfnThirdPartyIntegration" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegration.property.cfnThirdPartyIntegration"></a>

```typescript
public readonly cfnThirdPartyIntegration: CfnThirdPartyIntegration;
```

- *Type:* @mongodbatlas-awscdk/third-party-integration.CfnThirdPartyIntegration

---


### MicrosoftTeamsIntegration <a name="MicrosoftTeamsIntegration" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.Initializer"></a>

```typescript
import { thirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

new thirdPartyIntegration.MicrosoftTeamsIntegration(scope: Construct, id: string, props: MicrosoftTeamsIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.Initializer.parameter.props">props</a></code> | <code>awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegrationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.Initializer.parameter.props"></a>

- *Type:* awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegrationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.isConstruct"></a>

```typescript
import { thirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

thirdPartyIntegration.MicrosoftTeamsIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.property.cfnThirdPartyIntegration">cfnThirdPartyIntegration</a></code> | <code>@mongodbatlas-awscdk/third-party-integration.CfnThirdPartyIntegration</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnThirdPartyIntegration`<sup>Required</sup> <a name="cfnThirdPartyIntegration" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegration.property.cfnThirdPartyIntegration"></a>

```typescript
public readonly cfnThirdPartyIntegration: CfnThirdPartyIntegration;
```

- *Type:* @mongodbatlas-awscdk/third-party-integration.CfnThirdPartyIntegration

---


### PagerDutyIntegration <a name="PagerDutyIntegration" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration"></a>

#### Initializers <a name="Initializers" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.Initializer"></a>

```typescript
import { thirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

new thirdPartyIntegration.PagerDutyIntegration(scope: Construct, id: string, props: PagerDutyIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.Initializer.parameter.props">props</a></code> | <code>awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.Initializer.parameter.props"></a>

- *Type:* awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.isConstruct"></a>

```typescript
import { thirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

thirdPartyIntegration.PagerDutyIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.property.cfnThirdPartyIntegration">cfnThirdPartyIntegration</a></code> | <code>@mongodbatlas-awscdk/third-party-integration.CfnThirdPartyIntegration</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnThirdPartyIntegration`<sup>Required</sup> <a name="cfnThirdPartyIntegration" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegration.property.cfnThirdPartyIntegration"></a>

```typescript
public readonly cfnThirdPartyIntegration: CfnThirdPartyIntegration;
```

- *Type:* @mongodbatlas-awscdk/third-party-integration.CfnThirdPartyIntegration

---


## Structs <a name="Structs" id="Structs"></a>

### AtlasBasicPrivateEndpointProps <a name="AtlasBasicPrivateEndpointProps" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps.Initializer"></a>

```typescript
import { atlasBasicPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

const atlasBasicPrivateEndpointProps: atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps.property.atlasBasicProps">atlasBasicProps</a></code> | <code>@mongodbatlas-awscdk/atlas-basic.AtlasBasicProps</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps.property.privateEndpointProps">privateEndpointProps</a></code> | <code>awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `atlasBasicProps`<sup>Required</sup> <a name="atlasBasicProps" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps.property.atlasBasicProps"></a>

```typescript
public readonly atlasBasicProps: AtlasBasicProps;
```

- *Type:* @mongodbatlas-awscdk/atlas-basic.AtlasBasicProps

---

##### `privateEndpointProps`<sup>Required</sup> <a name="privateEndpointProps" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps.property.privateEndpointProps"></a>

```typescript
public readonly privateEndpointProps: PrivateEndpointProps;
```

- *Type:* awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.AtlasBasicPrivateEndpointProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* us-east-1

---

### AtlasBasicProps <a name="AtlasBasicProps" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.Initializer"></a>

```typescript
import { atlasBasic } from 'awscdk-resources-mongodbatlas'

const atlasBasicProps: atlasBasic.AtlasBasicProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.property.clusterProps">clusterProps</a></code> | <code>awscdk-resources-mongodbatlas.atlasBasic.ClusterProps</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.property.projectProps">projectProps</a></code> | <code>awscdk-resources-mongodbatlas.atlasBasic.ProjectProps</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.property.dbUserProps">dbUserProps</a></code> | <code>awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.property.ipAccessListProps">ipAccessListProps</a></code> | <code>awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.property.profile">profile</a></code> | <code>string</code> | *No description.* |

---

##### `clusterProps`<sup>Required</sup> <a name="clusterProps" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.property.clusterProps"></a>

```typescript
public readonly clusterProps: ClusterProps;
```

- *Type:* awscdk-resources-mongodbatlas.atlasBasic.ClusterProps

---

##### `projectProps`<sup>Required</sup> <a name="projectProps" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.property.projectProps"></a>

```typescript
public readonly projectProps: ProjectProps;
```

- *Type:* awscdk-resources-mongodbatlas.atlasBasic.ProjectProps

---

##### `dbUserProps`<sup>Optional</sup> <a name="dbUserProps" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.property.dbUserProps"></a>

```typescript
public readonly dbUserProps: DatabaseUserProps;
```

- *Type:* awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps

---

##### `ipAccessListProps`<sup>Optional</sup> <a name="ipAccessListProps" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.property.ipAccessListProps"></a>

```typescript
public readonly ipAccessListProps: IpAccessListProps;
```

- *Type:* awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.atlasBasic.AtlasBasicProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

### AtlasEncryptionAtRestExpressProps <a name="AtlasEncryptionAtRestExpressProps" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.Initializer"></a>

```typescript
import { atlasEncryptionAtRestExpress } from 'awscdk-resources-mongodbatlas'

const atlasEncryptionAtRestExpressProps: atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.encryptionAtRest">encryptionAtRest</a></code> | <code>awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.accessList">accessList</a></code> | <code>@mongodbatlas-awscdk/atlas-basic.IpAccessListProps</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.cluster">cluster</a></code> | <code>@mongodbatlas-awscdk/atlas-basic.ClusterProps</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.databaseUser">databaseUser</a></code> | <code>@mongodbatlas-awscdk/atlas-basic.DatabaseUserProps</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.profile">profile</a></code> | <code>string</code> | *No description.* |

---

##### `encryptionAtRest`<sup>Required</sup> <a name="encryptionAtRest" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.encryptionAtRest"></a>

```typescript
public readonly encryptionAtRest: AtlasEncryptionAtRestProps;
```

- *Type:* awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `accessList`<sup>Optional</sup> <a name="accessList" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.accessList"></a>

```typescript
public readonly accessList: IpAccessListProps;
```

- *Type:* @mongodbatlas-awscdk/atlas-basic.IpAccessListProps

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.cluster"></a>

```typescript
public readonly cluster: ClusterProps;
```

- *Type:* @mongodbatlas-awscdk/atlas-basic.ClusterProps

---

##### `databaseUser`<sup>Optional</sup> <a name="databaseUser" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.databaseUser"></a>

```typescript
public readonly databaseUser: DatabaseUserProps;
```

- *Type:* @mongodbatlas-awscdk/atlas-basic.DatabaseUserProps

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestExpressProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

### AtlasEncryptionAtRestProps <a name="AtlasEncryptionAtRestProps" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps.Initializer"></a>

```typescript
import { atlasEncryptionAtRestExpress } from 'awscdk-resources-mongodbatlas'

const atlasEncryptionAtRestProps: atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps.property.customerMasterKeyId">customerMasterKeyId</a></code> | <code>string</code> | The AWS customer master key used to encrypt and decrypt the MongoDB master keys. |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps.property.roleId">roleId</a></code> | <code>string</code> | ID of an AWS IAM role authorized to manage an AWS customer master key. |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps.property.enabledEncryptionAtRest">enabledEncryptionAtRest</a></code> | <code>boolean</code> | Specifies whether Encryption at Rest is enabled for an Atlas project. |
| <code><a href="#awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps.property.region">region</a></code> | <code>string</code> | The AWS region in which the AWS customer master key exists. |

---

##### `customerMasterKeyId`<sup>Required</sup> <a name="customerMasterKeyId" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps.property.customerMasterKeyId"></a>

```typescript
public readonly customerMasterKeyId: string;
```

- *Type:* string

The AWS customer master key used to encrypt and decrypt the MongoDB master keys.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

ID of an AWS IAM role authorized to manage an AWS customer master key.

---

##### `enabledEncryptionAtRest`<sup>Optional</sup> <a name="enabledEncryptionAtRest" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps.property.enabledEncryptionAtRest"></a>

```typescript
public readonly enabledEncryptionAtRest: boolean;
```

- *Type:* boolean

Specifies whether Encryption at Rest is enabled for an Atlas project.

To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
Default Value: true

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.atlasEncryptionAtRestExpress.AtlasEncryptionAtRestProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region in which the AWS customer master key exists.

---

### AtlasEncryptionAtRestProps <a name="AtlasEncryptionAtRestProps" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.Initializer"></a>

```typescript
import { encryptionAtRest } from 'awscdk-resources-mongodbatlas'

const atlasEncryptionAtRestProps: encryptionAtRest.AtlasEncryptionAtRestProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.customerMasterKeyId">customerMasterKeyId</a></code> | <code>string</code> | The AWS customer master key used to encrypt and decrypt the MongoDB master keys. |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier of the Atlas project to which the user belongs. |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.roleId">roleId</a></code> | <code>string</code> | ID of an AWS IAM role authorized to manage an AWS customer master key. |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.enabled">enabled</a></code> | <code>boolean</code> | Specifies whether Encryption at Rest is enabled for an Atlas project. |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.profile">profile</a></code> | <code>string</code> | The profile is defined in AWS Secret manager. |
| <code><a href="#awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.region">region</a></code> | <code>string</code> | The AWS region in which the AWS customer master key exists. |

---

##### `customerMasterKeyId`<sup>Required</sup> <a name="customerMasterKeyId" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.customerMasterKeyId"></a>

```typescript
public readonly customerMasterKeyId: string;
```

- *Type:* string

The AWS customer master key used to encrypt and decrypt the MongoDB master keys.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique identifier of the Atlas project to which the user belongs.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

ID of an AWS IAM role authorized to manage an AWS customer master key.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Specifies whether Encryption at Rest is enabled for an Atlas project.

To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
Default Value: true

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The profile is defined in AWS Secret manager.

See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.encryptionAtRest.AtlasEncryptionAtRestProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region in which the AWS customer master key exists.

Default Value: US_EAST_1

---

### ClusterProps <a name="ClusterProps" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.Initializer"></a>

```typescript
import { atlasBasic } from 'awscdk-resources-mongodbatlas'

const clusterProps: atlasBasic.ClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.advancedSettings">advancedSettings</a></code> | <code>@mongodbatlas-awscdk/cluster.ProcessArgs</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.backupEnabled">backupEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.biConnector">biConnector</a></code> | <code>@mongodbatlas-awscdk/cluster.CfnClusterPropsBiConnector</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.connectionStrings">connectionStrings</a></code> | <code>@mongodbatlas-awscdk/cluster.ConnectionStrings</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>@mongodbatlas-awscdk/cluster.CfnClusterPropsEncryptionAtRestProvider</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.labels">labels</a></code> | <code>@mongodbatlas-awscdk/cluster.CfnClusterPropsLabels[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.paused">paused</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.pitEnabled">pitEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.replicationSpecs">replicationSpecs</a></code> | <code>@mongodbatlas-awscdk/cluster.AdvancedReplicationSpec[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.rootCertType">rootCertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | *No description.* |

---

##### `advancedSettings`<sup>Optional</sup> <a name="advancedSettings" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.advancedSettings"></a>

```typescript
public readonly advancedSettings: ProcessArgs;
```

- *Type:* @mongodbatlas-awscdk/cluster.ProcessArgs

---

##### `backupEnabled`<sup>Optional</sup> <a name="backupEnabled" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.backupEnabled"></a>

```typescript
public readonly backupEnabled: boolean;
```

- *Type:* boolean

---

##### `biConnector`<sup>Optional</sup> <a name="biConnector" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.biConnector"></a>

```typescript
public readonly biConnector: CfnClusterPropsBiConnector;
```

- *Type:* @mongodbatlas-awscdk/cluster.CfnClusterPropsBiConnector

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Optional</sup> <a name="connectionStrings" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: ConnectionStrings;
```

- *Type:* @mongodbatlas-awscdk/cluster.ConnectionStrings
- *Default:* REPLICASET

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `encryptionAtRestProvider`<sup>Optional</sup> <a name="encryptionAtRestProvider" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.encryptionAtRestProvider"></a>

```typescript
public readonly encryptionAtRestProvider: CfnClusterPropsEncryptionAtRestProvider;
```

- *Type:* @mongodbatlas-awscdk/cluster.CfnClusterPropsEncryptionAtRestProvider

---

##### `labels`<sup>Optional</sup> <a name="labels" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.labels"></a>

```typescript
public readonly labels: CfnClusterPropsLabels[];
```

- *Type:* @mongodbatlas-awscdk/cluster.CfnClusterPropsLabels[]

---

##### `mongoDbMajorVersion`<sup>Optional</sup> <a name="mongoDbMajorVersion" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.mongoDbMajorVersion"></a>

```typescript
public readonly mongoDbMajorVersion: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `paused`<sup>Optional</sup> <a name="paused" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.paused"></a>

```typescript
public readonly paused: boolean;
```

- *Type:* boolean
- *Default:* auto-generated

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean;
```

- *Type:* boolean

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `replicationSpecs`<sup>Optional</sup> <a name="replicationSpecs" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.replicationSpecs"></a>

```typescript
public readonly replicationSpecs: AdvancedReplicationSpec[];
```

- *Type:* @mongodbatlas-awscdk/cluster.AdvancedReplicationSpec[]

---

##### `rootCertType`<sup>Optional</sup> <a name="rootCertType" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.rootCertType"></a>

```typescript
public readonly rootCertType: string;
```

- *Type:* string

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean;
```

- *Type:* boolean

---

##### `versionReleaseSystem`<sup>Optional</sup> <a name="versionReleaseSystem" id="awscdk-resources-mongodbatlas.atlasBasic.ClusterProps.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

---

### DatabaseUserProps <a name="DatabaseUserProps" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.Initializer"></a>

```typescript
import { atlasBasic } from 'awscdk-resources-mongodbatlas'

const databaseUserProps: atlasBasic.DatabaseUserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.awsiamType">awsiamType</a></code> | <code>@mongodbatlas-awscdk/database-user.CfnDatabaseUserPropsAwsiamType</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.deleteAfterDate">deleteAfterDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.labels">labels</a></code> | <code>@mongodbatlas-awscdk/database-user.LabelDefinition[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.ldapAuthType">ldapAuthType</a></code> | <code>@mongodbatlas-awscdk/database-user.CfnDatabaseUserPropsLdapAuthType</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.roles">roles</a></code> | <code>@mongodbatlas-awscdk/database-user.RoleDefinition[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.scopes">scopes</a></code> | <code>@mongodbatlas-awscdk/database-user.ScopeDefinition[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.x509Type">x509Type</a></code> | <code>@mongodbatlas-awscdk/database-user.CfnDatabaseUserPropsX509Type</code> | *No description.* |

---

##### `awsiamType`<sup>Optional</sup> <a name="awsiamType" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.awsiamType"></a>

```typescript
public readonly awsiamType: CfnDatabaseUserPropsAwsiamType;
```

- *Type:* @mongodbatlas-awscdk/database-user.CfnDatabaseUserPropsAwsiamType

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `deleteAfterDate`<sup>Optional</sup> <a name="deleteAfterDate" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.deleteAfterDate"></a>

```typescript
public readonly deleteAfterDate: string;
```

- *Type:* string

---

##### `labels`<sup>Optional</sup> <a name="labels" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.labels"></a>

```typescript
public readonly labels: LabelDefinition[];
```

- *Type:* @mongodbatlas-awscdk/database-user.LabelDefinition[]
- *Default:* admin

---

##### `ldapAuthType`<sup>Optional</sup> <a name="ldapAuthType" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.ldapAuthType"></a>

```typescript
public readonly ldapAuthType: CfnDatabaseUserPropsLdapAuthType;
```

- *Type:* @mongodbatlas-awscdk/database-user.CfnDatabaseUserPropsLdapAuthType

---

##### `password`<sup>Optional</sup> <a name="password" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string
- *Default:* cdk-pwd

---

##### `roles`<sup>Optional</sup> <a name="roles" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.roles"></a>

```typescript
public readonly roles: RoleDefinition[];
```

- *Type:* @mongodbatlas-awscdk/database-user.RoleDefinition[]

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.scopes"></a>

```typescript
public readonly scopes: ScopeDefinition[];
```

- *Type:* @mongodbatlas-awscdk/database-user.ScopeDefinition[]

---

##### `username`<sup>Optional</sup> <a name="username" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string
- *Default:* cdk-user

---

##### `x509Type`<sup>Optional</sup> <a name="x509Type" id="awscdk-resources-mongodbatlas.atlasBasic.DatabaseUserProps.property.x509Type"></a>

```typescript
public readonly x509Type: CfnDatabaseUserPropsX509Type;
```

- *Type:* @mongodbatlas-awscdk/database-user.CfnDatabaseUserPropsX509Type

---

### DatadogIntegrationProps <a name="DatadogIntegrationProps" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps.Initializer"></a>

```typescript
import { thirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

const datadogIntegrationProps: thirdPartyIntegration.DatadogIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps.property.profile">profile</a></code> | <code>string</code> | Atlas API keys. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps.property.apiKey">apiKey</a></code> | <code>string</code> | Key that allows MongoDB Cloud to access your Datadog account. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps.property.region">region</a></code> | <code>awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion</code> | Two-letter code that indicates which regional URL MongoDB uses to access the Datadog API. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Atlas API keys.

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Key that allows MongoDB Cloud to access your Datadog account.

---

##### `region`<sup>Required</sup> <a name="region" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogIntegrationProps.property.region"></a>

```typescript
public readonly region: DatadogRegion;
```

- *Type:* awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion

Two-letter code that indicates which regional URL MongoDB uses to access the Datadog API.

---

### IpAccessListProps <a name="IpAccessListProps" id="awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps.Initializer"></a>

```typescript
import { atlasBasic } from 'awscdk-resources-mongodbatlas'

const ipAccessListProps: atlasBasic.IpAccessListProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps.property.accessList">accessList</a></code> | <code>@mongodbatlas-awscdk/project-ip-access-list.AccessListDefinition[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps.property.listOptions">listOptions</a></code> | <code>@mongodbatlas-awscdk/project-ip-access-list.ListOptions</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps.property.totalCount">totalCount</a></code> | <code>number</code> | *No description.* |

---

##### `accessList`<sup>Required</sup> <a name="accessList" id="awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps.property.accessList"></a>

```typescript
public readonly accessList: AccessListDefinition[];
```

- *Type:* @mongodbatlas-awscdk/project-ip-access-list.AccessListDefinition[]

---

##### `listOptions`<sup>Optional</sup> <a name="listOptions" id="awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps.property.listOptions"></a>

```typescript
public readonly listOptions: ListOptions;
```

- *Type:* @mongodbatlas-awscdk/project-ip-access-list.ListOptions

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string
- *Default:* allow-all

---

##### `totalCount`<sup>Optional</sup> <a name="totalCount" id="awscdk-resources-mongodbatlas.atlasBasic.IpAccessListProps.property.totalCount"></a>

```typescript
public readonly totalCount: number;
```

- *Type:* number

---

### MicrosoftTeamsIntegrationProps <a name="MicrosoftTeamsIntegrationProps" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegrationProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegrationProps.Initializer"></a>

```typescript
import { thirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

const microsoftTeamsIntegrationProps: thirdPartyIntegration.MicrosoftTeamsIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegrationProps.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegrationProps.property.profile">profile</a></code> | <code>string</code> | Atlas API keys. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegrationProps.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>string</code> | Endpoint web address of the Microsoft Teams webhook to which MongoDB Cloud sends notifications. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegrationProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegrationProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Atlas API keys.

---

##### `microsoftTeamsWebhookUrl`<sup>Required</sup> <a name="microsoftTeamsWebhookUrl" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.MicrosoftTeamsIntegrationProps.property.microsoftTeamsWebhookUrl"></a>

```typescript
public readonly microsoftTeamsWebhookUrl: string;
```

- *Type:* string

Endpoint web address of the Microsoft Teams webhook to which MongoDB Cloud sends notifications.

---

### PagerDutyIntegrationProps <a name="PagerDutyIntegrationProps" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps.Initializer"></a>

```typescript
import { thirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

const pagerDutyIntegrationProps: thirdPartyIntegration.PagerDutyIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps.property.profile">profile</a></code> | <code>string</code> | Atlas API keys. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps.property.region">region</a></code> | <code>awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyRegion</code> | PagerDuty region that indicates the API Uniform Resource Locator (URL) to use. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps.property.serviceKey">serviceKey</a></code> | <code>string</code> | Service key associated with your PagerDuty account. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Atlas API keys.

---

##### `region`<sup>Required</sup> <a name="region" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps.property.region"></a>

```typescript
public readonly region: PagerDutyRegion;
```

- *Type:* awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyRegion

PagerDuty region that indicates the API Uniform Resource Locator (URL) to use.

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyIntegrationProps.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

Service key associated with your PagerDuty account.

---

### PrivateEndpointProps <a name="PrivateEndpointProps" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.Initializer"></a>

```typescript
import { atlasBasicPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

const privateEndpointProps: atlasBasicPrivateEndpoint.PrivateEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.endpointServiceName">endpointServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.privateEndpoints">privateEndpoints</a></code> | <code>@mongodbatlas-awscdk/private-endpoint.PrivateEndpoint[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `endpointServiceName`<sup>Optional</sup> <a name="endpointServiceName" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.endpointServiceName"></a>

```typescript
public readonly endpointServiceName: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Optional</sup> <a name="errorMessage" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `privateEndpoints`<sup>Optional</sup> <a name="privateEndpoints" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.privateEndpoints"></a>

```typescript
public readonly privateEndpoints: PrivateEndpoint[];
```

- *Type:* @mongodbatlas-awscdk/private-endpoint.PrivateEndpoint[]

---

##### `region`<sup>Optional</sup> <a name="region" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Optional</sup> <a name="status" id="awscdk-resources-mongodbatlas.atlasBasicPrivateEndpoint.PrivateEndpointProps.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

### ProjectProps <a name="ProjectProps" id="awscdk-resources-mongodbatlas.atlasBasic.ProjectProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.Initializer"></a>

```typescript
import { atlasBasic } from 'awscdk-resources-mongodbatlas'

const projectProps: atlasBasic.ProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.clusterCount">clusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.projectApiKeys">projectApiKeys</a></code> | <code>@mongodbatlas-awscdk/project.ProjectApiKey[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.projectOwnerId">projectOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.projectSettings">projectSettings</a></code> | <code>@mongodbatlas-awscdk/project.ProjectSettings</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.projectTeams">projectTeams</a></code> | <code>@mongodbatlas-awscdk/project.ProjectTeam[]</code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.withDefaultAlertsSettings">withDefaultAlertsSettings</a></code> | <code>boolean</code> | *No description.* |

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string
- *Default:* auto-generated

---

##### `clusterCount`<sup>Optional</sup> <a name="clusterCount" id="awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.clusterCount"></a>

```typescript
public readonly clusterCount: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectApiKeys`<sup>Optional</sup> <a name="projectApiKeys" id="awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.projectApiKeys"></a>

```typescript
public readonly projectApiKeys: ProjectApiKey[];
```

- *Type:* @mongodbatlas-awscdk/project.ProjectApiKey[]

---

##### `projectOwnerId`<sup>Optional</sup> <a name="projectOwnerId" id="awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.projectOwnerId"></a>

```typescript
public readonly projectOwnerId: string;
```

- *Type:* string

---

##### `projectSettings`<sup>Optional</sup> <a name="projectSettings" id="awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.projectSettings"></a>

```typescript
public readonly projectSettings: ProjectSettings;
```

- *Type:* @mongodbatlas-awscdk/project.ProjectSettings

---

##### `projectTeams`<sup>Optional</sup> <a name="projectTeams" id="awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.projectTeams"></a>

```typescript
public readonly projectTeams: ProjectTeam[];
```

- *Type:* @mongodbatlas-awscdk/project.ProjectTeam[]

---

##### `withDefaultAlertsSettings`<sup>Optional</sup> <a name="withDefaultAlertsSettings" id="awscdk-resources-mongodbatlas.atlasBasic.ProjectProps.property.withDefaultAlertsSettings"></a>

```typescript
public readonly withDefaultAlertsSettings: boolean;
```

- *Type:* boolean

---

### ThirdPartyIntegrationProps <a name="ThirdPartyIntegrationProps" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationProps"></a>

#### Initializer <a name="Initializer" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationProps.Initializer"></a>

```typescript
import { thirdPartyIntegration } from 'awscdk-resources-mongodbatlas'

const thirdPartyIntegrationProps: thirdPartyIntegration.ThirdPartyIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationProps.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationProps.property.profile">profile</a></code> | <code>string</code> | Atlas API keys. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Atlas API keys.

---



## Enums <a name="Enums" id="Enums"></a>

### DatadogRegion <a name="DatadogRegion" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion.US">US</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion.EU">EU</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion.US3">US3</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion.US5">US5</a></code> | *No description.* |

---

##### `US` <a name="US" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion.US"></a>

---


##### `EU` <a name="EU" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion.EU"></a>

---


##### `US3` <a name="US3" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion.US3"></a>

---


##### `US5` <a name="US5" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.DatadogRegion.US5"></a>

---


### PagerDutyRegion <a name="PagerDutyRegion" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyRegion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyRegion.US">US</a></code> | *No description.* |
| <code><a href="#awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyRegion.EU">EU</a></code> | *No description.* |

---

##### `US` <a name="US" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyRegion.US"></a>

---


##### `EU` <a name="EU" id="awscdk-resources-mongodbatlas.thirdPartyIntegration.PagerDutyRegion.EU"></a>

---

