const express = require('express');
const router = express.Router();
const contoller = require('../controllers/auth.controller');

router.post('/register', contoller.register);
router.post('/login', contoller.login);
// router.post('/logout', contoller.logout);

module.exports = router;