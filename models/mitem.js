'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mitem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mitem.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_mitem: DataTypes.INTEGER,
    code_mitem: DataTypes.STRING,
    name_mitem: DataTypes.STRING,
    code_muom: DataTypes.STRING,
    item_type: DataTypes.STRING,
    comp_code: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mitem',
    tableName: 'mitem',
    createdAt: 'date_created',
    updatedAt: 'date_updated',
    underscore: true,
  });
  return mitem;
};