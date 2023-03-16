import { Router } from 'express';
import { loginRouter } from './loginRouter';
import { userRouter } from './userRouter';

const router = Router();

router.use('/user', userRouter);
router.use('/login', loginRouter);

export { router };
