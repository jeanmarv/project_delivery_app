const adminService = require('../services/admin.sevice');

const getAllUsers = async (_req, res, _next) => {
  try {
    const users = await adminService.getAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const registerUser = async (req, res, _next) => {
  const { body } = req;
  try {
    const userRegister = await adminService.register(body);
    if (!userRegister) res.status(409).json({ message: 'User already exists' });
    return res.status(201).json(userRegister);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteUser = async (req, res, _next) => {
  const { body } = req;
  console.log(body);
  try {
    await adminService.destroy(body);
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = { getAllUsers, registerUser, deleteUser };