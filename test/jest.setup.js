// Disable aws-cdk-lib's built-in CloudFormation template validator (2.262.0+).
// It runs a WASM Rego pass inside every app.synth(), which Template.fromStack() triggers.
// See https://github.com/aws/aws-cdk/issues/38378.
process.env.CDK_VALIDATION = "false";
