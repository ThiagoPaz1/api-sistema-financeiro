import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  @Column()
  type!: string; // postgres não está aceitando arrays, depois vou verificar o motivo

  @Column()
  created_at?: Date;

  @Column()
  userId?: number; // TODO implementar relação -> chave extrangeira
}

class Payment {
  @Column()
  debit?: string;

  @Column()
  credit?: string;
}
