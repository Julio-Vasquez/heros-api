import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME,
  port: +process.env.APP_PORT,
  host: process.env.APP_HOST,
  prefix: process.env.APP_PREFIX,
  deploy: process.env.APP_DEPLOY,
}));
