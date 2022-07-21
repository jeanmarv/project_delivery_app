const salesProducts = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('SalesProducts',
    {
      quantity: DataTypes.INTEGER,
    }, 
    { 
      timestamps: false,
      underscored: true,
      tableName: "salesProducts",
    });
  
  salesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'Sales',
      through: salesProducts,
      foreignKey: {
        field: 'product_id',
        name: 'productId'
      }, 
      otherKey: 'sale_id',
    });

    models.Sales.belongsToMany(models.Products, {
      as: 'Products',
      through: salesProducts,
      foreignKey: {
        field: 'sale_id',
        name: 'saleId'
      },
      otherKey: 'product_id',
    });
  };

  return salesProducts;
}

module.exports = salesProducts;
