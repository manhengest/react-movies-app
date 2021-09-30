import React from "react";
import "./container.scss"

export const Container:React.FunctionComponent = (props) => {
    return (
        <div className="container">
            { props.children }
        </div>
    )
}
