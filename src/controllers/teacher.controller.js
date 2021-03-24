
const { Teacher } = require('../models')
const { logger, Response } = require('../utils')

const create = async (req, res) => {
    const buildResp = new Response(res)
    try {
        const { first_name, last_name, age } = req.body
        const teacher = { first_name, last_name, age  }
        const result = await Teacher.create(teacher)
        if (result) {
            return buildResp.created()
        }
        return buildResp.notfound()       
    } catch (err) {
        logger.error(err.message, err)
        return buildResp.fail(err.message || 'Some error occurred while creating teacher')
    }
}

const findAll = async (req, res) => {
    const buildResp = new Response(res)
    try{
       const result =await Teacher.findAll()
       if(result){
        return buildResp.success(result)
       }
       return buildResp.notfound()    
    }catch(err){
        logger.error(err.message, err)
        return buildResp.fail(err.message || 'Some error occurred while get teacher')
    }
}

module.exports = {
    create,
    findAll
}