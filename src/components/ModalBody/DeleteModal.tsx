import React from "react";
import { Button } from "../Button";

export const DeleteModal:React.FunctionComponent = () => {
    const resetHandler = () => {
        console.log(111);
    }

    return (
        <div className="delete-modal">
            <div className="modal__body">
                <p className="modal__txt">Are you sure you want to delete this movie?</p>
            </div>
            <div className="modal__footer">
                <Button clickHandler={resetHandler} title="Confirm" type="primary-button" />
            </div>
        </div>
    )
}
