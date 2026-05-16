const User = require("../models/user.model");

const findAll = () => User.find();
const findById = (id) => User.findById(id);

const create = (user) => {
  User.create(user);
};

const deleteById = (id) => User.findByIdAndDelete(id);

const updateById = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true });

const findByName = (name) => User.findOne({ name });

module.exports = {
  findAll,
  create,
  findById,
  deleteById,
  updateById,
  findByName,
};
