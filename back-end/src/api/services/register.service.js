const md5 = require('md5');
const { User } = require('../../database/models');

const register = async ({ name, email, password }) => {
    const hashPassword = md5(password);
    const findByNameOrEmail = await User.findOne({ where: { name, email } });
    if (findByNameOrEmail) return null;
    const userRegister = await User
        .create({ name, email, password: hashPassword, role: 'customer' });

    return userRegister;
};

module.exports = register; 