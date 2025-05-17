const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Сервер ажиллаж байна.");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB холбогдлоо хө");
    app.listen(PORT, () => console.log(`🚀 Сервер: http://localhost:${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB алдаа да:", err));
