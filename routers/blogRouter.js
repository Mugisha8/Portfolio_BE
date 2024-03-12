import express from "express";

import { postblog } from "../controllers/blogController.js";
import { getblogs } from "../controllers/blogController.js";
import { getBlogByID } from "../controllers/blogController.js";
import { Updateblog } from "../controllers/blogController.js";
import { deleteblog } from "../controllers/blogController.js";
const blogsRouter = express.Router();

blogsRouter.post("/blogs", postblog);
blogsRouter.get("/blogs", getblogs);
blogsRouter.get("/blogs/:id", getBlogByID);
blogsRouter.put("/blogs/:id", Updateblog);
blogsRouter.delete("/blogs/:id", deleteblog);

export default blogsRouter;
