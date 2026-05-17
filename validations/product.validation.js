const Joi = require("joi");

const createProductSchema = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.number().positive().required(),
  category_id: Joi.string().required(),
});

module.exports = {
  createProductSchema,
};
