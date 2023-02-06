import { Router } from 'express';

import { contentTypeRouter } from '@/content-type';

export const router = () => {
  const router = Router();

  contentTypeRouter(router);

  return router;
};
