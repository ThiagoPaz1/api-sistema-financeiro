import "reflect-metadata"
import "dotenv/config"

import { DataSource } from "typeorm"

const port = Number(process.env.DB_PORT)

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/database/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/database/migrations/*.{ts,js}`],
    subscribers: [],
})
