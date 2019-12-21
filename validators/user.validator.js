const Joi = require('joi');

const userValidators = {
    login: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
    register: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        credit_card_number: Joi.string().required(),

    })
};

module.exports = userValidators;
