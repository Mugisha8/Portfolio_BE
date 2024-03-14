"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogRouter_1 = __importDefault(require("./blogRouter"));
const mainRouter = express_1.default.Router();
const commentRouter_1 = __importDefault(require("./commentRouter"));
mainRouter.use("/blogs", blogRouter_1.default);
mainRouter.use("/blogs", commentRouter_1.default);
exports.default = mainRouter;
