import React from "react";
import { Modal } from "../../components/Modal";

export const Modals:React.FunctionComponent = () => {
    return (
        <>
            <Modal variable="isAddModalOpened"/>
            <Modal variable="isEditModalOpened"/>
            <Modal variable="isDeleteModalOpened"/>
        </>
    )
}
