const express = require('express');
const router = express.Router();
const ctr_projects = require('../controller/projectsController');

router.get('/', ctr_projects.projectsAll);
router.post('/', ctr_projects.projectsAdd)
router.get('/id', ctr_projects.projectsDetail)
router.delete('/id', ctr_projects.projectsDelete)
router.put('/id', ctr_projects.projectsUpdate)

module.exports = router;
