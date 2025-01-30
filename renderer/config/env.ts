import { loadEnvConfig } from '../utils/env';

export const ENV = {
    AWS_ACCESS_KEY_ID: loadEnvConfig().AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: loadEnvConfig().AWS_SECRET_ACCESS_KEY,
    AWS_REGION: loadEnvConfig().AWS_REGION,
    AWS_BUCKET_NAME: loadEnvConfig().AWS_BUCKET_NAME,
    // Cognito Configuration
    COGNITO_USER_POOL_ID: loadEnvConfig().COGNITO_USER_POOL_ID,
    COGNITO_USER_POOL_CLIENT_ID: loadEnvConfig().COGNITO_USER_POOL_CLIENT_ID,
    COGNITO_AUTHENTICATION_FLOW_TYPE: loadEnvConfig().COGNITO_AUTHENTICATION_FLOW_TYPE
} as const;