import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import moduleListService from "../services/modules/moduleList.service";
import moduleCreateService from "../services/modules/modulesCreate.service";
import deleteModuleService from "../services/modules/modulesDelete.service";
import modulesListService from "../services/modules/modulesList.service";
import updateModuleService from "../services/modules/modulesUpdate.service";


export default class ModuleController {
  static async store(req: Request, res: Response) {
    const { title, description, courseId } = req.validModule;
    const module = await moduleCreateService({ title, description, courseId });

    return res.status(201).json(instanceToPlain(module));
  }

  static async index(req: Request, res: Response) {
    const module = await modulesListService();

    return res.json(instanceToPlain(module));
  }

  static async list(req: Request, res: Response) {
    const { id } = req.params;

    const module = await moduleListService({ id });

    return res.json(module);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;

    const module = await updateModuleService({ id, title, description });

    return res.json(module);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteModuleService({ id });

    return res.status(204).json();
  }
}
