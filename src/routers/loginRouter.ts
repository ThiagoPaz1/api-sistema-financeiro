import { Router } from "express"
import loginController from "../login/controller/LoginController";

// import { loginController } from "../modules/login/controllers"
// import { validationLogin } from "../modules/login/middlewares"

const loginRouter = Router()
loginRouter.post("/",  loginController.login);
// loginRouter.post('/', validationLogin.validationFields, loginController.login)

export { loginRouter }