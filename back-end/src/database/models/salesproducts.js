const SaleProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("SaleProduct", {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    modelName: 'sales_products',
  });

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',

    });
    models.Sale.belongsToMany(models.Product, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SaleProduct;
};

module.exports = SaleProduct;
