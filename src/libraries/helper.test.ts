import { Genre } from '../api/spotify/spotify';
import { tempToGenre } from './helper';

describe(' Temperature to Genre Conversion', () => {
  it('If temperature (celcius) is above 30 degrees return Party', () => {
    expect(tempToGenre(100)).toBe(Genre.Party);
    expect(tempToGenre(31)).toBe(Genre.Party);
  });

  it('If temperature between 15 and 30 degrees return Pop', () => {
    expect(tempToGenre(15)).toBe(Genre.Pop);
    expect(tempToGenre(16)).toBe(Genre.Pop);
    expect(tempToGenre(30)).toBe(Genre.Pop);
  });

  it("If it's a bit chilly (between 10 and 14 degrees, return Rock)", () => {
    expect(tempToGenre(14)).toBe(Genre.Rock);
    expect(tempToGenre(10)).toBe(Genre.Rock);
    expect(tempToGenre(12)).toBe(Genre.Rock);
  });

  it("Otherwise, if it's freezing outsides return Classics", () => {
    expect(tempToGenre(9)).toBe(Genre.Classics);
    expect(tempToGenre(-9)).toBe(Genre.Classics);
    expect(tempToGenre(0)).toBe(Genre.Classics);
  });
});
