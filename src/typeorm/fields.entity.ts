import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fields {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'field_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  fieldName: string;

  @Column({name: 'region_id'})
  regionId: number;

  @Column('jsonb', {nullable: true})
  position?: object[];

  @Column('jsonb', {nullable: true})
  size?: object[];

  @Column({
    default: new Date()
  })
  @CreateDateColumn()
  createdAt: Date;
}