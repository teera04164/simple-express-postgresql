const { Router } = require('express');
const router = new Router();
const cousreController = require('../controllers/course.controller')
const { validate, createCourseSchemas } = require('../utils/validator')

router.get('/courses', cousreController.findAll);
router.post('/courses', validate(createCourseSchemas), cousreController.create);

module.exports = router;