import { Router } from 'express';

import { portfolioRouter } from '@/modules/portfolio/portfolioRouter';

export const router = () => {
  const router = Router();

  portfolioRouter(router);

  return router;
};
