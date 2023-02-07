import { db } from '@/database';
import { PortfolioEntity } from '@/modules/portfolio/entity/portfolio.entity';

const portfolioRepository = db.getRepository(PortfolioEntity);

const createPortfolio = async (body) => {
  const portfolio = new PortfolioEntity();
  Object.assign(portfolio, body);

  return await portfolioRepository.save(portfolio);
};

const getPortfolioById = async (id: number) => {
  return await portfolioRepository.findOneBy({ id });
};

const getAllPortfolio = async (limit: string, offset: string) => {
  return await portfolioRepository.findAndCount({ take: +limit || null, skip: +offset || 0 });
};

const updatePortfolio = async (data) => {
  const portfolio = await portfolioRepository.findOneBy({ id: data.id });
  if (portfolio.id) {
    return await portfolioRepository.save(portfolio);
  }
};

const deletePortfolio = async (id: number) => {
  return await portfolioRepository.delete({ id });
};

export { getPortfolioById, getAllPortfolio, updatePortfolio, deletePortfolio, createPortfolio };
