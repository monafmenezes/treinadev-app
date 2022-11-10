export interface IModuleCreate {
  title: string;
  description: string;
  courseId: string;
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