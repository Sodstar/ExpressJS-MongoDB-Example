const Category = require("../models/category.model");

const findAll = () => Category.find();
const findById = (id) => Category.findById(id);
const create = (data) => Category.create(data);
const deleteById = (id) => Category.findByIdAndDelete(id);
const updateById = (id, data) =>
  Category.findByIdAndUpdate(id, data, { new: true });
const findByName = (name) => Category.findOne({ name });

module.exports = {
  findAll,
  create,
  findById,
  deleteById,
  updateById,
  findByName,
};
