import { AppDataSource } from "../../data-source";
import { Course } from "../../entities/course.entity";
import AppError from "../../errors/AppError";
import { ICourseCreate } from "../../interfaces/course.interfaces";

const createCourseService = async ({ title, description }: ICourseCreate) => {
  const courseRepository = AppDataSource.getRepository(Course);
  const titleFind = await courseRepository.findOne({ where: { title } });

  if (titleFind) {
    throw new AppError("O curso já existe.", 409);
  }

  const course = new Course();

  course.title = title;
  course.description = description;
  course.created = new Date();

  courseRepository.create(course);

  await courseRepository.save(course);

  return course;
};

export default createCourseService;
