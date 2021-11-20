import React from "react";
import { MainBanner } from "../components/Banner";
import { MoviesContainer } from "../containers/MoviesContainer";
import { Footer } from "../components/Footer";
import { MainLayout } from "../layouts/MainLayout";
import { GetServerSideProps, NextPage } from 'next'
import { getMovies } from "../api/movies";
import { wrapper } from "../store";
import { updateMovies, updateMoviesCount } from "../store/reducers/movieReducer";

const SearchPage:NextPage = () => {
    return (
        <MainLayout>
            <MainBanner />
            <MoviesContainer />
            <Footer />
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    const moviesResponse = await getMovies()
    store.dispatch(updateMovies(moviesResponse.data.data))
    store.dispatch(updateMoviesCount(moviesResponse.data.totalAmount))

    return {
        props: {}
    }
})

export default SearchPage
