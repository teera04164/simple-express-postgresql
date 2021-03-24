const { body, validationResult} = require('express-validator');

module.exports.validate = (schemas)  => {
    return async (req, res, next) => {
      await Promise.all(schemas.map((schema) => schema.run(req)));

      const result = validationResult(req);
      if (result.isEmpty()) {
        return next();
      }

      const errors = result.array();
      return  res.status(422).send(errors)
    };
  }

module.exports.createCourseSchemas = [
  body('course_name', 'course_name must not be emty').notEmpty().isString(),
  body('course_description', 'course_description must not be emty').notEmpty().isString(),
  body('teacherId', 'teacherId must not be emty').notEmpty().isNumeric(),
]

module.exports.createTeacherSchemas = [
  body('first_name', 'course_name must not be emty').notEmpty().isString(),
  body('last_name', 'course_description must not be emty').notEmpty().isString(),
  body('age', 'teacherId must not be emty').notEmpty().isNumeric(),
]