const express = require('express');
const router = express.Router();
const ctr_dashboard = require('../controller/dashboardController');
const auth = require('../middleware/auth')

router.get('/', ctr_dashboard.getDashboard);

module.exports = router;
