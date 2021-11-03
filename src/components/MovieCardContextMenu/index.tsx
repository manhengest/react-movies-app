import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/reducers/appReducer";

export const MovieCardContextMenu:React.FunctionComponent<{ id: number }> = ({ id }) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const openDropdown = () => setIsOpen(true)
    const closeDropdown = () => setIsOpen(false)
    const onEditDialogOpen = () => dispatch(
        toggleModal("isEditModalOpened", true, id)
    )
    const onDeleteDialogOpen = () => dispatch(
        toggleModal("isDeleteModalOpened", true, id)
    )
    const handleMouseLeave = () => {
        closeDropdown()
    }

    return (
        <div className="movie-card__context-menu">
            <button
                className="movie-card__context-menu-open-btn"
                onClick={ openDropdown }
            />
            <div
                className={ `movie-card__context-menu-dropdown ${ isOpen ? "active" : "" }` }
                onMouseLeave={ handleMouseLeave }
            >
                <button
                    className="movie-card__context-menu-close-btn close-btn"
                    onClick={ closeDropdown }
                />
                <ul>
                    <li>
                        <button
                            className="movie-card__context-menu-btn"
                            onClick={ onEditDialogOpen }
                        >
                            Edit
                        </button>
                    </li>
                    <li>
                        <button
                            className="movie-card__context-menu-btn"
                            onClick={ onDeleteDialogOpen }
                        >
                            Delete
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
