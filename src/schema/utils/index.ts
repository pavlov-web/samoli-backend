const SCALAR_TYPES = [
  'increments',
  'password',
  'email',
  'string',
  'uid',
  'richtext',
  'text',
  'uuid',
  'jsonb',
  'enumeration',
  'integer',
  'biginteger',
  'float',
  'decimal',
  'date',
  'time',
  'datetime',
  'timestamp',
  'boolean',
];

export const isScalar = (type) => SCALAR_TYPES.includes(type);
