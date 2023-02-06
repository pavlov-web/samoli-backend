import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { FabricEntity } from '@/modules/fabric/entity/fabric.entity';

@Entity({ name: 'fabric_type' })
export class FabricTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @OneToMany(() => FabricEntity, (fabric) => fabric.fabric_type)
  fabrics: FabricEntity[];
}
