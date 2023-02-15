import { DataSourceOptions } from "typeorm";

export const dataSource: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [`${__dirname}/**/database/entities/*.{ts,js}`],
	  migrations: [`${__dirname}/**/database/migrations/*.{ts,js}`],
    subscribers: [],
}
