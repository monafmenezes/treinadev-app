import "reflect-metadata";
import express from "express";
import "express-async-errors";
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app