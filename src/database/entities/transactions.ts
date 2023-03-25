import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user';

@Entity('tb_transaction')
export class Transactions {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  @IsNumber()
  @IsOptional()
  value!: number;

  @Column()
  @IsString()
  @IsOptional()
  category?: string;

  @Column({ type: 'enum', enum: ['debit', 'credit'] })
  @IsOptional()
  @IsString()
  type?: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  @IsDate()
  created_at?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at?: Date;

  @ManyToOne(() => User, (user) => user.transactions)
  userId?: User;
}

