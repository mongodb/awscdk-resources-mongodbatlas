#!/bin/bash

# Reference: .cursor/rules - be surgical, only output PURLs, use jq for JSON parsing

if ! command -v jq &> /dev/null; then
  echo "jq is required but not installed. Please install jq to use this script."
  exit 1
fi

mkdir -p compliance

PKG_JSON=package.json

# Output all npm dependencies, devDependencies, and peerDependencies as PURLs to compliance/purls.txt
yq -r --output-format json '.dependencies | to_entries | .[] |  "pkg:npm/" + .key + "@" + .value' package.json > compliance/purls.txt
yq -r --output-format json '.devDependencies | to_entries | .[] |  "pkg:npm/" + .key + "@" + .value' package.json >> compliance/purls.txt
yq -r --output-format json '.peerDependencies | to_entries | .[] |  "pkg:npm/" + .key + "@" + .value' package.json >> compliance/purls.txt
