const db = require('../config/database'); // Sesuaikan dengan cara Anda terhubung ke database

exports.createDiskusi = (req, res) => {
    try {
      const {
        username,
        judul_topik,
        deskripsi,
      } = req.body;
  
      // Ambil nama file gambar dari request jika ada
      const foto = req.file ? req.file.filename : null;
  
      const sql =
        'INSERT INTO diskusi (username, judul_topik, deskripsi, foto ) VALUES (?, ?, ?, ?)';
      const values = [
       username,
       judul_topik,
       deskripsi,
       foto
      ];
  
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ success: false, message: 'Product creation failed' });
          return;
        }
  
        console.log('Product created successfully');
        res.status(200).json({ success: true, message: 'Product creation successful', data: result });
      });
    } catch (error) {
      console.error('Error during product creation:', error.message);
      res.status(400).json({ success: false, message: error.message });
    }
  };

  exports.getDiskusi = (req, res) => {
    const sql = 'SELECT * FROM diskusi';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ success: false, message: 'Failed to fetch products' });
      return;
    }

    res.status(200).json({ success: true, data: result });
  });
  }