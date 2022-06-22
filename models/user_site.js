'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class user_site extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // user_site.belongsTo(models.user, {
      //   foreignKey: 'user_id'
      // });
    };
  }
  user_site.associate = function (models) {
    user_site.belongsTo(models.user, {
      foreignKey: 'user_id'
    });
  };
  user_site.associate = function (models) {
    user_site.hasMany(models.Saplings, {
      foreignKey: 'site_id',
      as: 'Saplings'
    });
  };

  user_site.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    dimension: DataTypes.INTEGER,
    lattitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_site',
  });
  return user_site;
};