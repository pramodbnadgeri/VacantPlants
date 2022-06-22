'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saplings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Saplings.associate = function (models) {
    Saplings.belongsTo(models.user_site, {
      foreignKey: 'site_id'
    });
  };
  Saplings.init({
    site_id: DataTypes.INTEGER,
    sapling_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Saplings',
  });
  return Saplings;
};