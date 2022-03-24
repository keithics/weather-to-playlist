import axios from 'axios';
import {ArkErrorOther} from '@keithics/errors/lib/ark.assert';
import config from '../server/config';

// these are the only labels we need
// if you need other item data
// check the API , https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist

export interface SpotifyTracksInterface {
  href: string;
  name: string;
}

export interface SpotifyItems {
  track: SpotifyTracksInterface;
}

/**
 * Get playlist based on playlist ID
 * TOKEN IS HARD CODED FOR NOW
 * @param playlistId
 */
export const getPlaylistTracks = (playlistId: string): Promise<SpotifyItems[]> => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}?fields=tracks.items(track(name,href))`;

  return axios({
    url,
    headers: {
      Authorization: 'Bearer ' + config.SPOTIFY_TOKEN,
    },
  })
    .catch((err) => {
      if (err.response.status === 401) {
        // check spotify errors for more error codes
        return Promise.reject(new ArkErrorOther('Token expired'));
      } else {
        return Promise.reject(new ArkErrorOther('Error Occurred while retrieving spotify data'));
      }
    })
    .then(({ data: { tracks } }) => {
      return Promise.resolve(tracks.items);
    });
};
