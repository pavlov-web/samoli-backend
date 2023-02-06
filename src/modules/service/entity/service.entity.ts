import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { PriceEntity } from '@/modules/service/entity/price.entity';

@Entity({ name: 'service' })
export class ServiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  content: string;

  @Column()
  image: string;

  @OneToMany(() => PriceEntity, (price) => price.service)
  prices: PriceEntity[];
}
