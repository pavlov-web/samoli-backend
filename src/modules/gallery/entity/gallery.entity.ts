import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';

import { FileEntity } from '@/modules/gallery/entity/file.entity';
import { PortfolioEntity } from '@/modules/portfolio/entity/portfolio.entity';

@Entity({ name: 'gallery' })
export class GalleryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => FileEntity)
  @JoinTable()
  files: FileEntity[];

  @OneToMany(() => PortfolioEntity, (portfolio) => portfolio.gallery)
  portfolio: PortfolioEntity;
}
