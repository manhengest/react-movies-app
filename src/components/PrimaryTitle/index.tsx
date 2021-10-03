import React from "react";
import "./primary-title.scss"

interface PrimaryTitleProps {
    title: string,
    additionalClass?: string
}

export const PrimaryTitle:React.FunctionComponent<PrimaryTitleProps> = ({ title, additionalClass }) => {
    return (
        <span className={ `primary-title ${ additionalClass && "primary-title_" + additionalClass }` }>{ title }</span>
    )
}
