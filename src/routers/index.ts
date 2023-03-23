import { Router } from 'express';
import { loginRouter } from './loginRouter';
import { userRouter } from './userRouter';

const router = Router();

router.use('/', userRouter);
router.use('/', loginRouter);

export { router };
