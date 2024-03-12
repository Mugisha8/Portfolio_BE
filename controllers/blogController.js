import blogs from "../models/blogModel.js";

//post blog
export const postblog = async (req, res) => {
  try {
    const existingName = await blogs.findOne({ title: req.body.title });

    if (existingName) {
      res.status(400).json({
        status: "400",
        message: "blog name Already exists",
      });
    }

    const blog = await blogs.create(req.body);
    res.status(200).json({ message: "blog Added Successfully", blog });
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

// retrieve blogs

export const getblogs = async (req, res) => {
  try {
    const myblogs = await blogs.find({});
    res.status(200).json(myblogs);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

// retrieve blog by ID

export const getBlogByID = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogs.findById(id);
    if (!blog) {
      res.status(404).json(`blog of this Id ${id} not found`);
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

//Update Blog

export const Updateblog = async (req, res) => {
  try {
    const { id } = req.params;
    const editblog = await blogs.findByIdAndUpdate(id, req.body);
    if (!editblog) {
      res.status(404).json(`Invalid Id ${id}`);
    }

    const UpdateBlog = await blogs.findById(id);
    res.status(200).json(UpdateBlog);
  } catch (error) {
    res.status(500), res.json({ message: error.message });
  }
};

// Deleting blog

export const deleteblog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteblog = await blogs.findByIdAndDelete(id);
    if (!deleteblog) {
      res.status(404).json(`Invalid ID ${id} not found`);
    }

    res.status(200).json(`successfully Deleted`);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};
