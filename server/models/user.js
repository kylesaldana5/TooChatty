'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    twilioPhone: DataTypes.BIGINT
  }, {tableName: "users"});
  User.associate = function(models) {
    // associations can be defined here
    
  };
  return User;
};