import { hashSync } from 'bcryptjs';
import { UserRequest } from '../../interfaces/userRequest';
import { userRepository } from '../repository/userRepository';


class UserService {
  async create({ name, email, password }: UserRequest) {
    if (!email) throw new Error('É requerido o email!');

    const userAlreadyExists = await userRepository.findOneBy({ email });

    if (userAlreadyExists) throw new Error('Usuário já cadastrado');

    const passwordHash = hashSync(password, 12);

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return userRepository.save(user);
  }
}

export { UserService };