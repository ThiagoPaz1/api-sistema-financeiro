<<<<<<< HEAD
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { userRepository } from '../user/repository/userRepository';

class TokenController {
  async store(req: Request, res: Response) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Inválidas!'],
      });
    }
    const user = await userRepository.findOneBy({ email });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe!'],
      });
    }

    const secretKey = process.env.TOKEN_SECRET as string;

    const { id } = user;
    const token = sign({ id, email }, secretKey, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
=======
// import { Request, Response } from 'express';
// import { sign } from 'jsonwebtoken';

// import { User } from '../database/entities/user';
// import { userRepository } from '../user/repository/userRepository';

// class AuthController {
//   static login = async (req: Request, res: Response) => {
//     //Check if username and password are set
//     const { email, password } = req.body;
//     if (!email && password) {
//       res.status(400).send();
//     }

//     try {
//       const user = await userRepository.findOneOrFail({ where: { email } });

//       if (!user) {
//         res.status(401).send();
//         return;
//       }

//       //Sing JWT, valid for 1 hour
//       const token = sign(
//         { userId: user.id, username: user.username },
//         config.jwtSecret,
//         { expiresIn: '1h' },
//       );

//       //Send the jwt in the response
//       res.send(token);
//     } catch (error) {
//       res.status(401).send();
//     }



//   };

//   static changePassword = async (req: Request, res: Response) => {
//     //Get ID from JWT
//     const id = res.locals.jwtPayload.userId;

//     //Get parameters from the body
//     const { oldPassword, newPassword } = req.body;
//     if (!(oldPassword && newPassword)) {
//       res.status(400).send();
//     }

//     let user: User;
//     try {
//       user = await userRepository.findOneOrFail(id);

//       //Check if old password matchs
//       if (!user) {
//         res.status(401).send();
//         return;
//       }
  
//       //Validate de model (password lenght)
//       user.password = newPassword;
//       const errors = await validate(user);
//       if (errors.length > 0) {
//         res.status(400).send(errors);
//         return;
//       }
//       //Hash the new password and save
//       user.hashPassword();
//       userRepository.save(user);
  
//       res.status(204).send();

//     } catch (id) {
//       res.status(401).send();
//     }

//   };
// }
// export default AuthController;
>>>>>>> 25910bef0c7cb76932dc3f74b5c6672b935b9c09
