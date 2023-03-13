'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pengeluaran_dokumens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jenis_dokumen: {
        type: Sequelize.STRING
      },
      nomoraju: {
        type: Sequelize.STRING
      },
      dpnomor: {
        type: Sequelize.STRING
      },
      dptanggal: {
        type: Sequelize.DATE
      },
      bpbnomor: {
        type: Sequelize.STRING
      },
      bpbtanggal: {
        type: Sequelize.DATE
      },
      pembeli_penerima: {
        type: Sequelize.STRING
      },
      kode_barang: {
        type: Sequelize.STRING
      },
      nama_barang: {
        type: Sequelize.STRING
      },
      sat: {
        type: Sequelize.STRING
      },
      jumlah: {
        type: Sequelize.DECIMAL
      },
      nilai_barang: {
        type: Sequelize.DECIMAL
      },
      nilai_barang_usd: {
        type: Sequelize.DECIMAL
      },
      comp_code: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      stat: {
        type: Sequelize.INTEGER
      },
      usin: {
        type: Sequelize.INTEGER
      },
      datein: {
        type: Sequelize.DATE
      },
      matauang: {
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
    await queryInterface.dropTable('pengeluaran_dokumens');
  }
};