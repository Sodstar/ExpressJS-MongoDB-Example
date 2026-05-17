const Joi = require('joi');

const createCategorySchema  = Joi.object({
    name: Joi.string().min(2).required(),
});

module.exports = {
    createCategorySchema,
};