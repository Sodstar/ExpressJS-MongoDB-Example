const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
