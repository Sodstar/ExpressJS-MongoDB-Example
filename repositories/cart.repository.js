const Cart = require("../models/cart.model");

const findByUser = (userId) =>
  Cart.findOne({ user_id: userId }).populate("items.productId");

const upsertCart = (userId, data) => {
  return Cart.findOneAndUpdate(
    {
      user_id: userId,
    },
    data,
    { new: true, upsert: true },
  );
};

module.exports = {
  findByUser,
  upsertCart,
};