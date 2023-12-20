const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();
const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "massive_db",
  });
  
  db.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection failed: " + err.stack);
      return;
    }
    console.log("Connected to MySQL database");
    connection.release();
  });

module.exports = db; 