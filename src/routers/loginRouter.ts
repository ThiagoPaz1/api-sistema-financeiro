import { Router } from "express"
import AuthUserController from "../user/controllers/AuthUserController";

const loginRouter = Router()
// import { loginController } from "../modules/login/controllers"
// import { validationLogin } from "../modules/login/middlewares"

loginRouter.post('/login/session', AuthUserController.session);

// loginRouter.post('/', validationLogin.validationFields, loginController.login)

export { loginRouter }