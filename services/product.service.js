const repo = require("../repositories/product.repository");

const createProduict = async (data) => {
  return await repo.create(data);
};

const getProduct = async () => {
  return await repo.findAll();
};

const getProductById = async (id) => {
  return await repo.findById(id);
};

module.exports = {
  createProduict,
  getProduct,
  getProductById,
};