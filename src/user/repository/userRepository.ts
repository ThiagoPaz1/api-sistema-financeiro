import { AppDataSource } from "../../data-source";
import { User } from "../../database/entities/user";

export const userRepository = AppDataSource.getRepository(User)
