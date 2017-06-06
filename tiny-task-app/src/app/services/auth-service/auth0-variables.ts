interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'WCqZCPIb7LQzup2tz-RKh-jurybqDAbL',
  domain: 'tinytask.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};