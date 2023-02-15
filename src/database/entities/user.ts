import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  id?: string

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  password!: string;

  @Column()
  balance?: number;
}
