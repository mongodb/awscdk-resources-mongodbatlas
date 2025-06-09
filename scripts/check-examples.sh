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

# This shell script creates a project with L1, L2 and L3 examples and builds it.
#
# How to use it: ./scripts/check-examples.sh

set -euo pipefail

rm -rf examples-bin
mkdir examples-bin
cd examples-bin

cdk init app --language typescript
npm install aws-cdk-lib@2.200.1

cp ../examples/l1-resources/* .
cp ../examples/l2-resources/* .
cp ../examples/l3-resources/* .

cp ../dist/js/awscdk-resources-mongodbatlas@0.0.0.jsii.tgz .
npm install --save file:awscdk-resources-mongodbatlas@0.0.0.jsii.tgz

npm run build
