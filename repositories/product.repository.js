const Product = require("../models/product.model");

const findAll = () => Product.find();
const create = (data) => Product.create(data);
const findById = (id) => Product.findById(id);
const deleteById = (id) => Product.findByIdAndDelete(id);
const updateById = (id, data) =>
  Product.findByIdAndUpdate(id, data, { new: true });
const findByName = (name) => Product.findOne({ name });

module.exports = {
  findAll,
  create,
  findById,
  deleteById,
  updateById,
  findByName,
};
