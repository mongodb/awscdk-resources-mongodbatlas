#!/bin/bash

# Copyright 2023 MongoDB Inc
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
# How to use it:
#   1. CDK L1:  ./cdk.sh "<RESOURCE NAME>" l1

set -euo pipefail

_print_usage() {
	echo
	echo 'Usage:'
	echo './cdk.sh   "<RESOURCE NAME>"'
	echo
	echo 'Example:'
	echo './cdk.sh cluster'
	echo
}


if [ "$#" -ne 1 ]; then
	echo "Error: please provide the resource name"
	_print_usage
	exit 1
fi

script_dir="$(cd "$(dirname "$0")" && pwd)"
root_dir="$(cd "${script_dir}/.." && pwd)"

resource=$1
echo "Generating L1 CDK resource"
dir="${root_dir}/submodules/mongodbatlas-cloudformation-resources/cfn-resources/${resource}"


for file in "${dir}"/mongodb-atlas-*.json; do
	if [[ -f $file ]]; then
		src=$(jq -r '.typeName' "${file}")
		echo "generating for $src"
		path=$(basename "${dir}")

		if [ -f l1-resources/"${path}"/src/index.ts ]; then
			rm -rf l1-resources/"${path}"/src/*.ts
		fi

                # NOTE: known_issue MODULE_NOT_FOUND error.
		cdk-import cfn -l typescript -s "${file}" -o "src/l1-resources/${path}" "${src}"
		# need rename resource file to index.ts file
		mv "src/l1-resources/${path}/mongodb-atlas-${path//-/}.ts" "src/l1-resources/${path}/index.ts"
	fi
done

echo "Done"
