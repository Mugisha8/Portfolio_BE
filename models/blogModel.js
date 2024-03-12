import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please enter your title"],
    },
    content: {
      type: String,
      required: [true, "please enter the blog Description"],
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestmaps: true,
  }
);

const blogs = mongoose.model("blogs", blogSchema);
export default blogs;
