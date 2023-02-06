const contentType = ['collectionType', 'singleType'];

export const requestType = {
  type: 'collectionType',
  collectionName: 'addresses',
  info: {
    displayName: 'Address',
    singularName: 'address',
    pluralName: 'addresses',
    description: '',
  },
  options: {
    draftAndPublish: false,
    comment: '',
  },
  attributes: {
    images: {
      type: 'media',
      multiple: false,
      required: false,
      allowedTypes: ['files', 'images', 'videos', 'audios'],
    },
    uuid: {
      type: 'uuid',
    },
    name: {
      type: 'string',
      required: true,
      maxLength: 255,
    },
    description: {
      type: 'text',
      required: true,
    },
    json: {
      type: 'json',
      required: true,
    },
    time: {
      type: 'time',
      required: true,
    },
    start_date: {
      type: 'date',
      required: true,
    },
    end_date: {
      type: 'datetime',
      required: true,
    },
    confirmed: {
      type: 'boolean',
      default: false,
    },
  },
};

export const fieldStringType = ['password', 'email'];
export const fieldTextType = ['richtext'];

export const fieldTypes = [
  // "media",
  // "enumeration",
  // "component",
  // "dynamiczone",
  'uuid',
  'string',
  'text',
  'jsonb',
  'integer',
  'biginteger',
  'float',
  'decimal',
  'time',
  'datetime',
  'date',
  'boolean',
];

const getTypeShape = {
  media: {
    multiple: 'boolean',
    required: 'boolean',
    allowedTypes: ['images', 'videos', 'files', 'audios'],
  },

  /**
   * complexe types
   */

  uuid: {
    required: 'boolean',
    targetField: 'string?',
    default: '?',
    minLength: 'number',
    maxLength: 'number',
    options: '?',
  },

  /**
   * scalar types
   */
  string: {},
  text: {
    default: 'string',
    required: 'boolean',
    unique: 'unique',
    minLength: 'number',
    maxLength: 'number',
  },

  richtext: {
    default: 'string',
    required: 'boolean',
    minLength: 'number',
    maxLength: 'number',
  },

  json: {
    default: 'json',
    required: 'boolean',
  },

  enumeration: {
    enum: 'enumeration',
    default: 'enumeration',
    enumName: '?',
    required: 'boolean',
  },

  password: {
    required: 'boolean',
    minLength: 'number',
    maxLength: 'number',
  },

  email: {
    default: 'string',
    required: 'boolean',
    unique: 'unique',
    minLength: 'number',
    maxLength: 'number',
  },

  integer: {
    default: 'number',
    required: 'boolean',
    unique: 'unique',
    min: 'number',
    max: 'number',
  },

  biginteger: {
    default: 'number',
    required: 'boolean',
    unique: 'unique',
    min: 'number',
    max: 'number',
  },

  float: {
    default: 'number',
    required: 'boolean',
    unique: 'unique',
    min: 'number',
    max: 'number',
  },

  decimal: {
    default: 'number',
    required: 'boolean',
    unique: 'unique',
    min: 'number',
    max: 'number',
  },

  time: {},
  datetime: {},
  date: {
    default: 'string',
    required: 'boolean',
    unique: 'unique',
  },

  boolean: {
    default: 'boolean',
    required: 'boolean',
  },

  component: {
    required: 'boolean',
    repeatable: 'boolean',
    component: 'component',
    min: 'number',
    max: 'number',
  },

  dynamiczone: {
    required: 'boolean',
    components: 'component',
    min: 'number',
    max: 'number',
  },
};
