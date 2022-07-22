const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../../database/models');

const getAll = async () => {
  const users = await User.findAll({
    where: { role: { [Op.not]: 'administrator' } },
    attributes: { exclude: ['password'] }
  });
  return users;
};

const register = async ({ name, email, password, role }) => {
  const hashPassword = md5(password);
  const findByNameOrEmail = await User.findOne({ where: { name, email } });
  if (findByNameOrEmail) return null;
  await User.create({ name, email, password: hashPassword, role });
  return { name, email, role };
};

const destroy = async ({ email }) => {
  await User.destroy({ where: { email } });
};

module.exports = { getAll, register, destroy };