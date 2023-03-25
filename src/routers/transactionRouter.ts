import { Router } from 'express';
import TransactionController from '../transactions/controllers/TransactionController';

const transactionRouter = Router();
// import { loginController } from "../modules/login/controllers"
// import { validationLogin } from "../modules/login/middlewares"

transactionRouter.get('/transaction/', TransactionController.index);
transactionRouter.get('/transaction/:id', TransactionController.transactionById);
transactionRouter.put('/transaction/:id', TransactionController.update);
transactionRouter.post('/transaction/create', TransactionController.create);
transactionRouter.delete('/transaction/:id', TransactionController.delete);

// loginRouter.post('/', validationLogin.validationFields, loginController.login)

export { transactionRouter };
