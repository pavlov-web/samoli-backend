import { Request, Response } from 'express';

import { readContentType, removeContentType, updateContentType, writeContentType } from '@/content-type/service';
import { createSchemaProvider } from '@/schema';

const create = async (req: Request, res: Response) => {
  await writeContentType(req.body.collectionName, req.body);

  await createSchemaProvider(req.body).create();

  res.send(req.body);
};

const update = async (req: Request, res: Response) => {
  const result = await updateContentType(req.body.collectionName, req.body);

  await createSchemaProvider(result).update();

  res.send(req.body);
};

const findOne = async (req: Request, res: Response) => {
  const result = await readContentType(req.params.uid);

  res.send(result);
};

const remove = async (req: Request, res: Response) => {
  await removeContentType(req.params.uid);

  await createSchemaProvider(req.params.uid).drop();

  res.send(req.body);
};

export { create, update, remove, findOne };
