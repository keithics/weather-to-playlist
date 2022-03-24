import { Router } from 'express';
import weatherRouter from '../api/weather/weather.routes';
import spotifyRouter from '../api/spotify/spotify.routes';

const routes = Router();

routes.use('/weather', weatherRouter);
routes.use('/spotify', spotifyRouter);

// 404 error
routes.use('*', (req, res) => {
  res.status(404).json({ error: true, message: '404 not found' });
});

export default routes;
