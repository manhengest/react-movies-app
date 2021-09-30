import React from "react";

interface GenreItemProps {
    clickHandler(): void,
    title: string,
    active: boolean
}

export const GenreItem:React.FunctionComponent<GenreItemProps> = ({ clickHandler, title, active }) => {
    const classes = ["genres__btn"]

    if (active) {
        classes.push("genres__btn_active")
    }

    return (
        <li className="genres__item">
            <button onClick={ () => clickHandler() } className={ classes.join(" ") }>{ title }</button>
        </li>
    )
}
