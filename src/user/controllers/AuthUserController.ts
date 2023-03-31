import { Request, Response } from 'express';
import { AuthUserService } from '../services/AuthUserService';

class AuthUserController {
  async session(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
  
      const authUserService = new AuthUserService();
  
      const auth = await authUserService.execute({
        email,
        password
      });
  
      return res.json(auth);
    } catch (e: any | unknown) {
      return res.status(404).json({ message: {
        error: "Usuário não existe"
      }})
    }
  }
}

export default new AuthUserController();