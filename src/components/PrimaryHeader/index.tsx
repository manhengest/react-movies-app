import React from "react";
import style from "./primary-header.module.scss"
import { Logo } from "../Logo";
import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/reducers/appReducer";

export const PrimaryHeader:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const openAddMovieModal = () => {
        dispatch(toggleModal("isAddModalOpened", true))
    }

    return (
        <header className={ style["primary-header"] }>
            <Logo additionalClass={ style.logo_bold } />
            <Button
                clickHandler={ openAddMovieModal }
                title={ "+ add movie" }
                buttonType="transparent-button"
                additionalClass="add-movie-btn"
            />
        </header>
    )
}
