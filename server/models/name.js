'use strict';
module.exports = (sequelize, DataTypes) => {
  var Name = sequelize.define('Name', {
    phone: DataTypes.BIGINT,
    picture: DataTypes.STRING,
    name: DataTypes.STRING
  }, {tableName: "names"});
  Name.associate = function(models) {
    // associations can be defined here
  };
  return Name;
};