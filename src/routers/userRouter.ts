import { verifyToken } from './../middleware/loginRequired';
import { Router } from "express";
import UserController from '../user/controllers/userController';
import AuthUserController from '../user/controllers/AuthUserController';

const userRouter = Router();

userRouter.get('/:id', verifyToken, UserController.userById);
userRouter.get('/', verifyToken, UserController.index);
userRouter.post("/create", UserController.create);
// Rota de Login, requer um usuário criado na rota UserController.create para gerar o token de login
userRouter.post("/session", AuthUserController.session);
userRouter.put('/update/:id', verifyToken, UserController.update);
userRouter.delete('/delete/:id', verifyToken, UserController.delete);

export { userRouter }