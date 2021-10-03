import React from "react";
import "./banner.scss"
import { Container } from "../../containers/Container";
import { PrimaryHeader } from "../PrimaryHeader";
import { Search } from "../../containers/Search";

export const MainBanner:React.FunctionComponent = () => {
    return (
        <section className="banner">
            <div className="banner__inner">
                <Container>
                    <PrimaryHeader />
                    <Search />
                </Container>
            </div>
        </section>
    )
}
