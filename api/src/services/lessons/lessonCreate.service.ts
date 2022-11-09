import { AppDataSource } from "../../data-source";
import { Lesson } from "../../entities/lesson.entity";
import AppError from "../../errors/AppError";
import { ILessonCreate } from "../../interfaces/lesson.interfaces";


const lessonCreateService = async ({ title, description, moduleId, date_lesson }: ILessonCreate) => {
  const lessonRepository = AppDataSource.getRepository(Lesson);
  const titleFind = await lessonRepository.findOne({ where: { title } });

  if (titleFind) {
    throw new AppError("A aula já existe.", 409);
  }

  const lesson = new Lesson();

 lesson.title = title;
 lesson.description = description;
 lesson.created = new Date();
 lesson.moduleId = moduleId;
 lesson.date_lesson = new Date(date_lesson);

 lessonRepository.create(lesson);

  await lessonRepository.save(lesson);

  return lesson;
};

export default lessonCreateService;
