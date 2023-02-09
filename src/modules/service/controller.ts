import { Request, Response } from 'express';

import { getAllService, getServiceById, deleteService, updateService, createService } from '@/modules/service/service';

export class ServiceController {
  async find(req: Request, res: Response) {
    const service = await getServiceById(req.body.id);
    res.send(service);
  }

  async findAll(req: Request, res: Response) {
    const service = await getAllService(req.query.limit as string, req.query.offset as string);
    res.send(service);
  }

  async create(req: Request, res: Response) {
    const service = await createService(req.body);
    res.send(service);
  }

  async update(req: Request, res: Response) {
    const service = await updateService(req.body);
    res.send(service);
  }

  async delete(req: Request, res: Response) {
    await deleteService(req.body.id);
    res.status(200);
  }
}

export default new ServiceController();
