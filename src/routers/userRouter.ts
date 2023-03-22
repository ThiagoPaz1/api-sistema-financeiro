import { verifyToken } from './../middleware/loginRequired';
import { Router } from "express";
import UserController from '../user/controllers/userController';
import AuthUserController from '../user/controllers/AuthUserController';

const userRouter = Router();

userRouter.get("/:id", UserController.userById);
userRouter.get("/", UserController.index);
userRouter.post("/create",  UserController.create);
userRouter.post("/logar",  UserController.login);
userRouter.put("/update/:id", UserController.update);
userRouter.delete("/delete/:id", UserController.delete);

// userRouter.post("/", validations.validationFields, userController.newUser)

export { userRouter }