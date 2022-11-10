import { AppDataSource } from "../../data-source";
import { Lesson } from "../../entities/lesson.entity";
import AppError from "../../errors/AppError";
import { ILessonId } from "../../interfaces/lesson.interfaces";

const lessonListService = async ({ id }: ILessonId) => {
  const lessonRepository = AppDataSource.getRepository(Lesson);
  const lesson = await lessonRepository.findOne({ where: { id } });

  if (!lesson) {
    throw new AppError("Id não localizado.", 404);
  }

  return lesson;
};

export default lessonListService;
