const getProduct = require('../services/product.service');

const productController = async (req, res, next) => {
  try {
    const getAll = await getProduct();
    return res.status(200).json(getAll);
  } catch (e) {
    next(e);
  }
};

module.exports = productController;