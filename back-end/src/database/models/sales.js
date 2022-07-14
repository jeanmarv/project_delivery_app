const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    timestamps: false,
    modelName: 'Sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    Sale.belongsTo(models.User, {
      foreignKey: 'seller_id',
      as: 'seller'
    });
  };

  return Sale;
};

module.exports = Sale;
