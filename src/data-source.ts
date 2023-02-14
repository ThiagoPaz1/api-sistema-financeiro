import "reflect-metadata"
import "dotenv/config"

import { DataSource } from "typeorm"
import { dataSource } from './config/dataSource';

export const AppDataSource = new DataSource(dataSource)
