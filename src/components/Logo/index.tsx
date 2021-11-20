import React from "react";
import style from "./logo.module.scss"

interface LogoProps {
    additionalClass: string
}

export const Logo:React.FunctionComponent<LogoProps> = ({ additionalClass }) => {
    return (
        <div className={ `${ style.logo } ${ additionalClass }` }>
            <span>netflix</span>roulette
        </div>
    )
}
