import * as crypto from 'crypto';

import { db } from '@/database';

const createSchemaStorage = async () => {
  const TABLE_NAME = 'content_type_schema';
  const hasSchemaTable = await db.schema.hasTable(TABLE_NAME);

  if (!hasSchemaTable) {
    await db.schema.createTable(TABLE_NAME, (tableBuilder) => {
      tableBuilder.increments('id');
      tableBuilder.json('schema');
      tableBuilder.string('hash');
      tableBuilder.timestamps(true, true, true);
    });
  }

  return {
    async read() {},

    async add(schema) {
      await db
        .insert({ schema: JSON.stringify(schema), hash: this.hashSchema(JSON.stringify(schema)) })
        .into(TABLE_NAME);
    },

    async clear() {},

    async hashSchema(schema) {
      return crypto.createHash('md5').update(JSON.stringify(schema)).digest('hex');
    },
  };
};
