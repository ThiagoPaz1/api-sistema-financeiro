import { Transactions } from './transactions';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  password!: string;

  @Column({ nullable: true })
  balance?: number;

  @OneToMany(() => Transactions, (transaction) => transaction.userId)
  transactions?: Transactions[];
}
