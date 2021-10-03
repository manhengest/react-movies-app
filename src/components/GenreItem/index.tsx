import React from "react";

interface GenreItemProps {
    clickHandler(): void,
    title: string,
    active: boolean
}

export const GenreItem:React.FunctionComponent<GenreItemProps> = ({ clickHandler, title, active }) => {
    return (
        <li className="genres__item">
            <button onClick={ clickHandler } className={ `genres__btn ${active && "genres__btn_active"}` }>{ title }</button>
        </li>
    )
}
