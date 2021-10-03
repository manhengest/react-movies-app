import React from "react";
import "./footer.scss"
import { Logo } from "../Logo";

export const Footer:React.FunctionComponent = () => {
    return (
        <footer className="footer">
            <Logo type={ "bold" } />
        </footer>
    )
}
