const { getAll } = require('../services/seller.service');

const getAllSeller = async (req, res) => {
  try {
    const sellers = await getAll();
    res.status(200).json(sellers);
  } catch (_err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllSeller,
};