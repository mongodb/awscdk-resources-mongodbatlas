#!/bin/bash

# Copyright 2024 MongoDB Inc
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# This shell script can be use to generate one L1 CDK Construct.
# The script uses the CFN template to generate the CDK resource.
#
# How to use it: ./scripts/cdk.sh "<RESOURCE NAME>"

set -euo pipefail

_print_usage() {
	echo
	echo 'Usage:'
	echo './scripts/cdk.sh "<RESOURCE NAME>"'
	echo
	echo 'Example:'
	echo './scripts/cdk.sh database-user'
	echo
}

if [ "$#" -ne 1 ]; then
	echo "Error: please provide the resource name"
	_print_usage
	exit 1
fi

resource=$1
resourceNoDashes=${resource//-/}
mainFileRoot="mongodb-atlas-${resourceNoDashes}"
temp_dir=$(mktemp -d)
trap 'rm -rf "$temp_dir"' EXIT # temp dir cleanup when script exits
resourceHttp="https://raw.githubusercontent.com/mongodb/mongodbatlas-cloudformation-resources/master/cfn-resources/${resource}/${mainFileRoot}.json" 
resourceTemp="${temp_dir}/${mainFileRoot}.json"

echo "Generating L1 CDK resource: ${resource}, resourceNoDashes: ${resourceNoDashes}, resourceHttp: ${resourceHttp}"
curl  -sSfL -o "${resourceTemp}" "${resourceHttp}"
resourceType=$(jq -r '.typeName' "${resourceTemp}")
cdk-import cfn -l typescript -s "${resourceTemp}" -o "src/l1-resources/${resource}" "${resourceType}"

# Rename resource file to index.ts file
dest="src/l1-resources/${resource}/index.ts"
mv "src/l1-resources/${resource}/${mainFileRoot}.ts" "${dest}"
python "./scripts/rename_in_file.py" "${dest}"

echo
echo "L1 CDK resource generated succesfully: ${resource}, CFN type: ${resourceType}"
