'use strict';
const {DataTypes, Sequelize} =  require('sequelize');
const instance   = require('../dbconnection');
const user = instance.sequelize.define('users',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncerment: true
  },
  user_CompleteName:{
    type: DataTypes.STRING
  },
  user_AccountType:{
    type:DataTypes.STRING
  },
  user_Username:{
    type: DataTypes.STRING
  },
  user_Password:{
    type: DataTypes.STRING
  },
  },
  {
  createdAt:  true,
  updatedAt:  true,
  deletedAt:  true,
  tableName:  'users'
  }
)
exports.model = user;