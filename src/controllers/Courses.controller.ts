import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createCourseService from "../services/courses/courseCreate.service";
import deleteCourseService from "../services/courses/courseDelete.service";
import courseListService from "../services/courses/courseList.service";
import listCoursesService from "../services/courses/coursesList.service";
import updateCourseService from "../services/courses/courseUpdate.service";

export default class CourseController {
  static async store(req: Request, res: Response) {
    const { title, description } = req.validCourse;
    const course = await createCourseService({ title, description });

    return res.status(201).json(instanceToPlain(course));
  }

  static async index(req: Request, res: Response) {
    const courses = await listCoursesService();

    return res.json(instanceToPlain(courses));
  }

  static async list(req: Request, res: Response) {
    const { id } = req.params;

    const course = await courseListService({ id });

    return res.json(course);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;

    const course = await updateCourseService({ id, title, description });

    return res.json(course);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteCourseService({ id });

    return res.status(204).json();
  }
}
