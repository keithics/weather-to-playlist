import { SpotifyItems } from '../spotify';
import classics from 'api/spotify/json/classics.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getPlaylistTracks = (playlistId: string): Promise<SpotifyItems[]> => {
  return Promise.resolve(classics);
};
