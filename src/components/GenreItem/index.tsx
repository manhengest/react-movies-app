import React from "react";

interface GenreItemProps {
    cb(): void,
    title: string,
    active: boolean
}

export const GenreItem:React.FunctionComponent<GenreItemProps> = ({ cb, title, active }) => {
    const classes = ["genres__btn"]

    if (active) {
        classes.push("genres__btn_active")
    }

    return (
        <li className="genres__item">
            <button onClick={ () => cb() } className={ classes.join(" ") }>{ title }</button>
        </li>
    )
}
