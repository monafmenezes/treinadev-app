import "reflect-metadata";
import express from "express";
import "express-async-errors";
import "dotenv/config";
import ErrorMiddleware from "./middlewares/error.middleware";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(ErrorMiddleware);

export default app