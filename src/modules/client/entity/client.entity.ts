import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { PortfolioEntity } from '@/modules/portfolio/entity/portfolio.entity';

@Entity({ name: 'client' })
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  payment: number;

  @Column()
  comment: string;

  @OneToMany(() => PortfolioEntity, (portfolio) => portfolio.client)
  portfolio: PortfolioEntity[];
}
