import { Request, Response} from "express";
import { userRepository } from '../repository/userRepository';
import { UserService } from "../services/UserService";

class UserController {
    async index(req: Request, res: Response) {
      try {
        const findAll = await userRepository.find();
        return res.status(201).json(findAll)
      } catch (error) {
        console.log(error)
      }
    }
    
    async userById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const findUser = await userRepository.findOne({ where: { id } });

            return res.status(200).json(findUser);
        } catch (e: any | unknown) {
            throw new Error(e.message);
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
          throw new Error(e.message);
        } 
    }

    async login(req: Request, res: Response){
        try {
          const {email, password} = req.body;
          const user = await userRepository.find({where:{
            email,
            password
          }})
          if(!user){
            return res.status(401).json({message:"Usuario não existe"})
          }
          return res.status(200).json("login efetuado")
          
        } catch (error) {
          console.log(error)
        }
      }

    async update(req: Request, res: Response) {
      try {
          const {id} = req.params;
          const {name,email,password,balance} = req.body;
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
      } catch (error) {
          console.log(error)
      }
    
    }

    async delete(req: Request, res: Response){
        try {
          const { id } = req.params;
          const delUser = userRepository.delete(id);
          return res.status(200).json("usuario deletado com sucesso");
      } catch (error) {
          console.log(error)    
        }
    }

};

export default new UserController();




