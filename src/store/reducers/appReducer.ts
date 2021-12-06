import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { createSelector } from "reselect";

import { APP_TYPES } from "../types";
import { UniqMovie } from "../../components/MovieCard/interface";
import { RootState } from "./rootReducer";

export const initialState = {
    isAddModalOpened: false,
    isEditModalOpened: false,
    isDeleteModalOpened: false,
    isSuccessModalOpened: false,
    movieId: null
}

export default function appReducer(state: typeof initialState = initialState, action: AnyAction) {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload.appData};
        case APP_TYPES.TOGGLE_MODAL: {
            return {
                ...state,
                [action.payload.variable]: action.payload.status,
                movieId: action.payload.movieId
            }
        }
        case APP_TYPES.SET_VIEW_MODE: {
            return {
                ...state,
                viewMode: action.payload
            }
        }
        case APP_TYPES.SET_DETAILED_VIEW_DATA: {
            return {
                ...state,
                detailedViewData: action.payload
            }
        }
        default:
            return state
    }
}

export const toggleModal = (variable: string, status: boolean, movieId?: number) => ({
    type: APP_TYPES.TOGGLE_MODAL,
    payload: {
        variable,
        status,
        movieId
    }
})

export const setViewMode = (mode: string) => ({
    type: APP_TYPES.SET_VIEW_MODE,
    payload: mode
})

export const setDetailedViewData = (data: UniqMovie) => ({
    type: APP_TYPES.SET_DETAILED_VIEW_DATA,
    payload: data
})

export const appStateSelector = (state: RootState) => state.appData;

export const movieIDSelector = createSelector(
    appStateSelector,
    (state) => state.movieId
);
