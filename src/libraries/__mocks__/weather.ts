import { WeatherSchema } from '../../api/weather/weather.model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getWeatherByAddress = (body: WeatherSchema) => {
  return {
    coord: {
      lon: -150.0003,
      lat: 64.0003,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    base: 'stations',
    main: {
      temp: -15.46,
      feels_like: -22.46,
      temp_min: -15.46,
      temp_max: -15.46,
      pressure: 1006,
      humidity: 87,
      sea_level: 1006,
      grnd_level: 951,
    },
    visibility: 8612,
    wind: {
      speed: 3.4,
      deg: 36,
      gust: 4.91,
    },
    clouds: {
      all: 100,
    },
    dt: 1648068624,
    sys: {
      country: 'US',
      sunrise: 1648050556,
      sunset: 1648095817,
    },
    timezone: -28800,
    id: 5879092,
    name: 'Alaska',
    cod: 200,
  };
};
