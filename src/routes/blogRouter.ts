import express from "express";
const router = express.Router();
import {
  postblog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController";

router.post("/", postblog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.patch("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
