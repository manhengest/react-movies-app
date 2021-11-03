import React, { useEffect } from "react";
import "./assets/styles/main.scss"
import { Footer } from "./components/Footer";
import { fetchMovies } from "./store/reducers/movieReducer";
import { useDispatch, useSelector } from "react-redux";
import { MainBanner } from "./components/Banner";
import { DetailedMovieInfoWrapper } from "./containers/DetailedMovieInfoWrapper";
import { MoviesContainer } from "./containers/MoviesContainer";
import { Modals } from "./containers/Modals";
import { RootState } from "./store";

export const App: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const viewMode = useSelector((state: RootState) => state.appData.viewMode)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <>
            { viewMode === "search" ? <MainBanner /> : <DetailedMovieInfoWrapper /> }
            <MoviesContainer />
            <Footer />
            <Modals />
        </>
    )
}
