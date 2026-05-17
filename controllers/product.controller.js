const service = require("../services/product.service");
const { success } = require("../utils/apiResponse");

const create = async (req, res, next) => {
  try {
    const data = await service.createProduict(req.body);
    res.status(201).json(success(data));
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const data = await service.getProduct();
    res.status(200).json(success(data));
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const data = await service.getProductById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(success(data));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
  getById,
};