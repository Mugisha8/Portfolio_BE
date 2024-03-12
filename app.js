import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import blogsRouter from "./routers/blogRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

//routings

app.get("/", (res, req) => {
  res.send("wel come To my Blog");
});

app.use("/portfolio", blogsRouter);

//db connection

mongoose
  .connect(MONGO_URL)

  .then(() => {
    console.log("database Connected");
    app.listen(PORT, () => {
      console.log(`Blog Connection on ${PORT}`);
    });
  })

  .catch((error) => {
    console.log("Failed to connect", error);
  });
