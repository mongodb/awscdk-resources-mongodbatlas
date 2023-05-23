export temp_atlas_url=`aws cloudformation --region us-east-1 describe-stacks --stack-name AtlasIntegInfraStack --query "Stacks[0].Outputs[0].OutputValue"`
export temp_atlas_password=`aws cloudformation --region us-east-1 describe-stacks --stack-name AtlasIntegInfraStack --query "Stacks[0].Outputs[1].OutputValue"`
export temp_atlas_username=`aws cloudformation --region us-east-1 describe-stacks --stack-name AtlasIntegInfraStack --query "Stacks[0].Outputs[2].OutputValue"`

export atlas_url=`echo $temp_atlas_url | cut -c 16-| tr -d '"'`
export atlas_username=`echo $temp_atlas_username | tr -d '"'`
export atlas_password=`echo $temp_atlas_password | tr -d '"'`

export ATLAS_URI="mongodb+srv://${atlas_username}:${atlas_password}@${atlas_url}"

npm run start &