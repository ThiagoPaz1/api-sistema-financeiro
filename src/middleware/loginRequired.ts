import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import 'dotenv/config';
import { PayLoad } from '../interfaces/payload';

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        errors: ['Login requerido!'],
      }).end();
    }

    const secretKey = process.env.TOKEN_SECRET as string;

    const [, token] = authorization.split(' ');

    if (!token) return res.status(401).send({ message: 'Token não fornecido!' });

    const { sub } = verify(token, secretKey) as PayLoad;

    req.user_id = sub;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido!'],
    });
  }
};
