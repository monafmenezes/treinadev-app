import { AppDataSource } from "../../data-source";
import { Lesson } from "../../entities/lesson.entity";
import AppError from "../../errors/AppError";
import { ILessonId } from "../../interfaces/lesson.interfaces";

const deleteLessonService = async ({ id }: ILessonId) => {
  const lessonRepository = AppDataSource.getRepository(Lesson);
  const lesson = await lessonRepository.findOne({ where: { id } });

  if (!lesson) {
    throw new AppError("O modulo não foi encontrado", 404);
  }

  return await lessonRepository.delete(id);
};

export default deleteLessonService;
