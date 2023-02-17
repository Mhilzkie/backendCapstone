'use strict';
const {DataTypes, Sequelize} =  require('sequelize');
const instance   = require('../dbconnection');
const supplier = instance.sequelize.define('suppliers',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncerment: true
  },
  supplierName:{
    type: DataTypes.STRING
  },
  supplierContactPerson:{
    type:DataTypes.STRING
  },
  supplierEmail: {
    type: DataTypes.STRING
  },
  suppliercontactNumber: {
    type: DataTypes.STRING
  },
  supplierStreetAdd: {
    type: DataTypes.STRING
  },
  supplierCityMunicipality: {
    type: DataTypes.STRING
  },
  supplierStateProvince: {
    type: DataTypes.STRING
  },
  supplierPostalZipcode: {
    type: DataTypes.STRING
  },
  },
  {
  createdAt:  true,
  updatedAt:  true,
  deletedAt:  true,
  tableName:  'suppliers'
  }
)
exports.model = supplier;
