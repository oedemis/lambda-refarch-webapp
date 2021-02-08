// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "59uuetf126qpusd45v1h6aoec9",     // CognitoClientID
  "api_base_url": "https://36cld1o7zb.execute-api.eu-central-1.amazonaws.com/", // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverlesstodoapp.auth.eu-central-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1z8ud52li8lix.amplifyapp.com"                                      // AmplifyURL
};

export default config;
