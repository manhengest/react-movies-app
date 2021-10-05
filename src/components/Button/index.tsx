import React from "react";
import "./buttons.scss"

export interface ButtonProps {
    clickHandler(): void,
    title: string,
    type: "primary-button" | "transparent-button" | "info-button",
    additionalClass?: string
}

export const Button:React.FunctionComponent<ButtonProps> = ({ title, clickHandler, type, additionalClass }) => {
    return (
        <button className={ `btn ${type} ${additionalClass}` } onClick={ clickHandler }>
            { title }
        </button>
    )
}
