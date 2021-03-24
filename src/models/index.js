const Sequelize = require('sequelize')
const { DB_URL } = require('../config')
const sequelize = new Sequelize(DB_URL, {logging: false});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Teacher = require('./teacher.model')(sequelize, Sequelize)
db.Course = require('./course.model')(sequelize, Sequelize)

db.Teacher.hasMany(db.Course)
db.Course.belongsTo(db.Teacher);
 
module.exports = db;