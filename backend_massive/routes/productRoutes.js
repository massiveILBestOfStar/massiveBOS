const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require("multer");


// Konfigurasi Multer untuk menangani unggahan file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); 
    },
  });
  
  const upload = multer({ storage: storage });

router.post("/api/products",upload.single("image"),productController.createProducts);
router.get("/api/get/products",productController.getProducts);
router.put("/api/products/:id", upload.single("image"), productController.updateProduct);
router.delete("/api/products/:id", productController.deleteProduct);

module.exports = router;