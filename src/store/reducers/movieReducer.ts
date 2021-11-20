import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { MOVIES_TYPES } from "../types";
import { Movie } from "../../components/MovieCard/interface";

export const initialState = {
    movies: [],
    total: 0,
    selectedGenres: [],
    selectedSorting: "release_date"
}

export default function movieReducer(state: typeof initialState = initialState, action: AnyAction) {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload.moviesData};
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
