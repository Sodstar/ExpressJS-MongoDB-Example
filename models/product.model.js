const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true },
);

productSchema.index({ price: 1 });
productSchema.index({ category_id: 1 });

module.exports = mongoose.model("Product", productSchema);
