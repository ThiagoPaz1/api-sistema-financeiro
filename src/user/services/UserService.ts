import { hashSync } from 'bcryptjs';
import { UserRequest } from '../../interfaces/userRequest';
import { transactionRepository } from '../../transactions/repository/transactionRepository';
import { userRepository } from '../repository/userRepository';


class UserService {
  async create({ name, email, password }: UserRequest) {
    if (!email) throw new Error('É requerido o email!');

    const userAlreadyExists = await userRepository.findOne({
      where: { email }
     });

    if (userAlreadyExists) throw new Error('Usuário já cadastrado');

    const passwordHash = hashSync(password, 12);

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return userRepository.save(user);
  }

  async createTransaction({ id, value, category, type }: any) {
    const idTransaction = await transactionRepository.findOneBy({ id });

    if (!idTransaction) {
      console.error('Conta não existe!');
    };

    const newTransaction = await transactionRepository.create({
      value,
      category,
      type,
    });

    return transactionRepository.save(newTransaction);
  }
}

export { UserService };
