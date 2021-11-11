import React, { useEffect } from "react";

interface GenreItemProps {
    clickHandler(title: string, id: number): void,
    title: string,
    id: number
}

export const GenreItem:React.FunctionComponent<GenreItemProps> = ({ id, clickHandler, title }) => {
    const urlParams = new URLSearchParams(location.search)
    let genre = urlParams.get('genre');
    let isActive = genre?.includes(title) || (!genre && id === 1)

    useEffect(() => {}, [genre]);

    return (
        <button
            onClick={ () => clickHandler(title, id) }
            className={ `genres__btn ${ isActive ? "genres__btn_active" : "" }` }
        >
            { title }
        </button>
    )
}
