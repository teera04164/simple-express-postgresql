const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("course", {
    id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    course_description: {
      type: DataTypes.STRING
    }
  },{
    underscored: true
  });
};