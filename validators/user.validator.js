const Joi = require('joi');

const userValidators = {
  userLogin: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = userValidators;
