'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mitems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      code_muom: {
        type: Sequelize.STRING
      },
      item_type: {
        type: Sequelize.STRING
      },
      comp_code: {
        type: Sequelize.STRING
      },
      note: {
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
    await queryInterface.dropTable('mitems');
  }
};