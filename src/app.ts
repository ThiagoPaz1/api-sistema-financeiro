import express, { Application } from 'express'
import cors from 'cors';
import { AppDataSource } from './data-source';
import { router } from './routers';

class App {
  app: Application;
  constructor() {
    AppDataSource.initialize();
    this.app = express()
    this.middlewares()
    this.routes()
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
