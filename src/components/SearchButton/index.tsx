import React from "react";
import "./search-button.scss"

export const SearchButton:React.FunctionComponent<{ handler(e: React.SyntheticEvent): void }> = ({ handler }) => {
    return (
        <button onClick={handler} className="search-button" />
    )
}
