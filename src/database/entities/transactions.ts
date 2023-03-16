import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user';

@Entity('tb_transaction')
export class Transactions {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  value?: string;

  @Column()
  category?: string;

  @Column({ type: 'enum', enum: ['debit', 'credit']})
  type?: string;

  @Column()
  created_at?: Date;

  @ManyToOne(() => User, (user) => user.transactions)
  userId?: User;
}

