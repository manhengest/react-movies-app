import { MOVIES_TYPES } from "../types";
import axios from "axios";
import { Movie, MoviesResponse, ReduxAction } from "../../components/MovieCard/interface";

const initialState = {
    movies: [],
    total: 0,
    selectedGenres: [],
    selectedSorting: "release_date"
}

export default function movieReducer(state: typeof initialState = initialState, action: ReduxAction) {
    switch (action.type) {
        case MOVIES_TYPES.LOAD_MOVIES: {
            return {
                ...state,
                movies: [
                    ...action.payload
                ]
            }
        }
        case MOVIES_TYPES.UPDATE_MOVIES_COUNT: {
            return {
                ...state,
                total: action.payload
            }
        }
        case MOVIES_TYPES.UPDATE_SELECTED_GENRES: {
            return {
                ...state,
                selectedGenres: [
                    ...action.payload
                ]
            }
        }
        case MOVIES_TYPES.UPDATE_SELECTED_SORTING: {
            return {
                ...state,
                selectedSorting: action.payload
            }
        }
        default:
            return state
    }
}

export const updateMovies = (movies: Movie[]) => ({
    type: MOVIES_TYPES.LOAD_MOVIES,
    payload: movies
})

export const updateMoviesCount = (count: number) => ({
    type: MOVIES_TYPES.UPDATE_MOVIES_COUNT,
    payload: count
})

export const updateSelectedGenres = (genres: string[]) => ({
    type: MOVIES_TYPES.UPDATE_SELECTED_GENRES,
    payload: genres
})

export const updateSelectedSorting = (title: string) => ({
    type: MOVIES_TYPES.UPDATE_SELECTED_SORTING,
    payload: title
})

export const fetchMovies = (limit: number = 9) => async (dispatch: any, getState: any) => {
    const { selectedGenres } = getState().moviesData;
    const { selectedSorting } = getState().moviesData;

    const filterParams = {
        searchBy: "",
        sortBy: "",
        filter: "",
        sortOrder: "desc",
        limit
    }

    if (selectedGenres.length) {
        filterParams.searchBy = "genres"
        filterParams.filter = selectedGenres.join(",")
    }

    filterParams.sortBy = selectedSorting

    const response: MoviesResponse = await axios.get("http://localhost:4000/movies", {
        params: filterParams
    })

    dispatch(updateMovies(response.data.data))
    dispatch(updateMoviesCount(response.data.totalAmount))
}

export const createMovie = (data: Movie) => async () => {
    return await axios.post("http://localhost:4000/movies", data)
}

export const getMovie = (id: number) => async () => {
    return await axios.get(`http://localhost:4000/movies/${ id }`)
}

export const updateMovie = (data: Movie) => async () => {
    return await axios.put("http://localhost:4000/movies", data)
}

export const deleteMovie = (id: number) => async () => {
    return await axios.delete(`http://localhost:4000/movies/${ id }`)
}
