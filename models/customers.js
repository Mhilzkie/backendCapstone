'use strict';
const {DataTypes, Sequelize} =  require('sequelize');
const instance   = require('../dbconnection');
const customer = instance.sequelize.define('customers',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncerment: true
  },
  customer_Name:{
    type: DataTypes.STRING
  },
  customer_ContactNo:{
    type:DataTypes.STRING
  },
  customer_Address: {
    type: DataTypes.STRING
  },
  customer_Status: {
    type: DataTypes.STRING
  },
  },
  {
  createdAt:  true,
  updatedAt:  true,
  deletedAt:  true,
  tableName:  'customers'
  }
)
exports.model = customer;