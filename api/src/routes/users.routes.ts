import { Router } from "express";
import UserController from "../controllers/Users.controller";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import {
  createUserSchema,
  validateUserCreation,
} from "../validation/userCreate.schema";

const userRoutes = Router();

userRoutes.post(
  "/",
  validateUserCreation(createUserSchema),
  UserController.store
);
userRoutes.get("/", checkAdmMiddleware, UserController.index);
userRoutes.get("/:id", ensureAuthMiddleware, UserController.list);
userRoutes.patch("/:id", ensureAuthMiddleware, UserController.update);
userRoutes.delete("/:id", ensureAuthMiddleware, UserController.delete);

export default userRoutes;
