import React, {createContext, PropsWithChildren, useReducer} from "react";

export const DialogContext: any = createContext({})

const defaultState = {
    add: false,
    edit: false,
    delete: false
}

export const actionControlVisibility = (modalType: string, visibility: boolean) => {
    if (visibility) {
        document.documentElement.classList.add("no-scroll")
    } else {
        document.documentElement.classList.remove("no-scroll")
    }

    return (
        {
            type: "SET_MODAL_VISIBILITY",
            payload: {
                modalType,
                visibility
            }
        }
    )
}

const reducer = (state: any, action: { type?: any; payload?: any; }) => {
    switch (action.type) {
        case "SET_MODAL_VISIBILITY": {
            const { payload: { modalType, visibility } } = action
            return { ...state, [modalType]: visibility }
        }
        default:
            return state
    }
}

export const DialogProvider: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const store = { state, dispatch }
    // console.log(store)
    return (
        <DialogContext.Provider value={ store }>
            { children }
        </DialogContext.Provider>
    )
}
