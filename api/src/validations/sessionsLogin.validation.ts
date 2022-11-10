import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserSession } from "../interfaces/user.interfaces";

export const sessionsLogin: SchemaOf<IUserSession> = yup.object().shape({
  username: yup.string().required("nome é obrigatório"),
  password: yup.string().required("senha é obrigatório"),
});

export const validateSessionsLogin =
  (schema: SchemaOf<IUserSession>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.validSession = validatedData;
        next();
      } catch (err: any) {
        return res.status(400).json({
          status: "error",
          message: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };
