import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user';

@Entity('tb_transaction')
export class Transactions {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  @IsNumber()
  @IsOptional()
  value?: number;

  @Column()
  @IsString()
  @IsOptional()
  category?: string;

  @Column({ type: 'enum', enum: ['debit', 'credit']})
  @IsOptional()
  @IsString()
  type?: string;

  @Column()
  @IsDate()
  created_at?: Date;

  @ManyToOne(() => User, (user) => user.transactions)
  userId?: User;
}

