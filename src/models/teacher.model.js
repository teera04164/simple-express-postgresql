const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("teacher", {
    id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      allowEmpty: false
    },
    last_name: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },{
    underscored: true
  });
};