import { Request, Response } from "express";
import { transactionRepository } from '../repository/transactionRepository';
import { TransactionService } from "../services/TransactionService";
import { TransactionRequest } from '../../interfaces/transactionRequest';
import { userRepository } from '../../user/repository/userRepository';
import { validate } from "class-validator";


class TransactionController {
  async index(req: Request, res: Response) {
    try {
      const findAll = await new TransactionService().findAll();
      return res.status(200).json(findAll);
    } catch (e: any | unknown) {
      return console.error(e.message);
    }
  }

  async transactionById(req: Request, res: Response) {
    try {
      const { id } = req.params as unknown as TransactionRequest;
      const idTransaction = id as unknown as TransactionRequest;
      const findTransaction = await new TransactionService().findById(idTransaction);

      return res.status(200).json(findTransaction);
    } catch (e: any | unknown) {
      console.error(e.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { value, category, type } = req.body;

      const createTransaction = new TransactionService();

      const transaction = await createTransaction.create({
        value,
        category,
        type,
      });

      const errors = await validate(transaction);

      if (errors.length > 0) return res.status(404).json({ message: errors });

      return res.status(201).json(transaction);
    } catch (e: any | unknown) {
      console.error(e.message);
    }
  }

  async createUserTransaction(req: Request, res: Response) {
    const { value, category, type } = req.body;
    const { id } = req.params;

    try {
      const userId = await userRepository.findOne({ where: { id } });

      if (!userId) {
        return res.status(404).json({ message: 'Usuário não encontrado!' });
      }

      const newUserTransaction = transactionRepository.create({
        value,
        category,
        type,
        userId,
      });

      const newBalance = (userId.balance += value);

      if (userId.balance) {
        await userRepository.update(
          {
            id,
          },
          {
            balance: newBalance,
          },
        );

        await transactionRepository.save(newUserTransaction);
        return res.status(201).json(newUserTransaction);
      }

      await transactionRepository.save(newUserTransaction);
      return res.status(201).json(newUserTransaction);
    } catch (e: any | unknown) {
      console.error(e.message);
    }

    return res.status(201).json();
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { value, category, type } = req.body;

      const updateTransaction = new TransactionService();

      const update = await updateTransaction.updateTransaction({
        id,
        value,
        category,
        type,
      });

      return res.status(201).json(update);
    } catch (e: any | unknown) {
      return res.status(404).json({
        message: {
          error: 'Não é possível excluir todos usuários que tenham uma transação',
        },
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await transactionRepository.delete({ id });
      return res.status(204).json({ status: 'success' });
    } catch (e: any | unknown) {
      console.error(e.message);
    }
  }

  async deleteAllTransactions(req: Request, res: Response) {
    try {
      const findAll = (await transactionRepository.find()) as unknown as string;;
      await transactionRepository.delete(findAll);
      return res.status(204).json({ status: 'success' });
    } catch (e: any | unknown) {
      console.error(e.message);
    }
  }
}

export default new TransactionController();
