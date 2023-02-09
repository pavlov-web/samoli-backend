import { Router } from 'express';

import { portfolioRouter } from '@/modules/portfolio/portfolioRouter';
import { serviceRouter } from '@/modules/service/serviceRouter';

export const router = () => {
  const router = Router();

  portfolioRouter(router);
  serviceRouter(router);

  return router;
};
