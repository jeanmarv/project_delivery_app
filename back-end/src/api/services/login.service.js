const md5 = require('md5');
const { User } = require('../../database/models');

const login = async ({ email, password }) => {
    if (!email || !password) return null;

    const hashPassword = md5(password);
    const userLogin = await User.findOne({ where: { email, password: hashPassword } });

    if (!userLogin) return null;

    return userLogin;
};

module.exports = login;