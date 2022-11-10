export interface ILessonCreate {
  moduleId: string;
  title: string;
  description: string;
  date_lesson: Date;
}

export interface ILesson extends ILessonCreate {
  id: string;
}

export interface ILessonId {
  id: string;
}

export interface ILessonUpdate extends ILessonId {
  title: string;
  description: string;
}
