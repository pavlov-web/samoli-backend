import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { ServiceEntity } from '@/modules/service/entity/service.entity';

@Entity({ name: 'price' })
export class PriceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @ManyToOne(() => ServiceEntity, (service) => service.prices)
  service: ServiceEntity;
}
