import { Genre } from '../api/spotify/spotify';

export const tempToGenre = (temp) => {
  if (temp > 30) {
    return Genre.Party;
  } else if (temp >= 15 && temp <= 30) {
    return Genre.Pop;
  } else if (temp >= 10 && temp <= 14) {
    return Genre.Rock;
  } else {
    return Genre.Classics;
  }
};
