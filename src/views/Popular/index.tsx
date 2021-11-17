import React, { useEffect } from "react";
import { MainBanner } from "../../components/Banner";
import { MoviesContainer } from "../../containers/MoviesContainer";
import { Footer } from "../../components/Footer";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store/reducers/movieReducer";
import { act } from "@testing-library/react";

export const Popular:React.FunctionComponent = () => {
    const dispatch = useDispatch()

    act(() => {
        useEffect(() => {
            dispatch(fetchMovies())
        }, [])
    });

    return (
        <>
            <MainBanner />
            <MoviesContainer />
            <Footer />
        </>
    )
}
