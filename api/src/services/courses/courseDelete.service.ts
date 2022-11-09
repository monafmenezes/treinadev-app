import { AppDataSource } from "../../data-source";
import { Course } from "../../entities/course.entity";
import AppError from "../../errors/AppError";
import { ICourseId } from "../../interfaces/course.interfaces";

const deleteCourseService = async ({ id }: ICourseId) => {
  const courseRepository = AppDataSource.getRepository(Course);
  const course = await courseRepository.findOne({ where: { id }});

  if (!course) {
    throw new AppError("O curso não foi encontrado", 404);
  }

  return await courseRepository.delete(id);

};

export default deleteCourseService;