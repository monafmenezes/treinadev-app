import { AppDataSource } from "../../data-source";
import { Module } from "../../entities/module.entity";

const modulesListService = async () => {
  const moduleRepository = AppDataSource.getRepository(Module);
  const module = await moduleRepository.find();
  return module;
};

export default modulesListService;
