import { Router } from "express";
import courseRoutes from "./courses.routes";
import lessonRoutes from "./lessons.routes";
import moduleRoutes from "./modules.routes";
import userRoutes from "./users.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/courses", courseRoutes);
routes.use("/lessons", lessonRoutes);
routes.use('/modules', moduleRoutes);

export default routes;
