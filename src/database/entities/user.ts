import { Transactions } from './transactions';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column()
  @IsString()
  @MinLength(5, { message: 'Nome tem que ter mais de 5 caracteres' })
  @MaxLength(40, { message: 'Nome tem que conter menos que 40 caracteres' })
  public name!: string;

  @Column({ unique: true })
  @IsEmail()
  public email!: string;

  @Column()
  @IsString()
  @IsStrongPassword(
    {
      minLength: 4,
      minLowercase: 4,
      minNumbers: 1,
      minSymbols: 1,
    },
    { message : 'Senha Fraca, tem que haver pelo menos quatro carácteres, um número e um caractere especial'},
  )
  public password!: string;

  @Column({ nullable: true, default: 0 })
  @IsOptional()
  @IsNumber()
  balance!: number;

  @OneToMany(() => Transactions, (transaction) => transaction.userId)
  transactions?: Transactions[];
}
