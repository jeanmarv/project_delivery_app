const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      urlImage: DataTypes.STRING(200),
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "products",
    }
  );

  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts, {
      foreignKey: {
        field: "product_id",
        name: "productId",
      },
      as: "salesProducts",
    });
  };

  return Products;
};

module.exports = Products;
