module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  // User.associate = function (models) {
  //   User.belongsToMany(models.Location);
  // }
  return User;
};
