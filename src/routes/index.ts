import express from "express"
import blogRouter from "./blogRouter";
const mainRouter = express.Router();
import commentRouter from "./commentRouter";

mainRouter.use("/blogs", blogRouter);
mainRouter.use("/blogs", commentRouter);

export default mainRouter;
