import React from "react";
import "./primary-header.scss"

export const PrimaryHeader:React.FunctionComponent = (props) => {
    return (
        <header className="primary-header">
            { props.children }
        </header>
    )
}
