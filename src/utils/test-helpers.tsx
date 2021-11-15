import React, { ReactChild } from "react";
import { createStore } from "redux";
import rootReducer from "../store/reducers/rootReducer";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

export const renderWithRedux = (
    component: ReactChild,
    { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={ store }>{ component }</Provider>),
        store
    }
}
