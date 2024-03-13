const express = require('express');
const router = express.Router();
const user_Ctr = require('../controller/userController')

/* GET users listing. */
router.post('/signup', user_Ctr.signup);
router.post('/login', user_Ctr.login);
router.put('/update', user_Ctr.userUpdate);

module.exports = router;
