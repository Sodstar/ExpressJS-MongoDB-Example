const { get } = require("mongoose");
const repo = require("../repositories/category.repository");

const createCategory = async (data) => {
  const existingCategory = await repo.findByName(data.name);
  if (existingCategory) {
    throw new Error("Category already exists");
  }
  return await repo.create(data);
};

const getCategories = async () => {
  return await repo.findAll();
};

const getCategoryById = async (id) => {
  return await repo.findById(id);
}

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
};
