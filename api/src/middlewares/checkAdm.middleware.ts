import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import AppError from "../errors/AppError";

const checkAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { id }
  });

  if (!user) {
    throw new AppError("Usuário não encontrado.", 404);
  }

  if(!user.isAdmin) {
    throw new AppError("Acesso negado - necessário ser Administrador", 401);
  }

  return next();
};

export default checkAdmMiddleware;
