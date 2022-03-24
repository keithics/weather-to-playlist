import { Request, Response } from 'express';
import { getPlaylistTracks } from '../../libraries/spotify';
import Spotify from './spotify.model';

export interface SpotifyPlaylistInterface {
  playlistId: string;
  genre: Genre;
}

export enum Genre {
  Party = 'party',
  Pop = 'pop',
  Rock = 'rock',
  Classics = 'classics',
}

/**
 * Seed data into spotify collection, we need this to run at least once
 * playlists and spotify token is hard coded for now and will expire after an hour
 * read more here on how to get the token
 * https://developer.spotify.com/documentation/general/guides/authorization/
 */
export const seedSpotifyPlaylists = async (req: Request, res: Response) => {
  // If temperature (celsius) is above 30 degrees, suggest tracks for party
  // In case temperature is between 15 and 30 degrees, suggest pop music tracks
  // If it's a bit chilly (between 10 and 14 degrees), suggest rock music tracks
  // Otherwise, if it's freezing outside, suggests classical music tracks

  // hard coded for now
  const playlists: SpotifyPlaylistInterface[] = [
    { playlistId: '37i9dQZF1DWWEJlAGA9gs0', genre: Genre.Classics },
    { playlistId: '14Xgl3uj4AZBpapviL4cwE', genre: Genre.Party },
    { playlistId: '37i9dQZF1DX9tPFwDMOaN1', genre: Genre.Pop },
    { playlistId: '37i9dQZF1DX08jcQJXDnEQ', genre: Genre.Rock },
  ];

  // delete all first
  await Spotify.deleteMany({});

  for await (const p of playlists) {
    const { genre } = p;
    const items = await getPlaylistTracks(p.playlistId);

    for await (const item of items) {
      const { name, href } = item.track;

      await Spotify.create({ genre, name, href });
    }
  }

  // no need to wait
  res.send({ message: 'ok' });
};
