const express = require("express");
const cors = require("cors");
const multer = require("multer");
const uploadFile = require("../Services/storage.service");
const postModel = require("../models/post.mdoel");

const app = express();
app.use(
  cors({
    origin: "https://snap-post.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() }); 

app.get("/", (req, res) => {
  res.send("🚀 SnapPost Backend is Running Successfully!");
});

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  
  const post = await postModel.create({
    
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "post created successfully..!!",
    post,
  });
});
app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    message: "posts fetched successfully....!!",
    posts,
  });
});

app.delete("/delete-post/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await postModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting post",
    });
  }
});

module.exports = app;
