'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengeluaran_dokumen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pengeluaran_dokumen.init({
    jenis_dokumen: DataTypes.STRING,
    nomoraju: DataTypes.STRING,
    dpnomor: DataTypes.STRING,
    dptanggal: DataTypes.DATE,
    bpbnomor: DataTypes.STRING,
    bpbtanggal: DataTypes.DATE,
    pembeli_penerima: DataTypes.STRING,
    kode_barang: DataTypes.STRING,
    nama_barang: DataTypes.STRING,
    sat: DataTypes.STRING,
    jumlah: DataTypes.DECIMAL,
    nilai_barang: DataTypes.DECIMAL,
    nilai_barang_usd: DataTypes.DECIMAL,
    comp_code: DataTypes.STRING,
    note: DataTypes.STRING,
    stat: DataTypes.INTEGER,
    usin: DataTypes.INTEGER,
    datein: DataTypes.DATE,
    matauang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pengeluaran_dokumen',
    tableName: 'pengeluaran_dokumen',
    createdAt: 'date_created',
    updatedAt: 'date_updated',
    underscore: true,
  });
  return pengeluaran_dokumen;
};