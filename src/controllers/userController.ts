import { Request, Response} from "express";
import { Repository } from "typeorm";
import { User } from '../database/entities/user';
import { AppDataSource } from '../data-source';

class UserController {
    userRepo: Repository<User>;
    constructor() {
        this.userRepo = AppDataSource.getRepository(User);
    }

    index(){

    }
    async create(req: Request, res: Response) {
        try {
        const user = req.body;
        console.log(user);
        const create = await this.userRepo.create(user);
        console.log(create);
        const result = await this.userRepo.save(create);
        console.log(result);

        return res.json({
            result
        });
        } catch (e: any) {
            console.log(e.message);
        } 
    }
    update(){

    }
    delete(){

    }

};

export default new UserController();