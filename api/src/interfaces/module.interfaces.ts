export interface IModuleCreate {
  course_id: string;
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