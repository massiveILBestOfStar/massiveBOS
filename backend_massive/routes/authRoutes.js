const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post("/api/register", userController.register);
router.post("/api/login", userController.login);
router.get('/api/get/user', userController.getUserData);

module.exports = router;
