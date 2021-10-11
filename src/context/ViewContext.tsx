import React, { createContext, PropsWithChildren, useReducer } from "react";

const defaultState = {
    view: "search",
    data: {}
}

export const ViewContext: any = createContext({});

export const actionControlView = (type: any, data: any) => ({
    type: "SET_VIEW",
    payload: {
        type,
        data
    }
})

const reducer = (state: typeof defaultState, action: { type: string; payload: any; }) => {
    switch (action.type) {
        case "SET_VIEW": {
            const { payload: { type, data } } = action
            return { ...state, [type]: data }
        }
        default:
            return state
    }
}

export const ViewProvider: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const store = { state, dispatch }

    // console.log(store);
    return (
        <ViewContext.Provider value={ store }>
            { children }
        </ViewContext.Provider>
    )
}
