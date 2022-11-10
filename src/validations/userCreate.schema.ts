import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserCreate } from "../interfaces/user.interfaces";
import { NextFunction, Request, Response } from "express";

export const createUserSchema: SchemaOf<IUserCreate> = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
  username: yup.string().required("Username é obrigatório"),
  isAdmin: yup.boolean().required("Verificação de cargo é obrigatório"),
});

export const validateUserCreation =
  (schema: SchemaOf<IUserCreate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.validUser = validatedData;
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
