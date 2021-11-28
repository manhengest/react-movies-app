import { combineReducers } from 'redux'

import appReducer from './appReducer'
import moviesReducer from './movieReducer'

export const rootReducer = combineReducers({
    appData: appReducer,
    moviesData: moviesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
