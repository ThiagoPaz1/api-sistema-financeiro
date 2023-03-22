import { NextFunction, Request, Response } from 'express';
<<<<<<< HEAD
import { verify, sign } from 'jsonwebtoken';

import 'dotenv/config';
=======
import { verify } from 'jsonwebtoken';

import 'dotenv/config';
import { PayLoad } from '../interfaces/payload';
>>>>>>> 25910bef0c7cb76932dc3f74b5c6672b935b9c09

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        errors: ['Login requerido!'],
<<<<<<< HEAD
      });
=======
      }).end();
>>>>>>> 25910bef0c7cb76932dc3f74b5c6672b935b9c09
    }

    const secretKey = process.env.TOKEN_SECRET as string;

    const [, token] = authorization.split(' ');

    if (!token) return res.status(401).send({ message: 'Token não fornecido!' });

<<<<<<< HEAD
    const data = verify(token, secretKey);

    res.locals.jwtPayload = data;

    const { id, email } = data as any; // não façam isso galera, é só pra funcionar, depois a gente pensa numa coisa melhor!

    const newToken = sign({ id, email }, secretKey, {
      expiresIn: '1d',
    });

    res.setHeader('token', newToken);
=======
    const { sub } = verify(token, secretKey) as PayLoad;

    req.user_id = sub;
>>>>>>> 25910bef0c7cb76932dc3f74b5c6672b935b9c09

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido!'],
    });
  }
};
