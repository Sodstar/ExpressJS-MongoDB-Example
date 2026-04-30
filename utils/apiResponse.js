const success = (data) => ({
  status: "success",
  data,
});

const error = (message) => ({
  status: "error",
  message,
});

module.exports = {
  success,
  error,
};
