import { Router } from "express";
import ModuleController from "../controllers/Modules.controller";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import {
  createModuleSchema,
  validateModuleCreation,
} from "../validations/moduleCreate.validation";

const moduleRoutes = Router();

moduleRoutes.post(
  "/",
  validateModuleCreation(createModuleSchema),
  ensureAuthMiddleware,
  checkAdmMiddleware,
  ModuleController.store
);
moduleRoutes.get("/", ensureAuthMiddleware, ModuleController.index);
moduleRoutes.get("/:id", ensureAuthMiddleware, ModuleController.list);
moduleRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  checkAdmMiddleware,
  ModuleController.update
);
moduleRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  checkAdmMiddleware,
  ModuleController.delete
);

export default moduleRoutes;
