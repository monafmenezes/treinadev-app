import { Router } from "express";
import CourseController from "../controllers/Courses.controller";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const courseRoutes = Router();

courseRoutes.post(
  "/",
  checkAdmMiddleware,
  ensureAuthMiddleware,
  CourseController.store
);
courseRoutes.get("/", ensureAuthMiddleware, CourseController.index);
courseRoutes.get("/:id", ensureAuthMiddleware, CourseController.list);
courseRoutes.patch(
  "/:id",
  checkAdmMiddleware,
  ensureAuthMiddleware,
  CourseController.update
);
courseRoutes.delete(
  "/:id",
  checkAdmMiddleware,
  ensureAuthMiddleware,
  CourseController.delete
);

export default courseRoutes;
