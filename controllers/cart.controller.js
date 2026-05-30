const service = require("../services/cart.service");

const { success } = require("../utils/apiResponse");

const add = async (req, res, next) => {
  try {
    const data = await service.addToCart(
      req.body.user_id,
      req.body.product_id,
      req.body.quantity || 1,
    );
    res.json(success(data));
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const data = await service.getCart(req.body.user_id);
    res.json(success(data));
  } catch (e) {
    next(e);
  }
};

module.exports = {
  add,
  get,
};
