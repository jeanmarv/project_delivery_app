const { User } = require('../../database/models');

const getAll = async () => User.findAll({
  where: {
    role: 'seller',
  },
  attributes: ['id', 'name'],
});

module.exports = {
  getAll,
};