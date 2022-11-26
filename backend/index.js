const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

app.get("/", (req, res) => {
  res.json("Api is Working...");
});

app.listen(8800, () => {
  console.log("Backend is Connected...");
});
