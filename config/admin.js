module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6cea2d030a6fe5fbadc2843096e4dd93'),
  },
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
});
