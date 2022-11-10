import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import lessonCreateService from "../services/lessons/lessonCreate.service";
import deleteLessonService from "../services/lessons/lessonDelete.service";
import lessonListService from "../services/lessons/lessonList.service";
import lessonsListService from "../services/lessons/lessonsList.service";
import updateLessonService from "../services/lessons/lessonUpdate.service";

export default class LessonController {
  static async store(req: Request, res: Response) {
    const { title, description, moduleId, date_lesson } = req.validLesson;
    const lesson = await lessonCreateService({
      title,
      description,
      moduleId,
      date_lesson,
    });

    return res.status(201).json(instanceToPlain(lesson));
  }

  static async index(req: Request, res: Response) {
    const lesson = await lessonsListService();

    return res.json(instanceToPlain(lesson));
  }

  static async list(req: Request, res: Response) {
    const { id } = req.params;

    const lesson = await lessonListService({ id });

    return res.json(lesson);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;

    const lesson = await updateLessonService({ id, title, description });

    return res.json(lesson);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteLessonService({ id });

    return res.status(204).json();
  }
}
