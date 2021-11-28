import React from "react";
import style from "./search-button.module.scss"

export const SearchButton:React.FunctionComponent<{ handler(e: React.SyntheticEvent): void }> = ({ handler }) => {
    return (
        <button
            onClick={ handler }
            className={ style["search-button"] }
        />
    )
}
