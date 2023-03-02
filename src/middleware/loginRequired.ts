import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import 'dotenv/config';
import { userRepository } from '../user/repository/userRepository';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        errors: ['Login requerido!'],
      });
    }

    const secretKey = process.env.TOKEN_SECRET as string;

    const [, token] = authorization.split(' ');

    if (!token) return res.status(401).send({ message: 'Token não fornecido!' });

    const data = verify(token, secretKey);

    req.user = data;

    const user = await userRepository.findOneBy({
      id,
      email,
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido!'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido!'],
    });
  }
};
