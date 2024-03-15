const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ctr_projects = require('../controller/projectsController');

router.get('/', ctr_projects.projectsAll);
router.get('/create', ctr_projects.projectsGet)
router.post('/create', ctr_projects.projectsAdd)
router.delete('/id', ctr_projects.projectsDelete)
router.put('/id', ctr_projects.projectsUpdate)

module.exports = router;
