"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.deleteBlog = exports.getBlogById = exports.getBlogs = exports.postblog = void 0;
const blogservices_1 = require("../services/blogservices");
//post blog
const postblog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield (0, blogservices_1.newBlog)({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
        });
        res.status(200).json({
            status: "success",
            message: "Blog was created successfully!",
            data: blog,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            error: error.message,
        });
    }
});
exports.postblog = postblog;
// retrieve blogs
const getBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield (0, blogservices_1.getBlog)();
        res.status(200).json({
            status: "retrieved successfully",
            data: blogs,
        });
    }
    catch (err) {
        res.status(400).json({
            status: "error",
            error: err.message,
        });
    }
});
exports.getBlogs = getBlogs;
// retrieve blog by ID
const getBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const blog = yield (0, blogservices_1.getSingleBlog)(id);
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
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
});
exports.getBlogById = getBlogById;
// delete Blog
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const blog = yield (0, blogservices_1.deleteBlogById)(id);
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
    }
    catch (error) {
        return res.status(400).json({
            status: "failed",
            error,
        });
    }
});
exports.deleteBlog = deleteBlog;
//Update the blog
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield (0, blogservices_1.getSingleBlog)(req.params.id);
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
        yield blog.save();
        res.status(200).json({
            status: "success",
            message: "Blog was updated successfully!",
            blog,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
});
exports.updateBlog = updateBlog;
