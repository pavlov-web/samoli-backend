import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();
export const db = new DataSource({
  type: 'postgres',
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS + '',
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  entities: ['build/modules/**/*.entity.{ts,js}'],
  logging: false,
  synchronize: false,
  dropSchema: false,
});
