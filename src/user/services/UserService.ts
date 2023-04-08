import { UserRequest } from '../../interfaces/userRequest';
import { transactionRepository } from '../../transactions/repository/transactionRepository';
import { userRepository } from '../repository/userRepository';
import { hashPassword } from '../../utils/crypto.util';
import { Transactions } from '../../database/entities/transactions';


class UserService {
  async create({ name, email, password }: UserRequest): Promise<UserRequest> {
    if (!email) throw new Error('É requerido o email!');

    const userAlreadyExists = await userRepository.findOne({
      where: { email }
     });

    if (userAlreadyExists) throw new Error('Usuário já cadastrado');

    const passwordHash = hashPassword(password);

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return userRepository.save(user);
  }

  async createTransaction({ id, value, category, type }: Transactions) {
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
