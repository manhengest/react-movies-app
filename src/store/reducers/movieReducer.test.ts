import movieReducer, { updateMovies, initialState, updateMoviesCount } from "./movieReducer";
import { UniqMovie } from "../../components/MovieCard/interface";

describe("Movie Reducer", () => {
    test("add movie", () => {
        const movies: UniqMovie[] = [
            {
                id: 1,
                poster_path: "/test/path",
                title: "test title",
                genres: ["test"],
                release_date: "test",
                runtime: 20,
                overview: "test",
                vote_average: 5
            }
        ]
        const action = updateMovies(movies)
        const newState = movieReducer(initialState, action)

        expect(newState.movies.length).toBe(1)
        expect(newState.movies[0].title).toBe("test title")
        expect(newState.movies[0].poster_path).toBe("/test/path")
    })
    test("change total movies count", () => {
        const action = updateMoviesCount(1)
        const newState = movieReducer(initialState, action)

        expect(newState.total).toBe(1)
    })
})
