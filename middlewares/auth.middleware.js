const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // console.log(req.headers)
  const header = req.headers["authorization"];
  if (!header) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = header.split(" ")[1];

  console.log("token:", token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
