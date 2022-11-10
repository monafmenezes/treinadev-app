import { AppDataSource } from "../../data-source";
import { Lesson } from "../../entities/lesson.entity";

const lessonsListService = async () => {
  const lessonRepository = AppDataSource.getRepository(Lesson);
  const lesson = await lessonRepository.find();
  return lesson;
};

export default lessonsListService;
