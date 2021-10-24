import React from "react";

interface GenreItemProps {
    clickHandler(title: string, id: number): void,
    title: string,
    activeGenres: string[],
    id: number
}

export const GenreItem:React.FunctionComponent<GenreItemProps> = ({ id, clickHandler, title, activeGenres }) => {
    let isActive = activeGenres.includes(title) || (!activeGenres.length && id === 1)

    return (
        <button
            onClick={ () => clickHandler(title, id) }
            className={ `genres__btn ${ isActive ? "genres__btn_active" : "" }` }
        >
            { title }
        </button>
    )
}
