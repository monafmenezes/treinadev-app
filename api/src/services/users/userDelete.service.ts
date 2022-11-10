import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IUserId } from "../../interfaces/user.interfaces";

const deleteUserService = async ({ id }: IUserId) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user) {
    throw new AppError("O usuário não foi encontrado", 404);
  }

  return await userRepository.delete(id);
};

export default deleteUserService;
