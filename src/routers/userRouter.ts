import { Router } from "express"
import { AppDataSource } from "../data-source"
// import { User } from "../database/entities/user"

// import { userController } from "../modules/user/controllers"
// import { validations } from "../modules/user/controllers/middlewares"

const userRouter = Router()

userRouter.post('/', 
//   "/", async (_, res) => {
//   const user = AppDataSource.getRepository(User);

//   return res.json({
//     user,
//   })
// }
)

export { userRouter }