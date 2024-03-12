const express = require('express');
const router = express.Router();
const ctr_dashboard = require('../controller/indexController');

router.get('/', ctr_dashboard.loginPage);
router.get('/dashboard', ctr_dashboard.loginGet);
router.post('/dashboard', ctr_dashboard.loginPost);

module.exports = router;
