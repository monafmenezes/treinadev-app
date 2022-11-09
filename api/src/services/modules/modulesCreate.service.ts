import { AppDataSource } from "../../data-source";
import { Module } from "../../entities/module.entity";
import AppError from "../../errors/AppError";
import { IModuleCreate } from "../../interfaces/module.interfaces";


const moduleCreateService = async ({ title, description, courseId }: IModuleCreate) => {
  const moduleRepository = AppDataSource.getRepository(Module);
  const titleFind = await moduleRepository.findOne({ where: { title } });

  if (titleFind) {
    throw new AppError("O modulo já existe.", 409);
  }

  const module = new Module();

 module.title = title;
 module.description = description;
 module.courseId = courseId;
 module.created = new Date();

 moduleRepository.create(module);

  await moduleRepository.save(module);

  return module;
};

export default moduleCreateService;
