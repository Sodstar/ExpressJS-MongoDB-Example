// services/user.service.js
const userRepo = require("../repositories/user.repositry");

const getUsers = async () => {
  return await userRepo.findAll();
};

const getUserById = async (id) => {
  return await userRepo.findById(id);
};

const createUser = async (data) => {
  return await userRepo.create({
    name: data.name,
  });
};

const deleteUserById = async (id) => {
  return await userRepo.deleteById(id);
};

const updateUserById = async (id, data) => {
  return await userRepo.updateById(id, {
    name: data.name,
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};
