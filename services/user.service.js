// services/user.service.js
const userRepo = require("../repositories/user.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async () => {
  return await userRepo.findAll();
};

const getUserById = async (id) => {
  return await userRepo.findById(id);
};

const createUser = async (data) => {
  const existingUser = await userRepo.findByName(data.name);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await userRepo.create({
    name: data.name,
    password: hashedPassword,
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
