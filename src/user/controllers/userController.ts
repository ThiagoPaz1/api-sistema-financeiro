import { Request, Response} from "express";
import { userRepository } from '../repository/userRepository';

class UserController {
    async index(req: Request, res: Response) {}
    async create(req: Request, res: Response) {
        try {
          const user = req.body;
          const create = userRepository.create(user);
          const result = await userRepository.save(create);

          return res.status(201).json(result);
        } catch (e: any | unknown) {
          throw new Error(e.message);
        } 
    }
    update(){

    }
    delete(){

    }

};

export default new UserController();