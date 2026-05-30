const Cart = require("../models/cart.model");
const orderRepo = require("../repositories/order.repository");

const checkout = async (userId) => {
  const cart = await Cart.findOne({ user_id: userId }).populate(
    "items.product_id",
  );
  if (!cart) {
    throw new Error("Cart empty");
  }

  const items = cart.items.map((i) => ({
    product_id: i.product_id._id,
    quantity: i.quantity,
    price: i.product_id.price,
  }));
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const order = await orderRepo.create({
    user_id: userId,
    items,
    total,
  });

  //clear cart
  cart.items = [];
  await cart.save();

  return order;
};

module.exports = {
  checkout,
};
