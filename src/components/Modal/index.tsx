import React, { useContext } from "react";
import "./modal.scss"
import { DialogContext, actionControlVisibility } from "../../context/DialogContext";
import { MovieModal } from "../ModalBody/MovieModal";
import { DeleteModal } from "../ModalBody/DeleteModal";
import { OutsideAlerter } from "../../containers/OutsideAlerter";

interface ModalProps {
    type: "add" | "edit" | "delete"
}

export const Modal:React.FunctionComponent<ModalProps> = ({ type }) => {
    const { state, dispatch } = useContext(DialogContext)
    const visible = state[type]
    const onClose = () => dispatch(
        actionControlVisibility(type, false)
    )

    return !!visible ? (
        <div className="overlay">
            <OutsideAlerter fn={ onClose }>
                <div className={ `modal modal_${type}` }>
                    <button
                        onClick={ onClose }
                        className="modal__close-btn close-btn"
                    />

                    <div className="modal__header">
                        <span className="modal__title">{type.toUpperCase()} MOVIE</span>
                    </div>

                    { (type === "add" || type === "edit") && <MovieModal /> }
                    { type === "delete" && <DeleteModal /> }
                </div>
            </OutsideAlerter>
        </div>
    ) : null
}
