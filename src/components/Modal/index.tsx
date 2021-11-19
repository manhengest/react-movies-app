import React from "react";
import "./modal.scss"
import { MovieModal } from "../ModalBody/MovieModal";
import { DeleteModal } from "../ModalBody/DeleteModal";
import { OutsideAlerter } from "../../containers/OutsideAlerter";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/reducers/appReducer";
import { SuccessModal } from "../ModalBody/SuccessModal";
import { RootState } from "../../store";

interface ModalProps {
    variable: "isAddModalOpened" | "isEditModalOpened" | "isDeleteModalOpened" | "isSuccessModalOpened"
}

export const Modal:React.FunctionComponent<ModalProps> = ({ variable }) => {
    const dispatch = useDispatch()
    const visible = useSelector((state: RootState) => state.appData[variable])
    const onClose = () => {
        dispatch(toggleModal(variable, !visible))
    }
    let modalTitle = ""
    let modalType = "wide"

    switch (variable) {
        case "isAddModalOpened":
            modalTitle = "add movie"
            break
        case "isEditModalOpened":
            modalTitle = "edit movie"
            break
        case "isDeleteModalOpened":
            modalTitle = "delete movie"
            modalType = "narrow"
            break
        case "isSuccessModalOpened":
            modalTitle = "congratulations!"
            modalType = "narrow"
            break
    }

    return !!visible ? (
        <div className="overlay">
            <OutsideAlerter fn={ onClose }>
                <div className={ `modal modal_${ modalType } modal_${ variable }` }>
                    <button
                        onClick={ onClose }
                        className="modal__close-btn close-btn"
                    />

                    { variable === "isSuccessModalOpened" &&
                        <div className="modal__check-icon">
                            <img
                                width="68"
                                src={ require("../../assets/icons/red-round-check.svg") }
                                alt="red-round-check"
                            />
                        </div>
                    }

                    <div className="modal__header">
                        <span className="modal__title">{ modalTitle.toUpperCase() }</span>
                    </div>

                    <MovieModal modalType={ variable } />
                    <DeleteModal modalType={ variable } />
                    <SuccessModal modalType={ variable } />
                </div>
            </OutsideAlerter>
        </div>
    ) : null
}
