import React from "react";
import { ButtonProps } from "../interface";
import "./primary-button.scss"

export const PrimaryButton:React.FunctionComponent<ButtonProps> = ({ clickHandler, title }) => {
    return (
        <button className="primary-button" onClick={ () => clickHandler() }>
            { title }
        </button>
    )
}
