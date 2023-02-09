import { db } from '@/database';
import { ServiceEntity } from '@/modules/service/entity/service.entity';

const serviceRepository = db.getRepository(ServiceEntity);

const createService = async (body) => {
  const service = new ServiceEntity();
  Object.assign(service, body);

  return await serviceRepository.save(service);
};

const getServiceById = async (id: number) => {
  return await serviceRepository.findOneBy({ id });
};

const getAllService = async (limit: string, offset: string) => {
  return await serviceRepository.findAndCount({ take: +limit || null, skip: +offset || 0 });
};

const updateService = async (data) => {
  const service = await serviceRepository.findOneBy({ id: data.id });
  if (service.id) {
    return await serviceRepository.save(service);
  }
};

const deleteService = async (id: number) => {
  return await serviceRepository.delete({ id });
};

export { getServiceById, getAllService, updateService, deleteService, createService };
