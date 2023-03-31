import { validate } from "class-validator";
import { Request, Response, NextFunction } from 'express';
import { userRepository } from '../repository/userRepository';

class UserController {
    async index(req: Request, res: Response) {
      try {
        const findAll = await userRepository.find({
          relations: {
            transactions: true
          }
        });
        return res.status(200).json(findAll)
      } catch (e: any | unknown) {
        return console.error(e.message)
      }
    }
    
    async userById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const findUser = await userRepository.findOne({
               where: { id },
               relations: {
                transactions: true,
               } 
              });

            return res.status(200).json(findUser);
        } catch (e: any | unknown) {
            return console.error(e.message);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
          const { name, email, password, } = req.body;

          const user = userRepository.create({
            name,
            email,
            password
          });
          const errors = await validate(user);
          
          if (errors.length > 0)
            return res.status(404).json(errors);
          await userRepository.save(user);
          res.status(201).json(user);
          return next();
        } catch (e: any | unknown) {
          return res.status(404).json({ message: {
            email: `Email já pertence a um usuário`,
            error: e.detail
          } });
        } 
    }

    async login(req: Request, res: Response){
        try {
          const {email, password} = req.body;
          const user = await userRepository.find({
            where: {
            email,
            password
          },
          relations: {
            transactions: true,
          }
        });

          if(!user){
            return res.status(401).json({message:"Usuario não existe"})
          }
          return res.status(200).json("login efetuado")
          
        } catch (e: any | unknown) {
          console.error(e.message)
        }
      }

    async update(req: Request, res: Response) {
      try {
          const { id } = req.params;
          const { name, email, password, balance } = req.body;
          const userUpdate = await userRepository.update({
              id
          },
          {
              name,
              email,
              password,
              balance
          })
        
         return res.status(201).json(userUpdate)
      } catch (e: any | unknown) {
          console.error(e.message)
      }
    
    }

    async delete(req: Request, res: Response) {
      try {
        const { id } = req.params
        await userRepository.delete(id);
        return res.status(204).json('usuario deletado com sucesso');
      } catch (e: any | unknown) {
        console.log(e.message);
      }
    }

    async deleteAllUsers(req: Request, res: Response) {
        try {
          const user = await userRepository.find() as unknown as string;
          await userRepository.delete(user);
          return res.status(204).json("usuario deletado com sucesso");
      } catch (e: any | unknown) {
          console.log(e.message)
        }
    }

};

export default new UserController();
