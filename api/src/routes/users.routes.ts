import { Router } from "express";
import UserController from "../controllers/Users.controller";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { createUserSchema, validateUserCreation } from "../validation/userCreate.schema";

const userRoutes = Router();

userRoutes.post('/users', validateUserCreation(createUserSchema), UserController.store);
userRoutes.get('/users', checkAdmMiddleware, UserController.index);
userRoutes.get('/users/:id', ensureAuthMiddleware, UserController.list);
userRoutes.patch('/users/:id', ensureAuthMiddleware, UserController.updtate);
userRoutes.delete('/users/:id', ensureAuthMiddleware, UserController.delete);

export default userRoutes;