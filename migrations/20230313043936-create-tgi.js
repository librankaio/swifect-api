'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tgis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no: {
        type: Sequelize.STRING
      },
      tdate: {
        type: Sequelize.DATE
      },
      id_mitem: {
        type: Sequelize.INTEGER
      },
      code_mitem: {
        type: Sequelize.STRING
      },
      name_mitem: {
        type: Sequelize.STRING
      },
      id_muom: {
        type: Sequelize.INTEGER
      },
      code_muom: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.DECIMAL
      },
      id_mwhse: {
        type: Sequelize.INTEGER
      },
      code_mwhse: {
        type: Sequelize.STRING
      },
      comp_code: {
        type: Sequelize.STRING
      },
      item_type: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      wip: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tgis');
  }
};