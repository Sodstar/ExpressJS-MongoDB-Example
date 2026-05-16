const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (data) => {
  const hashedPassword = await bcrypt.hash(String(data.password), 10);
  console.log(hashedPassword);

  const user = await User.create({
    name: data.name,
    password: hashedPassword,
    role: data.role || "user",
  });

  return user;
};

const login = async (data) => {
  const user = await User.findOne({ name: data.name });
  if (!user) throw new Error("User not found");

  const isMath = await bcrypt.compare(String(data.password), user.password);
  if (!isMath) throw new Error("Invalid password");

  const nowUtc = Math.floor(Date.now() / 1000);
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
      iat: nowUtc,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );

  return { user, token };
};

module.exports = {
  register,
  login,
};
