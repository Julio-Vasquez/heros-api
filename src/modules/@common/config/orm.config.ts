import { registerAs } from '@nestjs/config';

export default registerAs('typeorm', () => ({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: ['dist/entities/**/*.entity.js'],
  ssl: {
    rejectUnauthorized: false,
  },
}));
