const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.Sales,
      { foreignKey: 'user_id', as: 'User' });
  };

  User.associate = (models) => {
    User.hasMany(models.Sales,
      { foreignKey: 'seller_id', as: 'Seller' });
  };

  return User;
};

module.exports = User;
