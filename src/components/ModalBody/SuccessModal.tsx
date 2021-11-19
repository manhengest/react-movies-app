import React from "react";

export const SuccessModal:React.FunctionComponent<{ modalType: string }> = ({ modalType }) => {
    const visible = modalType === "isSuccessModalOpened"

    return visible ? (
        <div className="success-modal">
            <p className="modal__txt">
                The movie has been added to <br/> database successfully
            </p>
        </div>
    ) : null
}
