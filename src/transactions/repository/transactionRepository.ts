import { AppDataSource } from '../../data-source';
import { Transactions } from '../../database/entities/transactions';

export const transactionRepository = AppDataSource.getRepository(Transactions);
