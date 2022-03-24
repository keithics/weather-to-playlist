import mongoose from 'mongoose';

const { Schema } = mongoose;

export type SpotifyItemsSchema = mongoose.Document & {
  name: string;
  href: string;
};

const SpotifySchema = new Schema<SpotifyItemsSchema>(
  {
    name: String,
    href: String,
    genre: String,
  },
  { timestamps: true }
);

const Spotify = mongoose.model<SpotifyItemsSchema>('spotify-items', SpotifySchema);

export default Spotify;
