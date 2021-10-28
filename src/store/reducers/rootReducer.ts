import { combineReducers } from 'redux'

import appReducer from './appReducer'
import moviesReducer from './movieReducer'

const rootReducer = combineReducers({
    appData: appReducer,
    moviesData: moviesReducer,
})

export default rootReducer
