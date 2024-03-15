const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin_Ctr = require('../controller/adminController')

/* GET users listing. */
router.post('/signup', admin_Ctr.signup);
router.get('/login', admin_Ctr.getLogin);
router.post('/login', admin_Ctr.postLogin);
router.put('/update', admin_Ctr.userUpdate);

module.exports = router;
