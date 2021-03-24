const { Router } = require('express');
const router = new Router();
const teacherController = require('../controllers/teacher.controller')
const { validate, createTeacherSchemas } = require('../utils/validator')

router.get('/teachers', teacherController.findAll);
router.post('/teachers', validate(createTeacherSchemas), teacherController.create);

module.exports = router;