const mongan = require("morgan");
const logger = require("./logger");

const stream = {
  write: (message) => logger.info(message.trim()),
};

const httpLogger = mongan("combined", { stream });

module.exports = httpLogger;
