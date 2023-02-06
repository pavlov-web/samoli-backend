import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { PortfolioEntity } from '@/modules/portfolio/entity/portfolio.entity';

@Entity({ name: 'furniture_type' })
export class FurnitureTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @OneToMany(() => PortfolioEntity, (gallery) => gallery.furniture_type)
  portfolio: PortfolioEntity;
}
