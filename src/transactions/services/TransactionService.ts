import { TransactionRequest } from '../../interfaces/transactionRequest';
import { transactionRepository } from '../repository/transactionRepository';

class TransactionService {
  async findAll() {
    const findAll = await transactionRepository.find();
    return findAll;
  }

  async findById({ id }: TransactionRequest) {
    const findTransactionById = await transactionRepository.findOne({ where:
      { id },
      relations: {
        userId: true
      } 
    });
    return findTransactionById;
  }

  async create({ value, category, type }: TransactionRequest) {
    if (!value) throw new Error('É requerido o valor!');

    const transaction = await transactionRepository.create({
      value,
      category,
      type
    })

    return transactionRepository.save(transaction);
  }

  async updateTransaction({id, value, category, type} : TransactionRequest) {
    const updateTransaction = await transactionRepository.update(
      { id }, {
      value,
      category,
      type,
    })

    return updateTransaction;
  }
}

export { TransactionService };
