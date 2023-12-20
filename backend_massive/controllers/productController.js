const db = require('../config/database'); // Sesuaikan dengan cara Anda terhubung ke database

exports.createProducts = (req, res) => {
    try {
      const {
        nama_product,
        min_order,
        max_order,
        harga_kg,
        deskripsi_product,
        kategori,
        stok,
        toko_id, 
      } = req.body;
  
      // Ambil nama file gambar dari request jika ada
      const image = req.file ? req.file.filename : null;
  
      const sql =
        'INSERT INTO product (nama_product, min_order, max_order, harga_kg, deskripsi_product, kategori, stok, image, toko_id ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const values = [
        nama_product,
        min_order,
        max_order,
        harga_kg,
        deskripsi_product,
        kategori,
        stok,
        image,
        toko_id, 
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

  exports.getProducts = (req, res) => {
    const sql = 'SELECT * FROM product';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ success: false, message: 'Failed to fetch products' });
      return;
    }

    res.status(200).json({ success: true, data: result });
  });
  }

// Update a product by ID
exports.updateProduct = (req, res) => {
    try {
      const { id } = req.params;
      const {
        nama_product,
        min_order,
        max_order,
        harga_kg,
        deskripsi_product,
        kategori,
        stok,
        toko_id,
      } = req.body;
  
      // Ambil nama file gambar dari request jika ada
      const image = req.file ? req.file.filename : null;
  
      const sql =
        'UPDATE product SET nama_product=?, min_order=?, max_order=?, harga_kg=?, deskripsi_product=?, kategori=?, stok=?, image=?, toko_id=? WHERE id=?';
      const values = [
        nama_product,
        min_order,
        max_order,
        harga_kg,
        deskripsi_product,
        kategori,
        stok,
        image,
        toko_id,
        id,
      ];
  
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ success: false, message: 'Product update failed' });
          return;
        }
  
        console.log('Product updated successfully');
        res.status(200).json({ success: true, message: 'Product update successful', data: result });
      });
    } catch (error) {
      console.error('Error during product update:', error.message);
      res.status(400).json({ success: false, message: error.message });
    }
  };

 // Delete a product by ID
exports.deleteProduct = (req, res) => {
    try {
      const { id } = req.params;
  
      const sql = 'DELETE FROM product WHERE id=?';
      const values = [id];
  
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ success: false, message: 'Product deletion failed' });
          return;
        }
  
        console.log('Product deleted successfully');
        res.status(200).json({ success: true, message: 'Product deletion successful', data: result });
      });
    } catch (error) {
      console.error('Error during product deletion:', error.message);
      res.status(400).json({ success: false, message: error.message });
    }
  };
   