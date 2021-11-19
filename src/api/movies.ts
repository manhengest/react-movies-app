import axios from "axios";
import { Movie, MoviesResponse } from "../components/MovieCard/interface";

const baseURL = "http://localhost:4000/";

const instance = axios.create({
    baseURL
});

const { get: getMovieData, post: postMovieData, put: putMovieData, delete: deleteMovieData } = instance;

export const getMovies = (filterParams?: any) => getMovieData<MoviesResponse>("movies", { params: filterParams });
export const getMovie = (movieId: number) => getMovieData<MoviesResponse>(`movies/${ movieId }`);
export const addMovie = (movie: Movie) => postMovieData("movies", movie);
export const updateMovie = (movie: Movie) => putMovieData("movies", movie);
export const deleteMovie = (movieId: number) => deleteMovieData(`movies/${ movieId }`);
