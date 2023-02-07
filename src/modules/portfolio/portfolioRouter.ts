import { Router } from 'express';

import PortfolioController from '@/modules/portfolio/controller';
import { tryCatch } from '@/utils/tryCatch';

const portfolioRouter = (router: Router) => {
  router.get('/portfolio', tryCatch(PortfolioController.findAll));
  router.get('/portfolio/:id', tryCatch(PortfolioController.find));
  router.post('/portfolio', tryCatch(PortfolioController.create));
  router.put('/portfolio/:id', tryCatch(PortfolioController.update));
  router.delete('/portfolio/:id', tryCatch(PortfolioController.delete));
};

export { portfolioRouter };
