const logger = require("../utils/logger");
const errorHander = (err, req, res, next) => {
  logger.error({
    message: err.message || "unknown error",
    stack: err.stack,
    path: req.originalUrl,
    method: req.method,
  });
  res
    .status(500)
    .json({ success: false, message: err.message || "Internal Server Error" });
};

module.exports = errorHander;
