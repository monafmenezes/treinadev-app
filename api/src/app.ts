import "reflect-metadata";
import express from "express";
import "express-async-errors";
import "dotenv/config";
import ErrorMiddleware from "./middlewares/error.middleware";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swagger.json";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/terms", (req, res) => {
  return res.json({
    message: "Termos de Serviço",
  });
});

app.use("/v1", routes);
app.use(ErrorMiddleware);

export default app;
