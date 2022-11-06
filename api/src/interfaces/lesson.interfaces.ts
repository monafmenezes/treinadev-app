export interface ILessonCreate {
  module_id: string;
  title: string;
  description: string;
  created: Date;
  date_lesson: Date;
}

export interface ILesson extends ILessonCreate {
  id: string;
}
