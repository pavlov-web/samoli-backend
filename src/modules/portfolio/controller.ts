import { Request, Response } from 'express';

import {
  createPortfolio,
  deletePortfolio,
  getAllPortfolio,
  getPortfolioById,
  updatePortfolio,
} from '@/modules/portfolio/service';

export class PortfolioController {
  async find(req: Request, res: Response) {
    const portfolio = await getPortfolioById(req.body.id);
    res.send(portfolio);
  }

  async findAll(req: Request, res: Response) {
    const portfolio = await getAllPortfolio(req.query.limit as string, req.query.offset as string);
    res.send(portfolio);
  }

  async create(req: Request, res: Response) {
    const portfolio = await createPortfolio(req.body);
    res.send(portfolio);
  }

  async update(req: Request, res: Response) {
    const portfolio = await updatePortfolio(req.body);
    res.send(portfolio);
  }

  async delete(req: Request, res: Response) {
    await deletePortfolio(req.body.id);
    res.status(200);
  }
}

export default new PortfolioController();
