import { db } from '@/database';
import { createSchema } from '@/schema/schema';

const createTable = async (table) => {
  await db.schema.createTable(table.name, (tableBuilder) => {
    tableBuilder.increments('id').primary();

    (table.columns || []).forEach((column) => {
      return createColumn(tableBuilder, column);
    });

    tableBuilder.timestamps(true, true, true);
  });

  console.log(`Table "${table.name}" Created`);
};

const updateTable = async (table) => {
  if (table.newName) {
    await db.schema.renameTable(table.name, table.newName);
  }

  console.log(`Table "${table.name}" Updated`);
};

const dropTable = async (table) => {
  await db.schema.dropTable(table.name);

  console.log(`Table "${table.name}" Remove`);
};

const createColumn = (tableBuilder, column) => {
  const { name, type, args = [] } = column;

  console.log(type);
  if (!tableBuilder[type]) {
    return;
  }

  return tableBuilder[type](name, ...args);
};

const createSchemaProvider = (metadata) => {
  if (metadata) {
  }

  const schema = createSchema(metadata);

  return {
    async create() {
      await createTable(schema);
    },

    async update() {
      await updateTable(schema);
    },

    async drop() {
      await dropTable(schema);
    },
  };
};

export { createSchemaProvider };
