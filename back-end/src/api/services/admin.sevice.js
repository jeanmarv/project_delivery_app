const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../../database/models');

const getAll = async () => {
  const users = await User.findAll({
    where: { role: { [Op.not]: 'administrator' } },
    attributes: { exclude: ['password'] },
  });
  return users;
};

const register = async ({ name, email, password, role }) => {
  const hashPassword = md5(password);
  const findByEmail = await User.findOne({ where: { email } });
  if (findByEmail) return null;
  await User.create({ name, email, password: hashPassword, role });
  return { name, email, role };
};

const destroy = async ({ name, email }) => {
  await User.destroy({ where: { name, email } });
};

module.exports = { getAll, register, destroy };