import React from "react";
import "./modal.scss"
import { MovieModal } from "../ModalBody/MovieModal";
import { DeleteModal } from "../ModalBody/DeleteModal";
import { OutsideAlerter } from "../../containers/OutsideAlerter";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/reducers/appReducer";

interface ModalProps {
    variable: "isAddModalOpened" | "isEditModalOpened" | "isDeleteModalOpened"
}

export const Modal:React.FunctionComponent<ModalProps> = ({ variable }) => {
    const dispatch = useDispatch()
    const visible = useSelector((state: any) => state.appData[variable])
    const onClose = () => {
        dispatch(toggleModal(variable, !visible))
    }
    let modalTitle = ""

    switch (variable) {
        case "isAddModalOpened":
            modalTitle = "add"
            break
        case "isEditModalOpened":
            modalTitle = "edit"
            break
        case "isDeleteModalOpened":
            modalTitle = "delete"
            break
    }

    return !!visible ? (
        <div className="overlay">
            <OutsideAlerter fn={ onClose }>
                <div className={ `modal modal_${ modalTitle }` }>
                    <button
                        onClick={ onClose }
                        className="modal__close-btn close-btn"
                    />

                    <div className="modal__header">
                        <span className="modal__title">{ modalTitle.toUpperCase() } MOVIE</span>
                    </div>

                    { (variable === "isAddModalOpened" || variable === "isEditModalOpened") && <MovieModal /> }
                    { variable === "isDeleteModalOpened" && <DeleteModal /> }
                </div>
            </OutsideAlerter>
        </div>
    ) : null
}
