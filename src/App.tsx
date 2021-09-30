import React from "react";
import "./assets/styles/main.scss"
import { MainBanner } from "./containers/Banner";
import { PrimaryHeader } from "./containers/PrimaryHeader";
import { Logo } from "./components/Logo";
import { TransparentButton } from "./components/Buttons/TransparentButton";
import { Search } from "./containers/Search";
import { Container } from "./containers/Container";
import { MoviesContainer } from "./containers/MoviesContainer";
import { Footer } from "./containers/Footer";

export const App: React.FunctionComponent = () => {
    const textCb = () => {
        console.log("test");
    }

    return (
        <React.StrictMode>
            <MainBanner>
                <Container>
                    <PrimaryHeader>
                        <Logo type={ "bold" } />
                        <TransparentButton clickHandler={ textCb } title={ "+ add movie" } />
                    </PrimaryHeader>
                    <Search />
                </Container>
            </MainBanner>
            <MoviesContainer />
            <Footer>
                <Logo type={ "bold" } />
            </Footer>
        </React.StrictMode>
    )
}
