const express = require('express');
const authMiddleware = require('../middlewares/auth');
const { login, register, homePage } = require('../controllers');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/home', authMiddleware, homePage);
// router.get('/protected', authMiddleware, (req, res) => {
//     res.json({ message: 'Protected route accessed' });
// });

module.exports = router;