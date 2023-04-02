import { Transactions } from './transactions';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

const regEx: RegExp = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])^.{6,32}$/;
@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  @IsString()
  @MinLength(5, { message: 'Nome tem que ter mais de 5 caracteres' })
  @MaxLength(40, { message: 'Nome tem que conter menos que 40 caracteres' })
  name!: string;

  @Column({ unique: true })
  @IsEmail()
  email!: string;

  @Column()
  @IsString()
  @Matches(regEx, {
    message:
      'Senha Fraca, tem que haver pelo menos um caractere especial, um número e uma letra maiúscula',
  })
  password!: string;

  @Column({ nullable: true, default: 0 })
  @IsOptional()
  @IsNumber()
  balance?: number;

  @OneToMany(() => Transactions, (transaction) => transaction.userId)
  transactions?: Transactions[];
}
