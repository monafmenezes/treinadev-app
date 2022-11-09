import { AppDataSource } from "../../data-source";
import { Course } from "../../entities/course.entity";

const listCoursesService = async () => {
  const courseRepository = AppDataSource.getRepository(Course);
  const courses = await courseRepository.find();
  return courses;
};

export default listCoursesService;