import { APP_TYPES } from "../types";
import { Movie } from "../../components/MovieCard/interface";
import { AnyAction } from "redux";

export const initialState = {
    isAddModalOpened: false,
    isEditModalOpened: false,
    isDeleteModalOpened: false,
    isSuccessModalOpened: false,
    movieId: null,
    viewMode: "search",
    detailedViewData: {},
}

export default function appReducer(state: typeof initialState = initialState, action: AnyAction) {
    switch (action.type) {
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

export const setDetailedViewData = (data: Movie) => ({
    type: APP_TYPES.SET_DETAILED_VIEW_DATA,
    payload: data
})

