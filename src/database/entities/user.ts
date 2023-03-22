import { Transactions } from './transactions';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, IsNumber, IsString, IsStrongPassword, MaxLength, MinLength } from 'class-validator';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  name!: string;

  @Column({ unique: true })
  @IsEmail()
  email!: string;

  @Column({ unique: true })
  @IsString()
  @IsStrongPassword(
    {
      minLength: 6,
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1
    },
    {
      message:
      'Senha tem que conter mais que 6 caracteres, pelo menos uma letra maiúscula, pelo menos um caractere especial e pelo menos um número'
    }
  )
  password!: string;

  @Column({ nullable: true })
  @IsNumber()
  balance?: number;

  @OneToMany(() => Transactions, (transaction) => transaction.userId)
  transactions?: Transactions[];
}
