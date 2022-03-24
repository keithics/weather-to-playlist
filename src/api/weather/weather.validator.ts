import Joi from 'joi';

export const trackValidator = {
  schema: Joi.object({
    city: Joi.string(),
    coordinates: Joi.object({
      lat: Joi.number().min(-90).max(90).required(),
      lon: Joi.number().min(-180).max(180).required(),
    }).messages({
      'any.required': 'Coordinates latitude and longitude must be a number and required.',
    }),
  }).xor('coordinates', 'city'),
};
