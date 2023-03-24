import { Request, Response} from "express";
import { userRepository } from '../repository/userRepository';
import { UserService } from "../services/UserService";

class UserController {
    async index(req: Request, res: Response) {
      try {
        const findAll = await userRepository.find();
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

    async create(req: Request, res: Response) {
        try {
          const { name, email, password, } = req.body;

          const createUser = new UserService();

          const user = await createUser.create({
            name,
            email,
            password
          });

          return res.status(201).json(user);
        } catch (e: any | unknown) {
          return console.error(e.message);
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

    async delete(req: Request, res: Response){
        try {
          const { id } = req.params;
          await userRepository.delete(id);
          return res.status(204).json("usuario deletado com sucesso");
      } catch (e: any | unknown) {
          console.log(e.message)
        }
    }

};

export default new UserController();
