import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IUserCreate } from "../../interfaces/user.interfaces";

const createUserService = async ({ username, name, password, isAdmin }: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const usernameFind = await userRepository.findOne({ where: { name } })

  if (usernameFind) {
    throw new AppError("Já existe o username escolhido", 409);
  }

  const hashedPassword = await hash(password, 8);

  const user = new User();

  user.name = name;
  user.password = hashedPassword;
  user.username = username;
  user.isAdmin = isAdmin;

  userRepository.create(user);

  await userRepository.save(user);

  return user;
}

export default createUserService;
