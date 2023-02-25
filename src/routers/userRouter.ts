import { Router } from "express"
import { userController } from "../controllers/userController"
const userRouter = Router()
// import { userController } from "../modules/user/controllers"
// import { validations } from "../modules/user/controllers/middlewares"

userRouter.get("/", userController.index);
userRouter.post("/create", userController.create);
userRouter.put("/update:id", userController.update);
userRouter.delete("/delete/:id", userController.delete);

// userRouter.post("/", validations.validationFields, userController.newUser)

export { userRouter }