import { Request, Response } from "express";
import { transactionRepository } from "../repository/transactionRepository";
import { TransactionService } from "../services/TransactionService";


class TransactionController {
 async index(req: Request, res: Response) {
  try {
    const findAll = await transactionRepository.find();
    return res.status(200).json(findAll);
  } catch (e: any | unknown) {
    return console.error(e.message);
  }
 }

 async transactionById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const findTransaction = await transactionRepository.findOne({
      where: { id },
      relations: {
        userId: true,
      },
    });

    return res.status(200).json(findTransaction);
  } catch (e: any | unknown) {
    console.error(e.message);
  }
 }

 async create(req: Request, res: Response) {
  try {
    const { value, category, type } = req.body;

    const createTransaction = new TransactionService();

    const transaction = createTransaction.create({
      value,
      category,
      type,
    })

    return res.status(201).json(transaction);
  } catch (e: any | unknown) {
    console.error(e.message);
  }
 }

 async update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { value, category, type } = req.body;

    const updateTransaction = await transactionRepository.update(
      {
        id,
      },
      {
        value,
        category,
        type,
      },
    );

    return res.status(201).json(updateTransaction);
  } catch(e: any | unknown) {
    console.error(e.message);
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
}

export default new TransactionController();
