import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { userRepository } from '../../user/repository/userRepository';

class loginController{
  async login(req: Request, res: Response){
    try {
      const {email, password} = req.body;
      const user = await userRepository.find({where:{
        email,
        password
      }})
      if(!user){
        return res.status(401).json({message:"Usuario não existe"})
      }
      return res.status(200).json("login efetuado")
      
    } catch (error) {
      console.log(error)
    }
  }
}




/*class TokenController {
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
}*/


export default new loginController();
