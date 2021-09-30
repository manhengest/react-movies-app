import React from "react";
import "./logo.scss"

interface LogoTypes {
    type: "bold" | "regular"
}

export const Logo:React.FunctionComponent<LogoTypes> = ({ type = "bold" }) => {
    return (
        <a href="#" className={ `logo logo_${type}` }>
            <span>netflix</span>roulette
        </a>
    )
}
