import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from 'typeorm';
import { User } from './user';

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  url?: string;

  @ManyToOne(() => User, (user) => user.transactions)
  userId?: User;
}

