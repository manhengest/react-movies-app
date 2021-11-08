import React, { useEffect } from "react";
import { MainBanner } from "../../components/Banner";
import { MoviesContainer } from "../../containers/MoviesContainer";
import { Footer } from "../../components/Footer";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store/reducers/movieReducer";

export const Popular:React.FunctionComponent = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <>
            <MainBanner />
            <MoviesContainer />
            <Footer />
        </>
    )
}
