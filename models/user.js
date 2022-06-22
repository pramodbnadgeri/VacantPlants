'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // user.hasMany(models.user_site, {
      //   foreignKey: 'user_id',
      //   as: 'users'
      // });
    };
  }
  user.associate = function (models) {
    user.hasMany(models.user_site, {
      foreignKey: 'user_id',
      as: 'user_sites'
    });
  };
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};