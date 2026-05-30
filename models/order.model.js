const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
        price: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled","paid"],
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Order", orderSchema);
