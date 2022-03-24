/**
 * CONFIG file, either loaded via .env file or system ENV
 */
const { MONGO_URL_TEST, SPOTIFY_TOKEN, CACHE_MINS } = process.env;
const config = {
  MONGO_URL: MONGO_URL_TEST || 'mongodb://localhost:27018/weather-test',
  DEBUG_MONGO: false,
  NODE_HOST: 'localhost',
  NODE_PORT: 3000,
  SPOTIFY_TOKEN,
  CACHE_MINS: CACHE_MINS || 5,
  LOGTAIL_TOKEN: 'xxxxx',
  PROJECT_NAME: 'TRACKS SERVICE',
  TOKEN_SECRET: 'token_test',
  TOKEN_SECRET_ADMIN: 'admin_token_test',
  SENTRY: 'https://xxx@xxx.ingest.sentry.io/xxx',
};

export default config;
