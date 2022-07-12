const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    id: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
    modelName: 'Sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      as: 'user', foreignKey: 'userId',
    });
  }

  return Sale;
};

module.exports = Sale;
