import "dotenv/config"

import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USER,
  password: String(process.env.DB_PASS),
  database: process.env.DB_NAME,
  entities: [`${__dirname}/**/database/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/database/migrations/*.{ts,js}`],
  migrationsRun: true,
  synchronize: true,
  logging: true,
  name: 'API Sistema Financeiro',
  subscribers: [],
});
