import express, { Express, Router } from 'express';

import { db } from '@/database';
import { errorHandler } from '@/middleware/errorHandler';
import { router } from '@/router';

class Bootstrap {
  public app: Express;
  public router: Router;

  constructor() {
    this.app = express();
    this.router = router();
  }

  async start() {
    await db
      .initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch((err) => {
        console.error('Error during Data Source initialization:', err);
      });

    this.app.use(express.json());
    this.app.use('/api/v1', this.router);

    this.app.use(errorHandler);

    const port = process.env.API_PORT;
    const host = process.env.API_HOST;

    this.app.listen(port || 3000, () => {
      console.log(`Start: ${host}${port}`);
    });
  }
}

new Bootstrap().start();

export type App = Bootstrap;
