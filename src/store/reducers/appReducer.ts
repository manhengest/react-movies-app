import { APP_TYPES } from "../types";
import { Movie, ReduxAction } from "../../components/MovieCard/interface";

const initialState = {
    isAddModalOpened: false,
    isEditModalOpened: false,
    isDeleteModalOpened: false,
    viewMode: "search",
    detailedViewData: {},
}

export default function appReducer(state: typeof initialState = initialState, action: ReduxAction) {
    switch (action.type) {
        case APP_TYPES.TOGGLE_MODAL: {
            if (action.payload.status) {
                document.documentElement.classList.add("no-scroll")
            } else {
                document.documentElement.classList.remove("no-scroll")
            }

            return {
                ...state,
                [action.payload.variable]: action.payload.status
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

export const toggleModal = (variable: string, status: boolean) => ({
    type: APP_TYPES.TOGGLE_MODAL,
    payload: {
        variable,
        status
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

