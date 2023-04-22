import { Router } from 'express';
import { loginRouter } from './loginRouter';
import { transactionRouter } from './transactionRouter';
import { userRouter } from './userRouter';

const router = Router();

router.use(userRouter);
router.use(loginRouter);
router.use(transactionRouter)

export { router };
