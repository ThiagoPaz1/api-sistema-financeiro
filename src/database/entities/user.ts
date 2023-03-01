import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tb_user')
export class User {
  static create(arg0: {}) {
      throw new Error('Method not implemented.');
  }
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
