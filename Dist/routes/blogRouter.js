"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const blogController_1 = require("../controllers/blogController");
router.post("/", blogController_1.postblog);
router.get("/", blogController_1.getBlogs);
router.get("/:id", blogController_1.getBlogById);
router.patch("/:id", blogController_1.updateBlog);
router.delete("/:id", blogController_1.deleteBlog);
exports.default = router;
