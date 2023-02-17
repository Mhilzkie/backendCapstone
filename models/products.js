'use strict';
const {DataTypes, Sequelize} =  require('sequelize');
const instance   = require('../dbconnection');
const product = instance.sequelize.define('products',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncerment: true
  },
  product_Name:{
    type: DataTypes.STRING
  },
  product_Description:{
    type:DataTypes.INTEGER
  },
  product_Unit: {
    type: DataTypes.STRING
  },
  product_Quantity: {
    type: DataTypes.INTEGER
  },
  product_Price: {
    type: DataTypes.INTEGER
  },
  },
  {
  createdAt:  true,
  updatedAt:  true,
  deletedAt:  true,
  tableName:  'products'
  }
)
exports.model = product;