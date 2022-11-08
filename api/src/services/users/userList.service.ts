import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IUser } from "../../interfaces/user.interfaces";

const userListService = async ({ id }: IUser) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id }});

  if (!user) {
    throw new AppError("Id não localizado.", 404);
  }

  return user;
}

export default userListService;
