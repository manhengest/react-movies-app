import React from "react";
import style from "./buttons.module.scss"

export interface ButtonProps {
    title: string,
    buttonType: "primary-button" | "transparent-button" | "info-button",
    type?: "submit" | "button",
    disabled?: boolean,
    additionalClass?: string,
    clickHandler?: () => void
}

export const Button:React.FunctionComponent<ButtonProps> = ({ title, clickHandler, buttonType, type = "button", disabled, additionalClass }) => {
    return (
        <button
            type={ type }
            disabled={ disabled }
            onClick={ clickHandler }
            className={ `${style.btn} ${ style[buttonType] } ${ additionalClass ? additionalClass : "" }` }
        >
            { title }
        </button>
    )
}
