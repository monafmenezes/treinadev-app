export interface IModuleCreate {
  course_id: string;
  title: string;
  description: string;
  created: Date;
}

export interface IModule extends IModuleCreate {
  id: string;
}
