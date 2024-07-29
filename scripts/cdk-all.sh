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

# This shell script can be use to generate all L1 CDK Constructs.
# The script calls cdk.sh for each resource.
#
# How to use it: ./scripts/cdk-all.sh

set -euo pipefail

dir="src/l1-resources"

for subdir in "${dir}"/*/; do
    if [ -d "${subdir}" ]; then
        resource=$(basename "${subdir}")
        ./scripts/cdk.sh "${resource}"
    fi
done
