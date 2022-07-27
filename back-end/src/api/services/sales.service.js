const { now } = require('moment');
const {
  Sales,
  Products,
  SalesProducts,
  User,
} = require('../../database/models');

const createSales = async (body) => {
  const {
    totalPrice, deliveryAddress, status, deliveryNumber, userId, sellerId, productsSale } = body;

  const sale = await Sales.create({
    totalPrice, deliveryAddress, deliveryNumber, status, userId, sellerId, saleDate: now() });

  await Promise.all(
    productsSale.map(async (product) => {
      const { id, quantity } = product;
      const productSale = await SalesProducts.create({
        saleId: sale.dataValues.id,
        productId: id,
        quantity,
      });
      return productSale;
    }),
  );
  return sale.dataValues;
};

const getAllSales = async (sellerId) => {
  const sales = await Sales.findAll({
    where: { sellerId },
  });
  return sales;
};

const getSalesById = async (id) => {
  const sale = await Sales.findOne({
    where: { id },
    include: [
      {
        model: Products,
        as: 'Products',
      },
    ],
  });
  return sale;
};

const updateStatusSales = async (id, status) => {
  await Sales.update({ status }, { where: { id } });
  return getSalesById(id);
};

module.exports = {
  createSales,
  getAllSales,
  getSalesById,
  updateStatusSales,
};
