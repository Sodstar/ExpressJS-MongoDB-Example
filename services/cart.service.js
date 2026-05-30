const repo = require("../repositories/cart.repository");

const addToCart = async (userId, productId, qty) => {
  let cart = await repo.findByUser(userId);

  if (!cart) {
    cart = await repo.upsertCart(userId, {
      user_id: userId,
      items: [{ product_id: productId, quantity: qty }],
    });
  
    return cart;
  }

  const existing = cart.items.find(
    (i) => i.product_id._id.toString() === productId,
  );

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.items.push({ product_id: productId, quantity: qty });
  }
 
  return await cart.save();
};

const getCart = (userId) => repo.findByUser(userId);

module.exports = {
  addToCart,
  getCart,
};
