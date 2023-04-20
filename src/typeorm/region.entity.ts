import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Region {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'region_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  regionName: string;

  @Column({name: 'property_id'})
  propertyId: number;

  @Column({
    default: new Date()
  })
  @CreateDateColumn()
  createdAt: Date;
}