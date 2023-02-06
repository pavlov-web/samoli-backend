import { isScalar } from './utils';

import { AppError } from '@/utils/AppError';

const createSchema = (shema) => {
  const table = {
    name: shema.collectionName,
    columns: [],
  };

  for (const key of Object.keys(shema.attributes)) {
    const attribute = shema.attributes[key];

    if (isScalar(attribute.type)) {
      const column = getColumnType(attribute);
      table.columns.push({ name: key, ...column });
    } else {
      console.log('\x1b[31m', `The type of "${attribute.type}" is not supported`, '\x1b[0m');
    }
  }

  return table;
};

const getColumnType = (attribute) => {
  switch (attribute.type) {
    case 'increments': {
      return {
        type: 'increments',
        args: [{ primary: true, primaryKey: true }],
        notNullable: true,
      };
    }
    case 'password':
    case 'email':
    case 'string':
    case 'enumeration': {
      return { type: 'string' };
    }
    case 'uuid': {
      return {
        type: 'string',
        unique: true,
      };
    }
    case 'richtext':
    case 'text': {
      return {
        type: 'text',
        args: ['longtext'],
      };
    }
    case 'jsonb': {
      return { type: 'jsonb' };
    }
    case 'integer': {
      return { type: 'integer' };
    }
    case 'biginteger': {
      return { type: 'bigInteger' };
    }
    case 'float': {
      return { type: 'double' };
    }
    case 'decimal': {
      return { type: 'decimal', args: [10, 2] };
    }
    case 'date': {
      return { type: 'date' };
    }
    case 'time': {
      return { type: 'time', args: [{ precision: 3 }] };
    }
    case 'datetime': {
      return {
        type: 'datetime',
        args: [
          {
            useTz: false,
            precision: 6,
          },
        ],
      };
    }
    case 'timestamp': {
      return {
        type: 'timestamp',
        args: [
          {
            useTz: false,
            precision: 6,
          },
        ],
      };
    }
    case 'boolean': {
      return { type: 'boolean' };
    }
    default: {
      throw new AppError(`Unknown type "${attribute.type}"`, 500);
    }
  }
};

export { createSchema };
