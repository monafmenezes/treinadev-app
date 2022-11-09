import { Router } from "express";
import CourseController from "../controllers/Courses.controller";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { createCourseSchema, validateCourseCreation } from "../validations/courseCreate.validation";

const courseRoutes = Router();

courseRoutes.post(
  "/", validateCourseCreation(createCourseSchema),
  ensureAuthMiddleware,
  checkAdmMiddleware,
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
