const express = require('express');
const router = express.Router();
const diskusiController = require('../controllers/diskusiController');
const multer = require("multer");


// Konfigurasi Multer untuk menangani unggahan file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './diskusi');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); 
    },
  });
  
  const upload = multer({ storage: storage });

router.post("/api/diskusi",upload.single("foto"),diskusiController.createDiskusi);
router.get("/api/get/diskusi",diskusiController.getDiskusi);


module.exports = router;