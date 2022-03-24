import { Router } from 'express';
import { seedSpotifyPlaylists } from './spotify';

const spotifyRouter = Router();

spotifyRouter.get('/', seedSpotifyPlaylists);

export default spotifyRouter;
