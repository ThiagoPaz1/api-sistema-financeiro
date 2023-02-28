import express, { Express } from 'express'
import cors from 'cors';
import { router } from './routers'
import { AppDataSource } from './data-source';

class App {
  app: Express;
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
    AppDataSource.initialize();
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes() {
    this.app.use(router)
  }
}

export default new App().app;