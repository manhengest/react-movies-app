import React from "react";
import "./footer.scss"

export const Footer:React.FunctionComponent = (props) => {
    return (
        <footer className="footer">
            { props.children }
        </footer>
    )
}
