import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { FabricTypeEntity } from '@/modules/fabric/entity/fabricType.entity';
import { PortfolioEntity } from '@/modules/portfolio/entity/portfolio.entity';

@Entity({ name: 'fabric' })
export class FabricEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column()
  content: string;

  @Column()
  color: string;

  @ManyToOne(() => PortfolioEntity, (portfolio) => portfolio.fabrics)
  portfolio: PortfolioEntity;

  @ManyToOne(() => FabricTypeEntity, (fabric) => fabric.fabrics)
  fabric_type: FabricTypeEntity;
}
