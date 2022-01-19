import { Router } from "express";
import {
  getMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movies-controller";
import { registerUser, loginUser } from "../controllers/user-controller";
import auth from "../middleware/auth";

const router: Router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/api/movies", auth, getMovies);

router.get("/api/movie/:id", auth, getMovie);

router.post("/api/add-movie", auth, addMovie);

router.put("/api/edit-movie/:id", auth, updateMovie);

router.delete("/api/delete-movie/:id", auth, deleteMovie);

export default router;
