import { AppDataSource } from "../../data-source";
import { Module } from "../../entities/module.entity";
import AppError from "../../errors/AppError";
import { IModuleId } from "../../interfaces/module.interfaces";

const deleteModuleService = async ({ id }: IModuleId) => {
  const moduleRepository = AppDataSource.getRepository(Module);
  const module = await moduleRepository.findOne({ where: { id } });

  if (!module) {
    throw new AppError("O modulo não foi encontrado", 404);
  }

  return await moduleRepository.delete(id);
};

export default deleteModuleService;
