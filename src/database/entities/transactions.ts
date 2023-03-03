import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user';

@Entity('tb_transaction')
export class Transactions {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  url?: string;

  @ManyToOne(() => User, (user) => user.transactions)
  userId?: User;
}

