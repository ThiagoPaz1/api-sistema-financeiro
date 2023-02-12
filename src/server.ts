import express from "express"
import cors from "cors"

import { AppDataSource } from "./data-source"
import { router } from "./routers"

const app = express()

AppDataSource.initialize()
.then(() => console.log("Iniciado banco de dados!"))
.catch(error => console.log(error))

app.use(cors())
app.use(express.json())
app.use("/", router)

app.listen(process.env.PORT)