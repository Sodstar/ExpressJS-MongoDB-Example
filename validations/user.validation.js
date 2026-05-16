const Joi = require('joi');

const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(4).required(),
    role: Joi.string().valid("user", "admin").default("user").optional(),
});

module.exports = {
    createUserSchema,
};