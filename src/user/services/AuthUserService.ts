import { userRepository } from '../repository/userRepository';
import { AuthRequest } from '../../interfaces/authRequest';
import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';



class AuthUserService {
  async execute({email,  password}: AuthRequest) {
    const user = await userRepository.findOneByOrFail({ email });

    if (!user) {
      throw new Error('Usuário não existe!')
    };

    const passwordMatch = compareHashPassword(password, user.password);

    if (!passwordMatch) {
      throw new Error("Usuário/senha incorreto")
    };

    const payload = { id: user.id, password: user.password };
    const options = { subject: user.email, expiresIn: '1d'};
    const secretKey = process.env.TOKEN_SECRET as string;

    const token = sign(
      payload,
      secretKey,
      options
    )

    return {
      id: user.id,
      email: user.email,
      token
    };
  }
}

export { AuthUserService };
