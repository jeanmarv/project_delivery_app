const md5 = require('md5');
const { User } = require('../../database/models');

const register = async ({ name, email, password }) => {
    const hashPassword = md5(password);
    const findByEmail = await User.findOne({ where: { email } });
    if (findByEmail) return null;
    const userRegister = await User
        .create({ name, email, password: hashPassword, role: 'customer' });

    return userRegister;
};

module.exports = register; 