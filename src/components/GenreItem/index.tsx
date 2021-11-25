import React from "react";
import { useRouter } from "next/router";

import style from "./genre-btn.module.scss"

interface GenreItemProps {
    clickHandler(title: string, id: number): void,
    title: string,
    id: number
}

export const GenreItem:React.FunctionComponent<GenreItemProps> = ({ id, clickHandler, title }) => {
    const router = useRouter();
    const urlParams = new URLSearchParams(router.pathname)
    const genre = urlParams.get("genre");
    const isActive = genre?.includes(title) || (!genre && id === 1)

    return (
        <button
            onClick={ () => clickHandler(title, id) }
            className={ `${ style["genres-btn"] } ${ isActive ? style["genres-btn_active"] : "" }` }
        >
            { title }
        </button>
    )
}
