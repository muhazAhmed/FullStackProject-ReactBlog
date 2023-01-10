const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const route = require ("./route")
const postRouts = require("./route")
const cookieParser = require("cookie-parser")
const multer = require("multer")

const upload = multer({dest : '../frontend/public'})

app.post('/api/upload', upload.single('file'), function (req, res) {
  return res.status(200).json("Image Uploaded Successfully")
})

app.use(express.json())
app.use(cookieParser())
app.use("/", route);
app.use("/api/posts", postRouts);

app.get("/", (req, res) => {
  res.json("Api is Working...");
});

app.listen(8800, () => {
  console.log("Backend is Connected...");
});
