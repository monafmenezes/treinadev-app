import { AppDataSource } from "../../data-source";
import { Course } from "../../entities/course.entity";
import AppError from "../../errors/AppError";
import { ICourseId } from "../../interfaces/course.interfaces";

const courseListService = async ({ id }: ICourseId) => {
  const courseRepository = AppDataSource.getRepository(Course);
  const course = await courseRepository.findOne({ where: { id }});

  if (!course) {
    throw new AppError("Id não localizado.", 404);
  }

  return course;
}

export default courseListService;
