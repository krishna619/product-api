import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  apiBaseUrl: process.env.API_BASE_URL || 'https://dummyjson.com',
  cacheDuration: parseInt(process.env.CACHE_DURATION, 10) || 300000,
  corsOrigin: process.env.CORS_ORIGIN || '*'
};

