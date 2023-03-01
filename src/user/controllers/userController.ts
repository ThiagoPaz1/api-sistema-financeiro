import { Request, Response} from "express";
import { userRepository } from '../repository/userRepository';

class UserController {
    async index(req: Request, res: Response) {}
    
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
          const user = req.body;
          const create = userRepository.create(user);
          const result = await userRepository.save(create);

          return res.status(201).json(result);
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
            return res.json({message:"Usuario não existe"})
          }
          return res.json("login efetuado")
          
        } catch (error) {
          console.log(error)
          
        }
    }

    async update(req: Request, res: Response) {
        const user = req.body;

    }

    async delete(){

    }

};

export default new UserController();