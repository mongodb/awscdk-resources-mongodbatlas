import * as cdk from "aws-cdk-lib";
import {
  CfnDataLakePipeline,
  CfnDataLakePipelineProps,
  Sink,
  Source,
} from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "data-lake-pipeline", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const sink: Sink = {
  partitionFields: [
    {
      fieldName: "testpartition2",
      order: 0,
    },
  ],
};
const source: Source = {
  clusterName: "testclusterdatalakepipeline",
  collectionName: "testcollection3",
  databaseName: "testdatabase4",
};
const transform = [
  {
    field: "testtransformFeild",
    type: "EXCLUDE",
  },
];
const datalakepipelineProps: CfnDataLakePipelineProps = {
  profile: "default",
  name: "testdatalakepipeline1",
  projectId: "64f65e99e0fe146ac753361f",
  sink: sink,
  source: source,
  transformations: transform,
};

new CfnDataLakePipeline(stack, "data-lake-pipeline", datalakepipelineProps);
