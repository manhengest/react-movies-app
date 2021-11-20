import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/reducers/appReducer";
import style from "./context-menu.module.scss"

export const MovieCardContextMenu:React.FunctionComponent<{ id?: number }> = ({ id }) => {
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
        <div className={ `${ style["movie-card__context-menu"] } movie-card-actions` }>
            <button
                className={ style["movie-card__context-menu-open-btn"] }
                onClick={ openDropdown }
            />
            <div
                className={ `${ style["movie-card__context-menu-dropdown"] } ${ isOpen ? style["active"] : "" }` }
                onMouseLeave={ handleMouseLeave }
            >
                <button
                    className={ `${ style["movie-card__context-menu-close-btn"] } close-btn` }
                    onClick={ closeDropdown }
                />
                <ul>
                    <li>
                        <button
                            className={ `${ style["movie-card__context-menu-btn"] } movie-card__context-menu-btn_edit` }
                            onClick={ onEditDialogOpen }
                        >
                            Edit
                        </button>
                    </li>
                    <li>
                        <button
                            className={ `${ style["movie-card__context-menu-btn"] } movie-card__context-menu-btn_delete` }
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
