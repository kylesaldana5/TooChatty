'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    twilioPhone: DataTypes.BIGINT
  }, {tableName: "users"});
  User.associate = function(models) {
    // associations can be defined here
    
  };
  return User;
};