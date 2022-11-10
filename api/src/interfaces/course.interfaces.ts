export interface ICourseCreate {
  title: string;
  description: string;
}

export interface ICourse extends ICourseCreate {
  id: string;
}

export interface ICourseId {
  id: string;
}
