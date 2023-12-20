const express = require('express');
const router = express.Router();
const tokoController = require('../controllers/tokoController');

router.post("/api/toko", tokoController.createToko);
router.get("/api/get/toko", tokoController.getToko);
router.put("/api/toko/:id", tokoController.ubahToko);

module.exports = router;
