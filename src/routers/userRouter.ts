import { verifyToken } from './../middleware/loginRequired';
import { Router } from "express";
import UserController from '../user/controllers/userController';
import AuthUserController from '../user/controllers/AuthUserController';

const userRouter = Router();


userRouter.get('user/:id', verifyToken, UserController.userById);
userRouter.get('user', verifyToken, UserController.index);
userRouter.post('user/create', UserController.create);
userRouter.post('user/session', verifyToken, AuthUserController.session);
userRouter.put('user/update/:id', verifyToken, UserController.update);
userRouter.delete('user/delete/:id', verifyToken, UserController.delete);

// userRouter.post("/", validations.validationFields, userController.newUser)

export { userRouter }