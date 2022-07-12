const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
    modelName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      as: 'sales', foreignKey: 'userId',
    });
    User.hasMany(models.Sale, {
      as: 'sales', foreignKey: 'sellerId',
    });
  };

  return User;
};

module.exports = User;
