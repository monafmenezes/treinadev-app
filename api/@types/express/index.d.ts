import * as express from "express";
import { ICouseCreate } from "../../src/interfaces/course.interfaces";
import { ILessonCreate } from "../../src/interfaces/lesson.interfaces";
import { IModuleCreate } from "../../src/interfaces/module.interfaces";
import {
  IUserCreate,
  IUserSession,
} from "../../src/interfaces/user.interfaces";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
      validUser: IUserCreate;
      validCourse: ICouseCreate;
      validLesson: ILessonCreate;
      validModule: IModuleCreate;
      validSession: IUserSession;
    }
  }
}
