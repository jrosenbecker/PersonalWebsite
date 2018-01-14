interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'Fq6UZNiGych1YOzN0z5mPas8gd5TOh1K',
    CLIENT_DOMAIN: 'joerosenbecker.auth0.com',
    AUDIENCE: 'https://joerosenbecker.com',
    REDIRECT: 'http://localhost:3000/callback',
    SCOPE: 'openid profile email'
};