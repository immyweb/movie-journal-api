import { IMovie } from "../types/movie";
import { model, Schema } from "mongoose";

const movieSchema: Schema = new Schema(
  {
    theMovieDbId: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    dateWatched: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    review: {
      type: String,
      required: true,
    },

    like: {
      type: Boolean,
      required: true,
    },

    posterImg: {
      type: String,
      required: false,
    },

    releaseDate: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default model<IMovie>("Movie", movieSchema);
