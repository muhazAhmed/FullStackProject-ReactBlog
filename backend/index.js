const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const route = require ("./route")
const postRouts = require("./route")
const cookieParser = require("cookie-parser")

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
