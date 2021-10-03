import React, { useState, useContext } from "react";
import { DialogContext, actionControlVisibility } from "../../context/DialogContext";

export const MovieCardContextMenu:React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openDropdown = () => setIsOpen(true)
    const closeDropdown = () => setIsOpen(false)

    const { dispatch } = useContext(DialogContext)
    const onEditDialogOpen = () => dispatch(
        actionControlVisibility('edit', true)
    )
    const onDeleteDialogOpen = () => dispatch(
        actionControlVisibility('delete', true)
    )

    return (
        <div className="movie-card__context-menu">
            <button
                className="movie-card__context-menu-open-btn"
                onClick={ () => openDropdown() }
            />
            <div className={ `movie-card__context-menu-dropdown ${ isOpen ? "active" : "" }` }>
                <button
                    className="movie-card__context-menu-close-btn close-btn"
                    onClick={ () => closeDropdown() }
                />
                <ul>
                    <li>
                        <button
                            className="movie-card__context-menu-btn"
                            onClick={ () => onEditDialogOpen() }
                        >
                            Edit
                        </button>
                    </li>
                    <li>
                        <button
                            className="movie-card__context-menu-btn"
                            onClick={ () => onDeleteDialogOpen() }
                        >
                            Delete
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
