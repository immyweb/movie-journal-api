import { Document } from "mongoose";

export interface IMovie extends Document {
  theMovieDbId: number;
  title: string;
  dateWatched: string;
  rating: number;
  review: string;
  like: boolean;
  posterImg: null | string;
  releaseDate?: string;
}
