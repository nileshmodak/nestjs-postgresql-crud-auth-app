import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Org } from './org.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'property_id',
  })
  id: number;

  @ManyToOne(() => Org, (org) => org.id, { cascade: true })
  @JoinColumn({ name : 'org_id' })
  orgId: Org;

  @Column({
    nullable: false,
    default: '',
  })
  propertyName: string;

  @Column({
    default: new Date()
  })
  @CreateDateColumn()
  createdAt: Date;
}