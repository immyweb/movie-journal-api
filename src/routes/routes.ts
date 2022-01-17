import { Router } from "express";
import {
  getMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movies-controller";

const router: Router = Router();

router.get("/api/movies", getMovies);

router.get("/api/movie/:id", getMovie);

router.post("/api/add-movie", addMovie);

router.put("/api/edit-movie/:id", updateMovie);

router.delete("/api/delete-movie/:id", deleteMovie);

export default router;
