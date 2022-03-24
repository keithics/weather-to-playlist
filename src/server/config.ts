/**
 * CONFIG file, either loaded via .env file or system ENV
 */
const {
  DATABASE_URL,
  LOGTAIL_TOKEN,
  MONGO_DEBUG,
  NODE_HOST,
  NODE_PORT,
  SENTRY,
  CACHE_MINS,
  WEATHER_API,
  SPOTIFY_TOKEN,
} = process.env;

const config = {
  MONGO_URL: DATABASE_URL || 'mongodb://localhost:27018/weather',
  MONGO_DEBUG: MONGO_DEBUG || false,
  LOGTAIL_TOKEN: LOGTAIL_TOKEN || 'xxxxx',
  PROJECT_NAME: 'WEATHER SERVICE',
  NODE_HOST: NODE_HOST || 'localhost',
  NODE_PORT: NODE_PORT || 8080,
  CACHE_MINS: CACHE_MINS || 5,
  WEATHER_API,
  SPOTIFY_TOKEN,
  // we use this if we run the services locally and in order not to have a conflict with other service's port number
  NODE_PORT_ALT: 3001,
  SENTRY: SENTRY || 'https://xxx@xxx.ingest.sentry.io/xxx',
};

export default config;
