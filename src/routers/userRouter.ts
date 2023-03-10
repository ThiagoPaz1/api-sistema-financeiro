import { Router } from "express";
import UserController from '../user/controllers/userController';

const userRouter = Router();
// import { userController } from "../modules/user/controllers"
// import { validations } from "../modules/user/controllers/middlewares"

userRouter.get("/:id", UserController.userById);
userRouter.post("/create",  UserController.create);
userRouter.post("/logar",  UserController.login);
userRouter.put("/update:id", UserController.update);
userRouter.delete("/delete/:id", UserController.delete);

// userRouter.post("/", validations.validationFields, userController.newUser)

export { userRouter }