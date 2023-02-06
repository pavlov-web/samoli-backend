import { Router } from 'express';

import { create, findOne, remove, update } from '@/content-type/controller';
import { tryCatch } from '@/utils/tryCatch';

export const contentTypeRouter = (router: Router) => {
  router.get('/content-type');
  router.get('/content-type/:uid', tryCatch(findOne));
  router.post('/content-type', tryCatch(create));
  router.put('/content-type/:uid', tryCatch(update));
  router.delete('/content-type/:uid', tryCatch(remove));
};
