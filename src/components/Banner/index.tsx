import React from "react";
import style from "./banner.module.scss"
import { Container } from "../../containers/Container";
import { PrimaryHeader } from "../PrimaryHeader";
import { Search } from "../../containers/Search";

export const MainBanner:React.FunctionComponent = () => {
    return (
        <section className={ style.banner }>
            <div className={ style.banner__inner }>
                <Container>
                    <PrimaryHeader />
                    <Search />
                </Container>
            </div>
        </section>
    )
}
