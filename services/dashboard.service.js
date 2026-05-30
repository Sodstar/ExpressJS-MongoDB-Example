const User = require("../models/user.model");
const Product = require("../models/product.model");
const Order = require("../models/order.model");

const getStats = async () => {
  const users = await User.countDocuments();
  const products = await Product.countDocuments();
  const orders = await Order.countDocuments();

  const revenue = await Order.aggregate([
    { $match: { status: "paid" } },
    { $group: { _id: null, total: { $sum: "$total" } } }
  ]);

  return {
    users,
    products,
    orders,
    revenue: revenue[0]?.total || 0
  };
};

module.exports = { getStats };