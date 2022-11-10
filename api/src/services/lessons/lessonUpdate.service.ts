import { AppDataSource } from "../../data-source";
import { Lesson } from "../../entities/lesson.entity";
import AppError from "../../errors/AppError";
import { ILessonUpdate } from "../../interfaces/lesson.interfaces";

const updateLessonService = async ({
  id,
  title,
  description,
}: ILessonUpdate) => {
  const lessonRepository = AppDataSource.getRepository(Lesson);
  const lesson = await lessonRepository.findOne({ where: { id } });
  if (!lesson) {
    throw new AppError("O curso não foi encontrado", 404);
  }

  title ? (lesson.title = title) : lesson.title;
  description ? (lesson.description = description) : lesson.description;

  await lessonRepository.save(lesson);

  return lesson;
};

export default updateLessonService;
