import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Org {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'org_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    default: new Date()
  })
  @CreateDateColumn()
  createdAt: Date;
}