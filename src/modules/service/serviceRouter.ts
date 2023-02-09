import { Router } from 'express';

import ServiceController from '@/modules/service/controller';
import { tryCatch } from '@/utils/tryCatch';

const serviceRouter = (router: Router) => {
  router.get('/service', tryCatch(ServiceController.findAll));
  router.get('/service/:id', tryCatch(ServiceController.find));
  router.post('/service', tryCatch(ServiceController.create));
  router.put('/service/:id', tryCatch(ServiceController.update));
  router.delete('/service/:id', tryCatch(ServiceController.delete));
};

export { serviceRouter };
