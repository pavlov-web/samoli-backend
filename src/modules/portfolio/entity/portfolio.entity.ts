import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';

import { ClientEntity } from '@/modules/client/entity/client.entity';
import { FabricEntity } from '@/modules/fabric/entity/fabric.entity';
import { GalleryEntity } from '@/modules/gallery/entity/gallery.entity';
import { FurnitureTypeEntity } from '@/modules/portfolio/entity/furnitureType.entity';
import { ServiceEntity } from '@/modules/service/entity/service.entity';

@Entity({ name: 'portfolio' })
export class PortfolioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  description: string;

  @ManyToOne(() => FurnitureTypeEntity, (furniture) => furniture.portfolio)
  furniture_type: FurnitureTypeEntity;

  @ManyToOne(() => GalleryEntity, (gallery) => gallery.portfolio)
  gallery: GalleryEntity;

  @ManyToOne(() => ClientEntity, (client) => client.portfolio)
  client: ClientEntity;

  @OneToMany(() => FabricEntity, (fabric) => fabric.portfolio)
  fabrics: FabricEntity[];

  @ManyToMany(() => ServiceEntity)
  @JoinTable()
  services: ServiceEntity[];
}
