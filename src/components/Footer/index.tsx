import React from "react";
import style from "./footer.module.scss"
import { Logo } from "../Logo";

export const Footer:React.FunctionComponent = () => {
    return (
        <footer className={ style.footer }>
            <Logo additionalClass={ "footer__logo" } />
        </footer>
    )
}
