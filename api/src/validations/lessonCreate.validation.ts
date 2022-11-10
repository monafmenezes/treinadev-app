import * as yup from "yup";
import { SchemaOf } from "yup";
import { NextFunction, Request, Response } from "express";
import { ILessonCreate } from "../interfaces/lesson.interfaces";

export const createLessonSchema: SchemaOf<ILessonCreate> = yup.object().shape({
  title: yup.string().required("Título é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
  moduleId: yup.string().required("O id do modulo é obrigatório"),
  date_lesson: yup.date().required("A data da aula é obrigatória"),
});

export const validatLessonCreation =
  (schema: SchemaOf<ILessonCreate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.validLesson = validatedData;
        next();
      } catch (err: any) {
        return res.status(400).json({
          status: "error",
          message: err.errors?.join(","),
        });
      }
    } catch (err) {
      next(err);
    }
  };
