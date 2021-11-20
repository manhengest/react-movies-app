import React from "react";
import style from "./primary-title.module.scss"

interface PrimaryTitleProps {
    title: string,
    additionalClass?: string
}

export const PrimaryTitle:React.FunctionComponent<PrimaryTitleProps> = ({ title, additionalClass }) => {
    return (
        <span className={ `${ style["primary-title"] } ${ additionalClass }` }>{ title }</span>
    )
}
