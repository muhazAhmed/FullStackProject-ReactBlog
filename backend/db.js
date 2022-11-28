const mysql = require("mysql2");

const db = mysql.createConnection({
  host : "localhost",
  user : "muhazAhmed",
  password : process.env.PASSWORD,
  database: "blog"
})

module.exports = db