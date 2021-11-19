import React, { useEffect } from "react";
import { MainBanner } from "../../components/Banner";
import { MoviesContainer } from "../../containers/MoviesContainer";
import { Footer } from "../../components/Footer";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store/asyncActions";
import { useParams } from "react-router-dom";

export const Home:React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const { searchQuery } = useParams() as { searchQuery: string }

    useEffect(() => {
        dispatch(fetchMovies(searchQuery))
    }, [])

    return (
        <>
            <MainBanner />
            <MoviesContainer />
            <Footer />
        </>
    )
}
