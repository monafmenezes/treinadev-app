import { Course } from "../entities/course.entity";

export interface IModuleCreate {
  courseId: string;
  title: string;
  description: string;
}

export interface IModule extends IModuleCreate {
  id: string;
}

export interface IModuleId {
  id: string;
}

export interface IModuleUpdate extends IModuleId {
  title: string;
  description: string;
}