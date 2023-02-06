import { Knex } from 'knex';

export class QueryBuilder {
  private state: typeof state;
  constructor(db: Knex) {
    this.state = state;
  }

  select(args: string) {
    this.state.type = 'select';
    this.state.select = [...args];
  }
}

const state = {
  type: 'select',
  select: [],
  count: null,
  max: null,
  first: false,
  data: null,
  where: [],
  joins: [],
  populate: null,
  limit: null,
  offset: null,
  transaction: null,
  forUpdate: false,
  onConflict: null,
  merge: null,
  ignore: false,
  orderBy: [],
  groupBy: [],
  increments: [],
  decrements: [],
  aliasCounter: 0,
};
