import React from "react";
import "./search-field.scss"

interface SearchFieldProps {
    searchQuery: string,
    changeHandler(e: React.ChangeEvent<HTMLInputElement>): void,
    submitHandler(e: React.KeyboardEvent<HTMLInputElement>): void
}

export const SearchField:React.FunctionComponent<SearchFieldProps> = ({ searchQuery, changeHandler, submitHandler }) => {
    return (
        <input
            value={ searchQuery }
            onChange={ changeHandler }
            onKeyPress={ submitHandler }
            type="text"
            placeholder="What do you want to watch?"
            className="search-field"
        />
    )
}
