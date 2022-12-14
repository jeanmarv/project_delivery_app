const {
  createSales,
  getAllSellersSales,
  getAllCustumerSales,
  getSalesById,
  updateStatusSales,
} = require('../services/sales.service');

const createSalesController = async (req, res) => {
  try {
    console.log(req.body);
    const sale = await createSales(req.body);
    res.status(201).json(sale);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAllSellerSalesController = async (req, res) => {
  try {
    const { sellerId } = req.query;
    const sales = await getAllSellersSales(sellerId);
    res.status(200).json(sales);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAllCustumerSalesController = async (req, res) => {
  try {
    const { userId } = req.query;
    const sales = await getAllCustumerSales(userId);
    res.status(200).json(sales);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getSalesByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const sale = await getSalesById(id);
    res.status(200).json(sale);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const updateStatusSalesController = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const sale = await updateStatusSales(id, status);
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createSalesController,
  getAllSellerSalesController,
  getAllCustumerSalesController,
  updateStatusSalesController,
  getSalesByIdController,
};
