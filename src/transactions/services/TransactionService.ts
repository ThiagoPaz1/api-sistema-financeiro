import { TransactionRequest } from '../../interfaces/transactionRequest';
import { transactionRepository } from '../repository/transactionRepository';

class TransactionService {
  async create({ value, category, type }: TransactionRequest) {
    if (!value) throw new Error('É requerido o valor!');

    const userAlreadyExists = await transactionRepository.findOneBy({ category });

    if (userAlreadyExists) throw new Error('Usuário já cadastrado');

    const transaction = transactionRepository.create({
      value,
      category,
      type
    })

    return transactionRepository.save(transaction);
  }
}

export { TransactionService };
