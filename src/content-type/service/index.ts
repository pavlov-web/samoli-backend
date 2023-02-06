import fs from 'fs-extra';

import { AppError } from '@/utils/AppError';

const root = './schemes/';

const writeContentType = async (name, json) => {
  const isExists = await isPathExists(name);

  if (isExists) {
    throw new AppError(`The "${name}" already exists`, 400);
  }

  return await fs.outputJSON(root + name + '/schema.json', json, { spaces: 2 });
};

const updateContentType = async (name, json) => {
  const isExists = await isPathExists(name);

  if (isExists) {
    const current = await readContentType(name);
    await writeContentType(name, json);

    return { current, updated: json };
  }

  return await writeContentType(name, json);
};

const readContentType = async (name: string) => {
  return await fs.readJSON(root + name + '/schema.json');
};

const removeContentType = async (name: string) => {
  await fs.remove(root + name);
};

const isPathExists = async (name: string) => {
  return await fs.pathExists(root + name + '/schema.json');
};

export { writeContentType, updateContentType, readContentType, removeContentType };
