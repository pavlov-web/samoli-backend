import { Knex, knex } from 'knex';

export let db: Knex = null;

export const createConnection = () => {
  db = knex({
    client: 'postgres',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: Number(process.env.DB_PORT),
      host: process.env.DB_HOST,
    },
  });

  return db;
};
