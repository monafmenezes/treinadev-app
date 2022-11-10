import * as yup from "yup";
import { SchemaOf } from "yup";
import { NextFunction, Request, Response } from "express";
import { IModuleCreate } from "../interfaces/module.interfaces";

export const createModuleSchema: SchemaOf<IModuleCreate> = yup.object().shape({
  title: yup.string().required("Título é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
  courseId: yup.string().required("O id do curso é obrigatório"),
});

export const validateModuleCreation =
  (schema: SchemaOf<IModuleCreate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.validModule = validatedData;
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
