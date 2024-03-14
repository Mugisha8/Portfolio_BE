import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import mainRouter from "./routes/index";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to Portfolio Backend",
  });
});

app.use("/api/v1", mainRouter);

app.use("/*", (req: Request, res: Response) => {
  res.status(404).json({
    status: "error",
    message: "Invalid URL",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
