import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn('increment')
  tile!: string;

  @Column()
  value!: string;

  @Column()
  category!: string;

  @Column()
  type!: Payment[];

  @Column()
  created_at?: Date;

  @Column()
  userId?: number;
}

class Payment {
  @Column()
  debit?: string;

  @Column()
  credit?: string;
}
