const service = require("../services/category.service");

const create = async (req, res, next) => {
  try {
    const data = await service.createCategory(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const data = await service.getCategories();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
};