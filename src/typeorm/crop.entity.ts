import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crop')
export class Crop {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'crop_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  cropName: string;

  @Column({name: 'field_id'})
  fieldId: number;

  @Column({
    default: new Date()
  })
  @CreateDateColumn()
  createdAt: Date;
}