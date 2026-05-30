const Order = require("../models/order.model");

const create = (data) => Order.create(data);

const findByUser = (userId) =>
  Order.find({ user_id: userId })
    .populate("items.product_id")
    .sort({ createdAt: -1 });

const findById = (orderId) =>
  Order.findById(orderId).populate("items.product_id");

module.exports = {
  create,
  findByUser,
  findById,
};
