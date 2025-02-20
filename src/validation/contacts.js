import Joi from 'joi';

export const contactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string', 
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Contact phone number  should be a string',
    'string.min': 'Contact phone number should have at least {#limit} characters',
    'string.max': 'Contact phone number should have at most {#limit} characters',
    'any.required': 'Contact phone number is required',
  }),
  email: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Email should be a string',
    'string.min': 'Email should have at least {#limit} characters',
    'string.max': 'Email should have at most {#limit} characters',
    'any.required': 'Email is required',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base':'isFavourite should be a boolean value',
  }),
  contactType: Joi.string().min(3).max(20).valid('work', 'home', 'personal').required().messages({
    'string.base': 'Contact Type should be a string', 
    'string.min': 'Contact Type should have at least {#limit} characters',
    'string.max': 'ContactType should have at most {#limit} characters',
    'any.only': 'Contact Type must be one of: work, home, personal',
    'any.required': 'Contact Type is required',
  }),
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).messages({
      'string.base': 'Username should be a string', 
      'string.min': 'Username should have at least {#limit} characters',
      'string.max': 'Username should have at most {#limit} characters',
    }),
    phoneNumber: Joi.string().min(3).max(20).messages({
      'string.base': 'Contact phone number  should be a string',
      'string.min': 'Contact phone number should have at least {#limit} characters',
      'string.max': 'Contact phone number should have at most {#limit} characters',
    }),
    email: Joi.string().min(3).max(20).messages({
      'string.base': 'Email should be a string',
      'string.min': 'Email should have at least {#limit} characters',
      'string.max': 'Email should have at most {#limit} characters',
    }),
    isFavourite: Joi.boolean().messages({
      'boolean.base':'isFavourite should be a boolean value',
    }),
    contactType: Joi.string().min(3).max(20).valid('work', 'home', 'personal').messages({
      'string.base': 'Contact Type should be a string', 
      'string.min': 'Contact Type should have at least {#limit} characters',
      'string.max': 'ContactType should have at most {#limit} characters',
      'any.only': 'Contact Type should be one of: work, home, personal',
    }),
  });
  