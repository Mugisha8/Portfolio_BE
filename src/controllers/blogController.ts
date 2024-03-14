import { Request, Response } from "express";
import {
  getBlog,
  newBlog,
  getSingleBlog,
  deleteBlogById,
} from "../services/blogservices";

//post blog
export const postblog = async (req: Request, res: Response) => {
  try {
    const blog = await newBlog({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
    });
    res.status(200).json({
      status: "success",
      message: "Blog was created successfully!",
      data: blog,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "error",
      error: error.message,
    });
  }
};

// retrieve blogs

export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await getBlog();
    res.status(200).json({
      status: "retrieved successfully",
      data: blogs,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "error",
      error: err.message,
    });
  }
};

// retrieve blog by ID

export const getBlogById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const blog = await getSingleBlog(id);
    if (!blog) {
      return res.status(404).json({
        status: "error",
        message: "Blog not found",
      });
    }
    return res.status(200).json({
      status: "single blog retrieved",
      data: blog,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};


// delete Blog

export const deleteBlog = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const blog: any = await deleteBlogById(id);
    if (!blog) {
      return res.status(404).json({
        status: "failed",
        message: "Blog not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Blog deleted successfully",
    });
  } catch (error: any) {
    return res.status(400).json({
      status: "failed",
      error,
    });
  }
};

//Update the blog

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const blog: any = await getSingleBlog(req.params.id);
    if (!blog) {
      res.status(404).json({
        status: "error",
        message: "Blog not found",
      });
      return;
    }

    if (req.body.title) {
      blog.title = req.body.title;
    }

    if (req.body.description) {
      blog.description = req.body.description;
    }

   

    await blog.save();
    res.status(200).json({
      status: "success",
      message: "Blog was updated successfully!",
      blog,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
