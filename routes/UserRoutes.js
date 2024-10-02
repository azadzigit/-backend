// userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/UserController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', auth, getUserProfile);

module.exports = router;
