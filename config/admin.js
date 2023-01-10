module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '16IA0zzEUyszIwSt+DoZpQ=='),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6cea2d030a6fe5fbadc2843096e4dd93'),
  },
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
});
