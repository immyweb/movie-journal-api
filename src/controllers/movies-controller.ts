import { Response, Request } from "express";
import { IMovie } from "../types/movie";
import Movie from "../models/movie-model";

const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const movies: IMovie[] = await Movie.find();
    res.status(200).json({ movies });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const movie: IMovie | null = await Movie.findById(req.params.id);

    res.status(200).json({ movie });
  } catch (error) {
    res.status(400).send(error);
  }
};

const addMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IMovie,
      | "theMovieDbId"
      | "title"
      | "dateWatched"
      | "rating"
      | "review"
      | "like"
      | "posterImg"
      | "releaseDate"
    >;

    const movie: IMovie = new Movie({
      theMovieDbId: body.theMovieDbId,
      title: body.title,
      dateWatched: body.dateWatched,
      rating: body.rating,
      review: body.review,
      like: body.like,
      posterImg: body.posterImg,
      releaseDate: body.releaseDate,
    });

    const newMovie: IMovie = await movie.save();
    const allMovies: IMovie[] = await Movie.find();

    res.status(201).json({
      message: "Movie added",
      movie: newMovie,
      movies: allMovies,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updateMovie: IMovie | null = await Movie.findByIdAndUpdate(
      { _id: id },
      body
    );

    const allMovies: IMovie[] = await Movie.find();

    res.status(200).json({
      message: "Movie updated",
      movie: updateMovie,
      movies: allMovies,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedMovie: IMovie | null = await Movie.findByIdAndRemove(
      req.params.id
    );

    const allMovies: IMovie[] = await Movie.find();

    res.status(200).json({
      message: "Movie deleted",
      movie: deletedMovie,
      movies: allMovies,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export { getMovies, getMovie, addMovie, updateMovie, deleteMovie };
