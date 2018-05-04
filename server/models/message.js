'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    contactsText: DataTypes.STRING,
    watsonText: DataTypes.STRING,
    contactsPhone: DataTypes.BIGINT,
    twilioPhone: DataTypes.BIGINT    
  }, {tableName: "messages"});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};