import React, { useContext } from "react";
import { MainBanner } from "../../components/Banner";
import { DetailedMovieInfoWrapper } from "../DetailedMovieInfoWrapper";
import { ViewContext } from "../../context/ViewContext";
import { MoviesContainer } from "../MoviesContainer";

export const AppContainer:React.FunctionComponent = () => {
    const { state } = useContext(ViewContext)
    const view = state["view"]

    return (
        <>
            { view === "search" ? <MainBanner /> : <DetailedMovieInfoWrapper /> }
            <MoviesContainer />
        </>
    )
}
