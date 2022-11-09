import * as yup from "yup";
import { SchemaOf } from "yup";
import { NextFunction, Request, Response } from "express";
import { ICourseCreate } from "../interfaces/course.interfaces";

export const createCourseSchema: SchemaOf<ICourseCreate> = yup.object().shape({
    title: yup.string().required("Título é obrigatório"),
    description: yup.string().required("Descrição é obrigatório"),
});

export const validateCourseCreation =
    (schema: SchemaOf<ICourseCreate>) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const data = req.body;
  
        try {
          const validatedData = await schema.validate(data, {
            abortEarly: false,
            stripUnknown: true,
          });
  
          req.validCourse = validatedData;
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
  