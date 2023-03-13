'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tgi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tgi.init({
    no: DataTypes.STRING,
    tdate: DataTypes.DATE,
    id_mitem: DataTypes.INTEGER,
    code_mitem: DataTypes.STRING,
    name_mitem: DataTypes.STRING,
    id_muom: DataTypes.INTEGER,
    code_muom: DataTypes.STRING,
    qty: DataTypes.DECIMAL,
    id_mwhse: DataTypes.INTEGER,
    code_mwhse: DataTypes.STRING,
    comp_code: DataTypes.STRING,
    item_type: DataTypes.STRING,
    note: DataTypes.STRING,
    wip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tgi',
    tableName: 'tgi',
    createdAt: 'date_created',
    updatedAt: 'date_updated',
    underscore: true,
  });
  return tgi;
};