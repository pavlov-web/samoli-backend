import * as dotenv from 'dotenv';
import express, { Express } from 'express';
import { Knex } from 'knex';

import { createConnection } from '@/database';
import { errorHandler } from '@/middleware/errorHandler';
import { router } from '@/router';

dotenv.config();

class Bootstrap {
  public app: Express;
  public db: Knex<any, unknown[]>;
  public router: any;
  private contentTypeBuilder: App;

  constructor() {
    this.app = express();
    this.db = createConnection();
    this.router = router();
  }

  async start() {
    this.app.use(express.json());
    this.app.use('/api/v1', this.router);

    this.app.use(errorHandler);

    try {
      const a = await this.db.raw('select 1+1 as result');
    } catch (error) {
      console.warn('\x1b[31m', 'Error db connection:', error.message, '\x1b[0m');
    }

    const port = process.env.API_PORT;
    const host = process.env.API_HOST;

    this.app.listen(port || 3000, () => {
      console.log(`Start: ${host}${port}`);
    });
  }
}

new Bootstrap().start();

export type App = Bootstrap;
