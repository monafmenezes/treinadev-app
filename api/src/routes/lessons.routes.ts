import { Router } from "express";
import LessonController from "../controllers/Lessons.controller";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const lessonRoutes = Router();

lessonRoutes.post('/', ensureAuthMiddleware, checkAdmMiddleware, LessonController.store)
lessonRoutes.get('/',  ensureAuthMiddleware, LessonController.index);
lessonRoutes.get('/:id', ensureAuthMiddleware, LessonController.list);
lessonRoutes.patch('/:id', ensureAuthMiddleware, checkAdmMiddleware, LessonController.update);
lessonRoutes.delete('/:id', ensureAuthMiddleware, checkAdmMiddleware, LessonController.delete);

export default lessonRoutes;