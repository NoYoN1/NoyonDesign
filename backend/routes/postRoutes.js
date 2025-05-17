const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Мэдээ нэмэх
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const saved = await newPost.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Нэмэхэд алдаа гарлаа" });
  }
});

// Бүх мэдээ авах
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Мэдээг авахад алдаа гарлаа" });
  }
});

// Нэг мэдээ авах
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Олдсонгүй" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Мэдээг авахад алдаа" });
  }
});

// Мэдээ засах
router.put("/:id", async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Засахад алдаа" });
  }
});

// Мэдээ устгах
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Амжилттай устгалаа" });
  } catch (err) {
    res.status(500).json({ error: "Устгахад алдаа" });
  }
});

module.exports = router;
