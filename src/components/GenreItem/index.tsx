import { act } from "@testing-library/react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface GenreItemProps {
    clickHandler(title: string, id: number): void,
    title: string,
    id: number
}

export const GenreItem:React.FunctionComponent<GenreItemProps> = ({ id, clickHandler, title }) => {
    const urlParams = new URLSearchParams(location.search)
    const genre = urlParams.get("genre");
    const isActive = genre?.includes(title) || (!genre && id === 1)
    let url = useLocation();

    act(() => {
        useEffect(() => {}, [url]);
    });

    return (
        <button
            onClick={ () => clickHandler(title, id) }
            className={ `genres__btn ${ isActive ? "genres__btn_active" : "" }` }
        >
            { title }
        </button>
    )
}
