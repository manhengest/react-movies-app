import React from "react";
import { MainBanner } from "../../components/Banner";
import { MoviesContainer } from "../../containers/MoviesContainer";
import { Footer } from "../../components/Footer";

export const Search:React.FunctionComponent = () => {
    return (
        <>
            <MainBanner />
            <MoviesContainer />
            <Footer />
        </>
    )
}
