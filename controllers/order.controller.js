const service = require("../services/order.service");

const { success } = require("../utils/apiResponse");

const checkout = async (req, res, next) => {
  try {
    const data = await service.checkout(req.body.user_id);
    res.json(success(data));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkout,
};
