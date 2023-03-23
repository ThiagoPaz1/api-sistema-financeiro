import { verifyToken } from './../middleware/loginRequired';
import { Router } from "express";
import UserController from '../user/controllers/UserController';
import AuthUserController from '../user/controllers/AuthUserController';

const userRouter = Router();

userRouter.get('/user/:id', verifyToken, UserController.userById);
userRouter.get('/user/', verifyToken, UserController.index);
userRouter.post("/user/create", UserController.create);
// Rota de Login, requer um usuário criado na rota UserController.create para gerar o token de login
userRouter.post("/user/session", AuthUserController.session);
userRouter.put('/user/update/:id', verifyToken, UserController.update);
userRouter.delete('/user/delete/:id', verifyToken, UserController.delete);

export { userRouter }