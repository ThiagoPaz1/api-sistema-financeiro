import { verifyToken } from './../middleware/loginRequired';
import { Router } from "express";
import UserController from '../user/controllers/userController';
import AuthUserController from '../user/controllers/AuthUserController';

const userRouter = Router();
// import { userController } from "../modules/user/controllers"
// import { validations } from "../modules/user/controllers/middlewares"

userRouter.get("/:id", verifyToken, UserController.userById);
userRouter.get("/", verifyToken, UserController.index);
userRouter.post("/create",  UserController.create);
userRouter.post("/session",  verifyToken, AuthUserController.session);
userRouter.put("/update/:id", verifyToken, UserController.update);
userRouter.delete("/delete/:id", verifyToken, UserController.delete);

// userRouter.post("/", validations.validationFields, userController.newUser)

export { userRouter }