import React from "react";
import style from "./container.module.scss"

export const Container:React.FunctionComponent = (props) => {
    return (
        <div className={ style.container }>
            { props.children }
        </div>
    )
}
