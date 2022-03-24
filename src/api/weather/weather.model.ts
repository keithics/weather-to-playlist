import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface CoordinatesInterface {
  lat: number;
  lon: number;
}

export type WeatherSchema = mongoose.Document & {
  city: string;
  temperature: number;
  coordinates: CoordinatesInterface;
  tracks?: string;
  updatedAt?: Date;
};

const WeathersSchema = new Schema<WeatherSchema>(
  {
    city: {
      type: String,
      lower: true,
      trim: true,
    },
    coordinates: {
      lat: Number,
      lon: Number,
    },
    temperature: {
      type: Number,
      required: true,
    },
    tracks: String,
  },
  { timestamps: true }
);

const Weather = mongoose.model<WeatherSchema>('weather', WeathersSchema);

export default Weather;
