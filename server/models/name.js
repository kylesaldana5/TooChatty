'use strict';
module.exports = (sequelize, DataTypes) => {
  var Name = sequelize.define('Name', {
    phone: {type: DataTypes.BIGINT, unique: true },
    picture: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    company: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {tableName: "names"});
  Name.associate = function(models) {
    // associations can be defined here
  };
  return Name;
};