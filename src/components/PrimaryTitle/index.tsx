import React from "react";
import "./primary-title.scss"

interface PrimaryTitleProps {
    title: string,
    additionalClass?: string
}

export const PrimaryTitle:React.FunctionComponent<PrimaryTitleProps> = ({ title, additionalClass }) => {
    const classes = ["primary-title"]

    if (additionalClass) {
        classes.push(`primary-title_${additionalClass}`)
    }

    return (
        <span className={ classes.join(" ") }>{ title }</span>
    )
}
