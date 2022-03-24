import {Request, Response} from 'express';
import {catchAsync} from '@keithics/errors/lib/catch-async';
import Weather from './weather.model';
import config from 'server/config';
import {differenceInMinutes} from 'date-fns';
import {getWeatherByAddress, ResponseTemperature} from '../../libraries/weather';
import {tempToGenre} from '../../libraries/helper';
import Spotify from '../spotify/spotify.model';

/**
 * @POST /weather
 * @param city : string
 * @param coords {lat:lon}
 */
export const weather = catchAsync(async (req: Request, res: Response) => {
  const { city, coordinates } = req.body;
  const query = city ? { city } : { coordinates };

  const weather = await Weather.findOne({ ...query });

  const lastUpdated = weather?.updatedAt || 0; //
  const minutesAgo = differenceInMinutes(Date.now(), lastUpdated);
  let temp;

  // get temp data from cache
  if (weather && minutesAgo <= config.CACHE_MINS) {
    temp = weather.temperature;
  } else {
    ({ temp } = (await getWeatherByAddress(req.body)) as ResponseTemperature);

    // save cache
    await Weather.findOneAndUpdate({ ...query }, { temp }, { upsert: true });
  }

  const genre = tempToGenre(temp);
  // TODO pagination
  const tracks = await Spotify.find({ genre }).sort({ name: 1 }).limit(50);

  res.jsonp(tracks);
});
