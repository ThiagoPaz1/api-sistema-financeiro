import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user';

@Entity('tb_transaction')
export class Transactions {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  value!: string;

  @Column()
  category!: string;

  // TODO implementar o array de Pagamentos Débito e Crédito para o type
  @Column()
  type!: string; // postgres não está aceitando arrays, depois vou verificar o motivo

  @Column()
  created_at?: Date;

  @ManyToOne(() => User, (user) => user.transactions)
  userId?: User;
}

