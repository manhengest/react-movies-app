import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { createSelector } from 'reselect';

import { MOVIES_TYPES } from "../types";
import { Movie } from "../../components/MovieCard/interface";
import { RootState } from './rootReducer';

export const initialState = {
    movies: [],
    total: 0
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

export const movieStateSelector = (state: RootState) => state.moviesData;

export const moviesSelector = createSelector(
    movieStateSelector,
    (state) => state.movies
);

export const totalCountSelector = createSelector(
    movieStateSelector,
    (state) => state.total
);
