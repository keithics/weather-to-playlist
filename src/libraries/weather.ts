import axios from 'axios';
import config from '../server/config';
import { ArkErrorOther, ArkErrorValidation } from '@keithics/errors/lib/ark.assert';
import { WeatherSchema } from '../api/weather/weather.model';

export interface ResponseTemperature {
  temp: number;
}

const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

/**
 * parses body and returns the query for either city or lat/lon
 * @param data - request body
 */
function getCityAndCoordinates(data: WeatherSchema) {
  const { city, coordinates } = data;
  return Object.prototype.hasOwnProperty.call(data, 'city')
    ? 'q=' + city
    : `lat=${coordinates.lat}&lon=${coordinates.lon}`;
}

/**
 * Calls open weather API and can accept either city or lat/long
 * @param body - request body
 */
export const getWeatherByAddress = (body: WeatherSchema): Promise<ResponseTemperature | Error> => {
  const query = getCityAndCoordinates(body);
  const url = `${weatherApiUrl + query}&appid=${config.WEATHER_API}&units=metric`;

  return axios(url)
    .catch((err) => {
      if (err.response.status === 404) {
        return Promise.reject(new ArkErrorValidation('City or Lat/Long is not found or invalid'));
      } else {
        return Promise.reject(new ArkErrorOther('Error Occurred while retrieving weather data'));
      }
    })
    .then(({ data: { main } }) => {
      return Promise.resolve(main);
    });
};
