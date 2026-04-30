const Joi = require('joi');

const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
});

module.exports = {
    createUserSchema,
};