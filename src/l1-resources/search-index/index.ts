// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Returns, adds, edits, and removes Atlas Search indexes. Also returns and updates user-defined analyzers.
 *
 * @schema CfnSearchIndexProps
 */
export interface CfnSearchIndexProps {
  /**
   * Specific pre-defined method chosen to convert database field text into searchable words. This conversion reduces the text of fields into the smallest units of text. These units are called a **term** or **token**. This process, known as tokenization, involves a variety of changes made to the text in fields:
   *
   * - extracting words
   * - removing punctuation
   * - removing accents
   * - changing to lowercase
   * - removing common words
   * - reducing words to their root form (stemming)
   * - changing words to their base form (lemmatization)
   * MongoDB Cloud uses the selected process to build the Atlas Search index.
   *
   * @schema CfnSearchIndexProps#Analyzer
   */
  readonly analyzer?: string;

  /**
   * List of user-defined methods to convert database field text into searchable words.
   *
   * @schema CfnSearchIndexProps#Analyzers
   */
  readonly analyzers?: ApiAtlasFtsAnalyzersViewManual[];

  /**
   * The profile is defined in AWS Secret manager. See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).
   *
   * @schema CfnSearchIndexProps#Profile
   */
  readonly profile?: string;

  /**
   * Name of the cluster that contains the database and collection with one or more Application Search indexes.
   *
   * @schema CfnSearchIndexProps#ClusterName
   */
  readonly clusterName: string;

  /**
   * Human-readable label that identifies the collection that contains one or more Atlas Search indexes.
   *
   * @schema CfnSearchIndexProps#CollectionName
   */
  readonly collectionName: string;

  /**
   * Human-readable label that identifies the database that contains the collection with one or more Atlas Search indexes.
   *
   * @schema CfnSearchIndexProps#Database
   */
  readonly database: string;

  /**
   * Unique 24-hexadecimal digit string that identifies your project.
   *
   * @schema CfnSearchIndexProps#ProjectId
   */
  readonly projectId?: string;

  /**
   * Index specifications for the collection's fields.
   *
   * @schema CfnSearchIndexProps#Mappings
   */
  readonly mappings?: ApiAtlasFtsMappingsViewManual;

  /**
   * Human-readable label that identifies this index. Within each namespace, names of all indexes in the namespace must be unique.
   *
   * @schema CfnSearchIndexProps#Name
   */
  readonly name?: string;

  /**
   * Type of index: **search** or **vectorSearch**. Default type is **search**.
   *
   * @schema CfnSearchIndexProps#Type
   */
  readonly type?: string;

  /**
   * Method applied to identify words when searching this index.
   *
   * @schema CfnSearchIndexProps#SearchAnalyzer
   */
  readonly searchAnalyzer?: string;

  /**
   * Rule sets that map words to their synonyms in this index.
   *
   * @schema CfnSearchIndexProps#Synonyms
   */
  readonly synonyms?: ApiAtlasFtsSynonymMappingDefinitionView[];

  /**
   * Array of [Fields](https://www.mongodb.com/docs/atlas/atlas-search/field-types/knn-vector/#std-label-fts-data-types-knn-vector) to configure this vectorSearch index. Stringify json representation of field with types and properties. Required for vector indexes. It must contain at least one **vector** type field.
   *
   * @schema CfnSearchIndexProps#Fields
   */
  readonly fields?: string;
}

/**
 * Converts an object of type 'CfnSearchIndexProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnSearchIndexProps(
  obj: CfnSearchIndexProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Analyzer: obj.analyzer,
    Analyzers: obj.analyzers?.map((y) =>
      toJson_ApiAtlasFtsAnalyzersViewManual(y)
    ),
    Profile: obj.profile,
    ClusterName: obj.clusterName,
    CollectionName: obj.collectionName,
    Database: obj.database,
    ProjectId: obj.projectId,
    Mappings: toJson_ApiAtlasFtsMappingsViewManual(obj.mappings),
    Name: obj.name,
    Type: obj.type,
    SearchAnalyzer: obj.searchAnalyzer,
    Synonyms: obj.synonyms?.map((y) =>
      toJson_ApiAtlasFtsSynonymMappingDefinitionView(y)
    ),
    Fields: obj.fields,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiAtlasFTSAnalyzersViewManual
 */
export interface ApiAtlasFtsAnalyzersViewManual {
  /**
   * Filters that examine text one character at a time and perform filtering operations.
   *
   * @schema ApiAtlasFTSAnalyzersViewManual#CharFilters
   */
  readonly charFilters?: string[];

  /**
   * Human-readable name that identifies the custom analyzer. Names must be unique within an index, and must not start with any of the following strings:
   * - `lucene.`
   * - `builtin.`
   * - `mongodb.`
   *
   * @schema ApiAtlasFTSAnalyzersViewManual#Name
   */
  readonly name?: string;

  /**
   * Filter that performs operations such as:
   *
   * - Stemming, which reduces related words, such as "talking", "talked", and "talks" to their root word "talk".
   *
   * - Redaction, the removal of sensitive information from public documents.
   *
   * @schema ApiAtlasFTSAnalyzersViewManual#TokenFilters
   */
  readonly tokenFilters?: string[];

  /**
   * Tokenizer that you want to use to create tokens. Tokens determine how Atlas Search splits up text into discrete chunks for indexing.
   *
   * @schema ApiAtlasFTSAnalyzersViewManual#Tokenizer
   */
  readonly tokenizer?: ApiAtlasFtsAnalyzersTokenizer;
}

