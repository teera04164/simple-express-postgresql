
const { Course } = require('../models')
const {  logger, Response } = require('../utils')

const create = async (req, res) => {
    const buildResp = new Response(res)
    try {
        const { course_name, course_description, teacherId } = req.body
        const course = { course_name, course_description, teacherId }
        const result = await Course.create(course)
        if (result) {
            return buildResp.created()
        }
        return buildResp.notfound()       
    } catch (err) {
        logger.error(err.message, err)
        return buildResp.fail(err.message || 'Some error occurred while creating the course')
    }
}

const findAll = async (req, res) => {
    const buildResp = new Response(res)
    try{
       const result = await Course.findAll()
       if(result){
        return buildResp.success(result)
       }
       return buildResp.notfound()    
    }catch(err){
        logger.error(err.message, err)
        return buildResp.fail(err.message || 'Some error occurred while get Courese')
    }
}

module.exports = {
    create,
    findAll
}