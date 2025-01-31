export const loadEnvConfig = () => {
    return {
        AWS_ACCESS_KEY_ID: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
        AWS_SECRET_ACCESS_KEY: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || '',
        AWS_REGION: process.env.NEXT_PUBLIC_AWS_REGION || '',
        AWS_BUCKET_NAME: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME || '',
        // Cognito Configuration
        COGNITO_USER_POOL_ID: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || '',
        COGNITO_USER_POOL_CLIENT_ID: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || '',
        COGNITO_AUTHENTICATION_FLOW_TYPE: process.env.NEXT_PUBLIC_COGNITO_AUTHENTICATION_FLOW_TYPE || 'USER_SRP_AUTH'
    };
};