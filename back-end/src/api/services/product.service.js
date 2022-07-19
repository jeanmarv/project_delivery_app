const { Products } = require('../../database/models');

const product = async (_id) => {
  const getProducts = await Products.findAll();
  return getProducts;
};

module.exports = product;
