import React from "react";
import "./transparent-button.scss"
import { ButtonProps } from "../interface";

export const TransparentButton:React.FunctionComponent<ButtonProps> = ({ clickHandler, title }) => {
    return (
        <button className="transparent-button" onClick={ () => clickHandler() }>
            { title }
        </button>
    )
}
