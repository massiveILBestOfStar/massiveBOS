const db = require('../config/database'); // Sesuaikan dengan cara Anda terhubung ke database

exports.register = (req, res) => {
    try {
      const { firstName, lastName, emailOrPhone, password, birthdate, gender } = req.body;
      const sql = "INSERT INTO users (firstName, lastName, emailOrPhone, password, birthdate, gender) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [firstName, lastName, emailOrPhone, password, birthdate, gender];
  
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
          return res.status(500).json({ success: false, message: "Registration failed" });
        }
  
        console.log("User registered successfully");
        return res.status(200).json({ success: true, message: "Registration successful" });
      });
    } catch (error) {
      console.error("Error during registration:", error.message);
      return res.status(400).json({ success: false, message: error.message });
    }
  };
  
  exports.login = (req, res) => {
    const { emailOrPhone, password } = req.body;
  
    const sql = "SELECT * FROM users WHERE emailOrPhone = ? AND password = ? LIMIT 1";
    const values = [emailOrPhone, password];
  
    db.query(sql, values, (err, results) => {
      if (err) {
        console.error("Error executing query: " + err.stack);
        return res.status(500).json({ success: false, message: "Login failed" });
      }
  
      if (results.length > 0) {
        console.log("Login successful");
        return res.status(200).json({ success: true, message: "Login successful" });
      } else {
        console.log("Login failed");
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    });
  };

  
exports.getUserData = (req, res) => {
  try {
    const sql = "SELECT * FROM users";
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Error executing query: " + err.stack);
        return res.status(500).json({ success: false, message: "Failed to fetch user data" });
      }

      console.log("User data fetched successfully");
      return res.status(200).json({ success: true, data: results });
    });
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return res.status(500).json({ success: false, message: "Failed to fetch user data" });
  }
};
