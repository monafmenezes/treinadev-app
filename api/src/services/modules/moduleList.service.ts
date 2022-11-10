import { AppDataSource } from "../../data-source";
import { Module } from "../../entities/module.entity";
import AppError from "../../errors/AppError";
import { IModuleId } from "../../interfaces/module.interfaces";

const moduleListService = async ({ id }: IModuleId) => {
  const moduleRepository = AppDataSource.getRepository(Module);
  const module = await moduleRepository.findOne({ where: { id } });

  if (!module) {
    throw new AppError("Id não localizado.", 404);
  }

  return module;
};

export default moduleListService;
