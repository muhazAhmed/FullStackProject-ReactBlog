const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const route = require ("./route")

app.use(express.json())
app.use("/", route);

app.get("/", (req, res) => {
  res.json("Api is Working...");
});

app.listen(8800, () => {
  console.log("Backend is Connected...");
});
