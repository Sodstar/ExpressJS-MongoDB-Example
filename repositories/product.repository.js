const Product = require("../models/product.model");

const findWithPagination = async (filter, page, limit) => {
  const skip = (page - 1) * limit;

  const data = await Product.find(filter)
    .populate("category_id")
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  const total = await Product.countDocuments(filter);

  return { data, total, page: Number(page), pages: Math.ceil(total / limit) };
};

const findAll = () => Product.find();
const create = (data) => Product.create(data);
const findById = (id) => Product.findById(id).populate("category_id");
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
  findWithPagination,
};
