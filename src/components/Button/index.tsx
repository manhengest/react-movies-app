import React from "react";
import "./buttons.scss"

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
            className={ `btn ${ buttonType } ${ additionalClass ? additionalClass : "" }` }
        >
            { title }
        </button>
    )
}