/**
 * Converts an object of type 'ApiAtlasFtsAnalyzersViewManual' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiAtlasFtsAnalyzersViewManual(
  obj: ApiAtlasFtsAnalyzersViewManual | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    CharFilters: obj.charFilters?.map((y) => y),
    Name: obj.name,
    TokenFilters: obj.tokenFilters?.map((y) => y),
    Tokenizer: toJson_ApiAtlasFtsAnalyzersTokenizer(obj.tokenizer),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiAtlasFTSMappingsViewManual
 */
export interface ApiAtlasFtsMappingsViewManual {
  /**
   * Flag that indicates whether the index uses dynamic or static mappings. Required for search indexes if **mappings.fields** is omitted.
   *
   * @schema ApiAtlasFTSMappingsViewManual#Dynamic
   */
  readonly dynamic?: boolean;

  /**
   * One or more field specifications for the Atlas Search index. Stringify json representation of field with types and properties. Required for search indexes if **mappings.dynamic** is omitted or set to **false**.
   *
   * @schema ApiAtlasFTSMappingsViewManual#Fields
   */
  readonly fields?: string;
}

/**
 * Converts an object of type 'ApiAtlasFtsMappingsViewManual' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiAtlasFtsMappingsViewManual(
  obj: ApiAtlasFtsMappingsViewManual | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Dynamic: obj.dynamic,
    Fields: obj.fields,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ApiAtlasFTSSynonymMappingDefinitionView
 */
export interface ApiAtlasFtsSynonymMappingDefinitionView {
  /**
   * Specific pre-defined method chosen to apply to the synonyms to be searched.
   *
   * @schema ApiAtlasFTSSynonymMappingDefinitionView#Analyzer
   */
  readonly analyzer: string;

  /**
   * Human-readable label that identifies the synonym definition. Each **synonym.name** must be unique within the same index definition.
   *
   * @schema ApiAtlasFTSSynonymMappingDefinitionView#Name
   */
  readonly name: string;

  /**
   * Data set that stores the mapping one or more words map to one or more synonyms of those words.
   *
   * @schema ApiAtlasFTSSynonymMappingDefinitionView#Source
   */
  readonly source: SynonymSource;
}

/**
 * Converts an object of type 'ApiAtlasFtsSynonymMappingDefinitionView' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiAtlasFtsSynonymMappingDefinitionView(
  obj: ApiAtlasFtsSynonymMappingDefinitionView | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Analyzer: obj.analyzer,
    Name: obj.name,
    Source: toJson_SynonymSource(obj.source),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * Tokenizer that you want to use to create tokens. Tokens determine how Atlas Search splits up text into discrete chunks for indexing.
 *
 * @schema ApiAtlasFTSAnalyzersTokenizer
 */
export interface ApiAtlasFtsAnalyzersTokenizer {
  /**
   * Characters to include in the longest token that Atlas Search creates.
   *
   * @schema ApiAtlasFTSAnalyzersTokenizer#MaxGram
   */
  readonly maxGram?: number;

  /**
   * Characters to include in the shortest token that Atlas Search creates.
   *
   * @schema ApiAtlasFTSAnalyzersTokenizer#MinGram
   */
  readonly minGram?: number;

  /**
   * Human-readable label that identifies this tokenizer type.
   *
   * @schema ApiAtlasFTSAnalyzersTokenizer#Type
   */
  readonly type?: string;

  /**
   * Index of the character group within the matching expression to extract into tokens. Use `0` to extract all character groups.
   *
   * @schema ApiAtlasFTSAnalyzersTokenizer#Group
   */
  readonly group?: number;

  /**
   * Regular expression to match against.
   *
   * @schema ApiAtlasFTSAnalyzersTokenizer#Pattern
   */
  readonly pattern?: string;

  /**
   * Maximum number of characters in a single token. Tokens greater than this length are split at this length into multiple tokens.
   *
   * @schema ApiAtlasFTSAnalyzersTokenizer#MaxTokenLength
   */
  readonly maxTokenLength?: number;
}

/**
 * Converts an object of type 'ApiAtlasFtsAnalyzersTokenizer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ApiAtlasFtsAnalyzersTokenizer(
  obj: ApiAtlasFtsAnalyzersTokenizer | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    MaxGram: obj.maxGram,
    MinGram: obj.minGram,
    Type: obj.type,
    Group: obj.group,
    Pattern: obj.pattern,
    MaxTokenLength: obj.maxTokenLength,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SynonymSource
 */
export interface SynonymSource {
  /**
   * Human-readable label that identifies the MongoDB collection that stores words and their applicable synonyms.
   *
   * @schema SynonymSource#Collection
   */
  readonly collection: string;
}

/**
 * Converts an object of type 'SynonymSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SynonymSource(
  obj: SynonymSource | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Collection: obj.collection,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::SearchIndex`
 *
 * @cloudformationResource MongoDB::Atlas::SearchIndex
 * @stability external
 */
export class CfnSearchIndex extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME = "MongoDB::Atlas::SearchIndex";

  /**
   * Resource props.
   */
  public readonly props: CfnSearchIndexProps;

  /**
   * Attribute `MongoDB::Atlas::SearchIndex.IndexId`
   */
  public readonly attrIndexId: string;
  /**
   * Attribute `MongoDB::Atlas::SearchIndex.Status`
   */
  public readonly attrStatus: string;

  /**
   * Create a new `MongoDB::Atlas::SearchIndex`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnSearchIndexProps
  ) {
    super(scope, id, {
      type: CfnSearchIndex.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnSearchIndexProps(props)!,
    });

    this.props = props;

    this.attrIndexId = cdk.Token.asString(this.getAtt("IndexId"));
    this.attrStatus = cdk.Token.asString(this.getAtt("Status"));
  }
}
