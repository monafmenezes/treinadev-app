import { AppDataSource } from "../../data-source";
import { Module } from "../../entities/module.entity";
import AppError from "../../errors/AppError";
import { IModule, IModuleUpdate } from "../../interfaces/module.interfaces";

const updateModuleService = async ({
  id,
  title,
  description,
}: IModuleUpdate) => {
  const moduleRepository = AppDataSource.getRepository(Module);
  const module = await moduleRepository.findOne({ where: { id } });
  if (!module) {
    throw new AppError("O curso não foi encontrado", 404);
  }

  title ? (module.title = title) : module.title;
  description ? (module.description = description) : module.description;

  await moduleRepository.save(module);

  return module;
};

export default updateModuleService;
