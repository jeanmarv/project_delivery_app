const { getAll, getById } = require('../services/product.service');

const getProducts = async (_req, res) => {
  try {
    const products = await getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send('');
  }
};

module.exports = {
  getProducts,
  getProductById,
};