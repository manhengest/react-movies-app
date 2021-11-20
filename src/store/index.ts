import { createStore, applyMiddleware, Store } from 'redux'
import {createWrapper, Context} from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer, RootState } from './reducers/rootReducer'

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)

const makeStore = (context: Context) => createStore(rootReducer, composedEnhancer);
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});
