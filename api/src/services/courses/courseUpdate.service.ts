import { AppDataSource } from "../../data-source";
import { Course } from "../../entities/course.entity";
import AppError from "../../errors/AppError";
import { ICourse } from "../../interfaces/course.interfaces";

const updateCourseService = async ({ id, title, description }: ICourse) => {
  const courseRepository = AppDataSource.getRepository(Course);
  const course = await courseRepository.findOne({ where: { id } });
  if (!course) {
    throw new AppError("O curso não foi encontrado", 404);
  }

  title ? (course.title = title) : course.title;
  description ? (course.description = description) : course.description;

  await courseRepository.save(course);

  return course;
};

export default updateCourseService;
