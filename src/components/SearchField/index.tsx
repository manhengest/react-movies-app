import React from "react";
import "./search-field.scss"

export const SearchField:React.FunctionComponent = () => {
    return (
        <>
            <input type="text"
                   placeholder="What do you want to watch?"
                   className="search-field"/>
        </>
    )
}
