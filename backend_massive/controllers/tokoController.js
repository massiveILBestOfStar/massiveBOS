const db = require('../config/database'); // Sesuaikan dengan cara Anda terhubung ke database

exports.createToko = (req, res) => {
    try {
        const {
          nama_toko,
          alamat_toko,
          email,
          sistem_pembayaran,
          no_telepon,
          deskripsi_toko,
        } = req.body;
        const sql =
          "INSERT INTO toko (nama_toko, alamat_toko, email, sistem_pembayaran, no_telepon, deskripsi_toko) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [
          nama_toko,
          alamat_toko,
          email,
          sistem_pembayaran,
          no_telepon,
          deskripsi_toko,
        ];
    
        db.query(sql, values, (err, result) => {
          if (err) {
            console.error("Error executing query:", err);
            res
              .status(500)
              .json({ success: false, message: "Registration open shop failed" });
            return;
          }
    
          console.log("Registered open shop successfully");
          res
            .status(200)
            .json({ success: true, message: "Registration profile successful" });
        });
      } catch (error) {
        console.error("Error during registration open shop:", error.message);
        res.status(400).json({ success: false, message: error.message });
      }
  };
  
  exports.getToko = (req, res) => {
    const sql = "SELECT * FROM toko";
  
    db.query(sql, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res
          .status(500)
          .json({ success: false, message: "Error fetching data toko" });
        return;
      }
  
      res.status(200).json(result);
    });
  }

exports.ubahToko =(req, res) => {
    const { id } = req.params;
    const {
      nama_toko,
      alamat_toko,
      email,
      no_telepon,
      sistem_pembayaran,
      deskripsi_toko,
    } = req.body;
  
    const sql =
      "UPDATE toko SET nama_toko=?, alamat_toko=?, email=?, no_telepon=?, sistem_pembayaran=?, deskripsi_toko=? WHERE id=?";
  
    db.query(
      sql,
      [
        nama_toko,
        alamat_toko,
        email,
        no_telepon,
        sistem_pembayaran,
        deskripsi_toko,
        id,
      ],
      (err, result) => {
        if (err) {
          console.error("Error updating toko data:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          res.json(result);
        }
      }
    );
}