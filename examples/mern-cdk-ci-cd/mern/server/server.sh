#!/bin/bash

temp_atlas_url=$(aws cloudformation --region us-east-1 describe-stacks --stack-name AtlasIntegInfraStack --query "Stacks[0].Outputs[0].OutputValue")
temp_atlas_password=$(aws cloudformation --region us-east-1 describe-stacks --stack-name AtlasIntegInfraStack --query "Stacks[0].Outputs[1].OutputValue")
temp_atlas_username=$(aws cloudformation --region us-east-1 describe-stacks --stack-name AtlasIntegInfraStack --query "Stacks[0].Outputs[2].OutputValue")

atlas_url=$(echo $temp_atlas_url | cut -c 16-| tr -d '"')
atlas_username=$(echo $temp_atlas_username | tr -d '"')
atlas_password=$(echo $temp_atlas_password | tr -d '"')

ATLAS_URI="mongodb+srv://${atlas_username}:${atlas_password}@${atlas_url}"

export temp_atlas_url
export temp_atlas_password
export temp_atlas_username
export atlas_url
export atlas_username
export atlas_password
export ATLAS_URI

npm run start &