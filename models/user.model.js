const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    password: {
      type: String,
      required: true,
      minLength: 4,
    },
    role :{
      type: String,
      enum:["user","admin"],
      default:"user"
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
