import { Router } from "express";
import courseRoutes from "./courses.routes";

import userRoutes from "./users.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/courses", courseRoutes);
