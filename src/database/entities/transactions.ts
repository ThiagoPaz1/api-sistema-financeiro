import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from 'typeorm';
import { User } from './user';

@Entity('tb_transactios')
export class Transactions {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  tile!: string;

  @Column()
  value!: string;

  @Column()
  category!: string;

  // TODO implementar o array de Pagamentos Débito e Crédito para o type
  @Column({ type: 'enum', enum: ['debit', 'credit'] })
  type!: string; // postgres não está aceitando arrays, depois vou verificar o motivo

  @Column()
  created_at?: Date;

  @Column()
  @ManyToOne(() => User, (user) => user.id)
  userId?: string;
}
