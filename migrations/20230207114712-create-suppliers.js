'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Suppliers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      supplierName: {
        type: Sequelize.STRING
      },
      supplierContactPerson: {
        type: Sequelize.STRING
      },
      supplierEmail: {
        type: Sequelize.STRING
      },
      suppliercontactNumber: {
        type: Sequelize.STRING
      },
      supplierStreetAdd: {
        type: Sequelize.STRING
      },
      supplierCityMunicipality: {
        type: Sequelize.STRING
      },
      supplierStateProvince: {
        type: Sequelize.STRING
      },
      supplierPostalZipcode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Suppliers');
  }
};