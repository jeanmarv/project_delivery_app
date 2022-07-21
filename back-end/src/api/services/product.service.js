const { Products } = require('../../database/models');

async function getAll() {
    const getAllProducts = await Products.findAll();
    return getAllProducts;
}

async function getById(id) {
    const product = await Products.findByPk(id);
    return product;
}

module.exports = {
  getAll,
  getById,
};
