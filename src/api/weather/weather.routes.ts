import { Router } from 'express';
import { trackValidator } from './weather.validator';
import validator from '@keithix/joi-validators/lib/validator';
import { weather } from './weather';

const weatherRoutes = Router();

weatherRoutes.post('/', validator(trackValidator), weather);

export default weatherRoutes;
