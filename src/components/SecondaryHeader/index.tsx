import React from "react";

import { Container } from "../../containers/Container";
import { Logo } from "../Logo";
import { SearchButton } from "../SearchButton";

import style from "./secondary-header.module.scss"
import router from "next/router";

export const SecondaryHeader:React.FunctionComponent = () => {
    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        router.push("/search")
    }

    return (
        <header className={ style["secondary-header"] }>
            <Container>
                <div className={ style["secondary-header__inner"] }>
                    <Logo additionalClass="logo_regular" />
                    <SearchButton handler={ clickHandler } />
                </div>
            </Container>
        </header>
    )
}
